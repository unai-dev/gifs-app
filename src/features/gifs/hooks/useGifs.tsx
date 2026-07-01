import { useEffect, useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif.interface";
import { getTrendingGifs } from "../actions/get-trending-gifs";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});
  const trendingGifsCache = useRef<Gif[]>([]);

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      console.log(`Cargando gifs de cache con termino ${term}`);
      return;
    }

    await getGifs(term);
    console.log("Cargando gifs desde http");
  };

  const handleSearch = async (query: string) => {
    if (query === "") {
      console.log("Cargando gifs en tendencia desde la cache");
      setGifs(trendingGifsCache.current);
      return;
    }

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 4));

    console.log(`Cargando gifs desde HTTP con query ${query} `);
    await getGifs(query);
  };

  const getGifs = async (query: string) => {
    query = query.toLowerCase().trim();
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      const trendingGifs = await getTrendingGifs();
      setGifs(trendingGifs);
      console.log("Gifs en tendencia cargados");
      trendingGifsCache.current = trendingGifs;
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, []);

  return {
    gifs,
    previousTerms,

    handleTermClicked,
    handleSearch,
  };
};

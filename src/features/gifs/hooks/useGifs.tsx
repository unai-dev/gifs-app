import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    await getGifs(term);
  };

  const handleSearch = async (query: string) => {
    if (query === "") return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 4));

    await getGifs(query);
  };

  const getGifs = async (query: string) => {
    query = query.toLowerCase().trim();
    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    gifs,
    previousTerms,

    handleTermClicked,
    handleSearch,
  };
};

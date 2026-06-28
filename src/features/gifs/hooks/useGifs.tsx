import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
    handleSearch(term);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase().trim();

    if (query === "") return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms.splice(0, 5)]);

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return {
    gifs,
    previousTerms,

    handleTermClicked,
    handleSearch,
  };
};

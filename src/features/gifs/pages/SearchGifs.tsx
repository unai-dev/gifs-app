import { useState } from "react";

import { Header } from "../../../shared/components/Header";
import { SearchBar } from "../../../shared/components/SearchBar";
import { getGifsByQuery } from "../actions/get-gifs-by-query";
import { GifList } from "../components/GifList";
import { PreviousSearches } from "../components/PreviousSearches";
import type { Gif } from "../interfaces/gif.interface";
import { mockGifs } from "../mock/gifs.mock";

export const SearchGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
    handleSearch(term);
  };

  const handleSearch = async (query: string) => {
    query = query.toLowerCase().trim();

    if (query === "") return;

    // if (previousTerms.includes(query)) {
    //   alert("El termino de busqueda se encuentra en las busquedas previas");
    //   return;
    // }

    if (!previousTerms.includes(query)) {
      setPreviousTerms([...previousTerms, query]);
    }

    const gifs = await getGifsByQuery(query);

    setGifs(gifs);
  };

  return (
    <>
      {/* Header */}
      <Header
        header="Buscador de Gifs"
        subHeader="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        buttonText="Buscar"
        placeholder="Buscar Gifs"
        onHandleSearch={handleSearch}
      />

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onHandleTermClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs ? gifs : mockGifs} />
    </>
  );
};

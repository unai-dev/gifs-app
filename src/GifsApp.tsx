import { useState } from "react";

import { GifList } from "./features/gifs/components/GifList";
import { PreviousSearches } from "./features/gifs/components/PreviousSearches";
import { Header } from "./shared/components/Header";
import { SearchBar } from "./shared/components/SearchBar";
import type { Gif } from "./features/gifs/interfaces/gif.interface";
import { getGifsByQuery } from "./features/gifs/actions/get-gifs-by-query";
import { getTrendingGifs } from "./features/gifs/actions/get-trending-gifs";
import { mockGifs } from "./features/gifs/mock/gifs.mock";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
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

  const loadTrendingGifs = async () => {
    const gifs = await getTrendingGifs();

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
      <button onClick={loadTrendingGifs}>Load Trending</button>

      {/* Gifs */}
      <GifList gifs={gifs ? gifs : mockGifs} />
    </>
  );
};

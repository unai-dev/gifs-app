import { Header } from "../../../shared/components/Header";
import { SearchBar } from "../../../shared/components/SearchBar";
import { GifList } from "../components/GifList";
import { PreviousSearches } from "../components/PreviousSearches";
import { mockGifs } from "../mock/gifs.mock";
import { useGifs } from "../hooks/useGifs";

export const SearchGifs = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

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
        onQuery={handleSearch}
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

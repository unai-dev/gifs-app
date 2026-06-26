import { GifList } from "./features/gifs/components/GifList";
import { PreviousSearches } from "./features/gifs/components/PreviousSearches";
import { mockGifs } from "./features/gifs/mock/gifs.mock";
import { Header } from "./shared/components/Header";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <Header
        header="Buscador de Gifs"
        subHeader="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar buttonText="Buscar" placeholder="Buscar Gifs" />

      {/* Busquedas previas */}
      <PreviousSearches searches={["goku", "saitama", "elden ring"]} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};

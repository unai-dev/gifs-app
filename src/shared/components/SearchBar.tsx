import { useState, type FC, type KeyboardEvent } from "react";

interface Props {
  buttonText: string;
  placeholder?: string;

  onHandleSearch: (query: string) => void;
}

export const SearchBar: FC<Props> = ({
  buttonText,
  placeholder = "Buscar",
  onHandleSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onHandleSearch(query);
    setQuery("");
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch}>{buttonText}</button>
      </div>
    </>
  );
};

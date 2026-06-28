import { useEffect, useState, type FC, type KeyboardEvent } from "react";

interface Props {
  buttonText: string;
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar: FC<Props> = ({
  buttonText,
  placeholder = "Buscar",
  onQuery,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
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

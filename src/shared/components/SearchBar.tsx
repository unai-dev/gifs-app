import type { FC } from "react";

interface Props {
  buttonText: string;
  placeholder?: string;
}

export const SearchBar: FC<Props> = ({
  buttonText,
  placeholder = "Buscar",
}) => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder={placeholder} />
        <button>{buttonText}</button>
      </div>
    </>
  );
};

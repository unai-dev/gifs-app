import type { FC } from "react";

interface Props {
  searches: string[];

  onQuery: (query: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onQuery }) => {
  return (
    <>
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          {searches.map((search) => (
            <li key={search} onClick={() => onQuery(search)}>
              {search}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

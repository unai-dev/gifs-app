import type { FC } from "react";

interface Props {
  searches: string[];

  onHandleTermClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({
  searches,
  onHandleTermClicked,
}) => {
  return (
    <>
      <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
          {searches.map((search) => (
            <li key={search} onClick={() => onHandleTermClicked(search)}>
              {search}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

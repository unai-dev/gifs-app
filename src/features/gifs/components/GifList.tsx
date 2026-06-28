import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { GifCard } from "./GifCard";

interface Props {
  gifs: Gif[];
}

export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <>
      <div className="gifs-container">
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  );
};

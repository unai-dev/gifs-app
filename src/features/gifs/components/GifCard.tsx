import type { FC } from "react";
import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gif: Gif;
}

export const GifCard: FC<Props> = ({ gif }) => {
  return (
    <>
      <div key={gif.id} className="gif-card">
        <img src={gif.url} alt={gif.title} />
        <h3>{gif.title}</h3>
        <p>
          {gif.width} x {gif.height} (1.5m)
        </p>
      </div>
    </>
  );
};

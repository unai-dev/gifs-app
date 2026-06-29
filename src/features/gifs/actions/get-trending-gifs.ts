import { gifApi } from "../api/gif.api";
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getTrendingGifs = async (): Promise<Gif[]> => {
  const response = await gifApi.get<GiphyResponse>("/trending", {
    params: {
      limit: 10,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.url,

    image: gif.images.original.url,
    height: +gif.images.original.height,
    width: +gif.images.original.width,
  }));
};

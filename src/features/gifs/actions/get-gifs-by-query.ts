import { gifApi } from "../api/gif.api";
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await gifApi.get<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 10,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    image: gif.images.original.url,
    url: gif.url,
    title: gif.title,
    height: +gif.images.original.height,
    width: +gif.images.original.width,
  }));
};

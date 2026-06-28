import axios from "axios";

export const gifApi = axios.create({
  baseURL: import.meta.env.VITE_GIPHY_BASE_URL,
  params: {
    lang: "en",
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
  },
});

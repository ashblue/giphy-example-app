import { IGifSearchResponse } from './i-gif-search-response';
import { IGif } from './i-gif';

const API_KEY = 'Q1vGNiVWAfI7M449E1yS1ZVKN0pDWjFK';

export const searchGifs = async (search?: string): Promise<IGif[]> => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}`,
  );
  const { data }: IGifSearchResponse = await res.json();

  return data.map(({ id, title, images }) => {
    const { width, height, webp, url } = images.fixed_width;
    return { id, width, height, url: webp, title, urlFallback: url };
  });
};

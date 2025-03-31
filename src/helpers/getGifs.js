export const getGifs = async (categoria) => {
  const api_key = `fxleaZEtWjM5wdNHB58uGFQkWoWzRF7k`;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

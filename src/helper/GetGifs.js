export const GetGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q= ${category}&limit=10&api_key=ixQYzZbB6ciVwAspI4OyraUVPyQtX3vK`;
    const result = await fetch(url);
    const { data } = await result.json();
    return data.map((obj) => {
      return {
        id: obj.id,
        titulo: obj.title,
        url: obj.images?.original.url,
      };
    });
  };
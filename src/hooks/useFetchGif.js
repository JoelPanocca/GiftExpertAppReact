import { useEffect, useState } from "react";
import { GetGifs } from "../helper/GetGifs";

//Esto es un CustomHook
export const useFetchGif = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    GetGifs(category).then((imgs) => {
      setState({ data: imgs, loading: false });
    });
  }, [category]);

  return state;
};

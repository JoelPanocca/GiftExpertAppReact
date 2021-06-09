import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Saitama"
  ]);

  return (
    <>
      <h2> Buscador de GIFs APP - Panoquex </h2>
      
      <AddCategory setCategories = {setCategories}/>
      <hr />
      <ol>      
        {
            categories.map((cat) => {
                return <GifGrid key = {cat} category = {cat} />
            })
        }
      </ol>
    </>
  );
};

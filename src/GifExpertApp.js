import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch"
  ]);
//   const handleAdd = (val) => {
//     setCategories([...categories, 'Pokemon']);
//     setCategories( cat => [...cat, 'Pokemon 1'])
//   };

  return (
    <>
      <h2> GifExpert App</h2>
      
      <AddCategory setCategories = {setCategories}/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar </button> */}
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

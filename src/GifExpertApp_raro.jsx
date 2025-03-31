import { useState } from "react";
import { AddCategory_raro } from "./components/AddCategory_raro";

const apiKey = "hEo6bPsJHvh1Ustyg6QjlGndHMGQWwKU";
let busqueda;
const url = `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=10&api_key=${apiKey}`;

export const GifExpertApp_raro = () => { // Array con las categorias
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
    "Naruto",
    "Pokemon",
    "Digimon",
    "Bleach",
    "Inuyasha",
    "Death Note",
    "Full Metal Alchemist",
    "Brotherhood",
    "Attack on Titan",
  ]);

  const addCategoria = () => {
    // categorias.push('NuevasCategoria');
    setCategorias([ onAddCategory, ...categorias ]); // Sim queremos añadir cosas tenemos que hacerlo de esta forma, nos olvidamos del push
  }

  console.log(categorias);

  return (
    <>
      {/* {titulo} */}
      <h2>GifExpertApp</h2>

      {/* { Input } */}
      <AddCategory_raro setCategorias={ setCategorias } />
      {/* { listado de Gif} */}
      {/* <button onClick={ addCategoria }>Agregar</button> */}
      <ol>
        {categorias.map((categoria) => { /*Aqui estamos creando un map para recorrer el array. Orden de llamada: value: string, index: number, array: string*/
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>
      {/* { Gif Item } */}
    </>
  );
};

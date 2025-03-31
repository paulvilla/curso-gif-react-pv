import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const apiKey = "YQdeTVDemXpfU95NheJdcIVjrjqXPnkB";
let busqueda;
let limit = 5;
const url = `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=${limit}&api_key=${apiKey}`;

export const GifExpertApp = () => { // Array con las categorias
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

  const onAddCategory = (addCategory) => {
    // categorias.push('NuevasCategoria');
    for (let i = 0; i < categorias.length; i++) if (categorias[i].toLowerCase() === addCategory.toLowerCase()) return
    // categorias.forEach(element => { if (element.toLowerCase() === addCategory.toLowerCase()) { return } return });
    // if( categorias.includes(addCategory) ) return;  // Usamos el includes() para revisar si ya existe en el array
    setCategorias([ addCategory, ...categorias ]); // Si queremos añadir cosas tenemos que hacerlo de esta forma, nos olvidamos del push
  }

  // console.log(categorias);

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory onNewCategory={ event => onAddCategory(event) }  /> 
      { categorias.map((categoria) =>  /*Aqui estamos creando un map para recorrer el array. Orden de llamada: value: string, index: number, array: string*/
        (
          <GifGrid key={ categoria } categoria={ categoria } />
        )) 
      }

    </>
  );
};

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria ) => {

   // ESTA ES LA PARTE NORMAL CON HOOKS DE REACT
   const [images, setImages] = useState([]); // useState es un Hook de React que te permite agregar una variable de estado a tu componente.
   const [isLoading, setIsLoading] = useState(true);

   const getImages = async() => {
      const newImages = await getGifs( categoria );
      setImages(newImages);
      setIsLoading(false);
   }

   useEffect(() => { // useEffect es un Hook de React que te permite sincronizar un componente con un sistema externo.
      getImages();
   }, [])


   return { // si retornamos objetos en lugar de jsx , entonces quiere decir que es un hook
      images,
      isLoading
   };
};

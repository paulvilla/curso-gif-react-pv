import { GrifItem } from "./GrifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoria }) => {
  // CUSTOMHOOKS
  const { images, isLoading } = useFetchGifs(categoria);
  // Hook personalizado, simpre usaremos
  // useXXX para que simepre empiezen igaul los nombre de los hooks

  // console.log({isLoading});

  return (
    <>
      <div>
        <h3>{categoria}</h3>
        {
          isLoading && (<h2>Cargando...</h2>) // esto es lo mismomque una condición ternaria pero al reves, asi no ahoramos el de los dos resultados de la condicion
        }

        <div className="card-grid">
          {images.map((image) => (
            <GrifItem key={image.id} {...image} /> // Es muy util usar { ...image } por aqui enviamos todas la propiedades que tiene
          ))}
        </div>
      </div>
    </>
  );
};

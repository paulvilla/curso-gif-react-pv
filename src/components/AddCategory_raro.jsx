import { useState } from "react";

export const AddCategory_raro = ({ setCategorias }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => { // ({event})
    //console.log(event.target.value)
    setInputValue(target.value); // setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    if( inputValue.trim().length <= 1 ) return; // comprobamos que se halla escrito sino salimos de la funcion
    setCategorias( categorias => [ inputValue, ...categorias ]);
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={ (event) => onSubmit(event) }>
        <input
          type="text"
          placeholder="Añade una nueva categoria"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
 };
 
import { categories } from "../data/categories";
import { ChangeEvent } from "react";
import { useState } from "react";
import { FormEvent } from "react";
import { Activity } from "../types";

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    //se crea un estado para la actividad que va a ser un objeto asi evitamos tener tantos states
    category: 1, //valor inicial de la categoria
    name: "", //valor inicial de la actividad
    calories: 0, // valor inicial de las calorias
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> //se crea una funcion para manejar el cambio de los inputs
  ) => {
    //funcion para manejar el cambio de los inputs

    //esta variable va comparar si donde estamos escribiendo va ser categoria o caloria
    //se le pasa un evento de tipo ChangeEvent que puede ser de tipo HTMLSelectElement o de tipo HTMLInputElement

    const isNumberField = ["category", "calories"].includes(e.target.id); //se crea una variable que va a comparar si el id del target es igual a category o calorias
    //includes es un metodo que va a buscar si el id del target esta dentro de un arreglo que se le pasa como parametro y va a devolver un booleano si esta o no
    //true si esta y false si no esta dentro del arreglo
    setActivity({
      //se actualiza el estado de la actividad
      ...activity, //escribir el estado actual
      [e.target.id]: isNumberField ? +e.target.value : e.target.value, //se crea un arreglo que va a comparar si el campo es un numero o no 
      /*lo que hace es que e.target.id va a buscar dentro de las propiedades del state
      y con e.target.value se va a escribir el value */
    });
  };

  const isValidActivity = () => {
    const { category, name, calories } = activity; //se crea una constante que va a desestructurar la actividad
    return name.trim() !== "" && calories > 0 && category > 0; //se va a retornar si el nombre no esta vacio, si las calorias son mayores a 0 y si la categoria es mayor a 0
    //trim es un metodo que va a quitar los espacios en blanco de un string
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //evitar que se recargue la pagina o evitar accion   por defecto
    console.log('enviando formulario')
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={handleSubmit }>
      <div className="grid grid-cols-1 gap 3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white "
          id="category"
          value={activity.category} //seleccionar el valor de la categoria
          onChange={handleChange} //onChange sirve para manejar el cambio de los inputs
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap 3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="Escribe la actividad"
          value={activity.name} //seleccionar el valor de la actividad
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap 3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          placeholder="Calorias"
          value={activity.calories} //seleccionar el valor de las calorias
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg disabled:opacity-50"
        value={activity.category === 1 ? "Guardar Comida" : 'Guardar ejercicio'}//si la categoria es 1 va a guardar comida si no va a guardar ejercicio
        disabled={!isValidActivity()} //si la actividad no es valida se deshabilita el boton
      />
    </form>
  );
}

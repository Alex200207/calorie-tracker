import { categories } from "../data/categories";
import { ChangeEvent } from "react";
import { useState } from "react";

export default function Form() {

  const [activity, setActivity] = useState({//se crea un estado para la actividad que va a ser un objeto asi evitamos tener tantos states
    category: '',//valor inicial de la categoria
    name: '',//valor inicial de la actividad
    calories: 0// valor inicial de las calorias
    
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement> |  ChangeEvent<HTMLInputElement>//se crea una funcion para manejar el cambio de los inputs 
    //se le pasa un evento de tipo ChangeEvent que puede ser de tipo HTMLSelectElement o de tipo HTMLInputElement
) => {//funcion para manejar el cambio de los inputs
    setActivity({//se actualiza el estado de la actividad
      ...activity,//escribir el estado actual
      [e.target.id]: e.target.value
      /*lo que hace es que e.target.id va a buscar dentro de las propiedades del state
      y con e.target.value se va a escribir el value */
    })

   
  }


  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap 3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white "
          id="category"
          value={activity.category}//seleccionar el valor de la categoria
          onChange={handleChange}//onChange sirve para manejar el cambio de los inputs
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap 3">
      <label htmlFor="name" className="font-bold">Actividad:</label>
          <input 
          type="text"
           id="name"
           className="border border-slate-300 p-2 rounded-lg w-full bg-white"
           placeholder="Escribe la actividad"
           value={activity.name}//seleccionar el valor de la actividad
           onChange={handleChange}
          />

      </div>
      <div className="grid grid-cols-1 gap 3">
      <label htmlFor="calories" className="font-bold">Calorias:</label>
          <input 
          type="number"
           id="calories"
           className="border border-slate-300 p-2 rounded-lg w-full bg-white"
           placeholder="Calorias"
           value={activity.calories}//seleccionar el valor de las calorias
           onChange={handleChange}
          />
      </div>

      <input 
      type="submit"
      className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg" 
      />

    </form>
  );
}

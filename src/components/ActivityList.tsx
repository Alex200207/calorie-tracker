import { useMemo } from "react";
import { Activity } from "../types";
import { categories } from "../data/categories";
type ActivityListProps = {
  activities: Activity[]; //se crea una interfaz que va a recibir un arreglo de actividades
};
export default function ActivityList({ activities }: ActivityListProps) {
  //se recibe el arreglo de actividades

  //creamos una funcion que va a recibir una categoria y va a retornar el nombre de la categoria
  //ademas usamos useMemo para que no se vuelva a ejecutar la funcion si no cambia la categoria en state de las actividades
  const categoryNames = useMemo(
    () =>
      //se crea una constante que va a recibir un arreglo de categorias
      (category: Activity["category"]) =>
        categories.map((cat) => (cat.id === category ? cat.name : "")), //se va a mapear el arreglo de categorias y se va a comparar si el id de la categoria es igual a la categoria que se le pasa como parametro
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y actividades
      </h2>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div className="space-y-2 relative">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-while uppercase font-bold ${
                activity.category === 1 ? "bg-lime-500" : "bg-orange-500"//se va a comparar si la categoria es igual a 1 se va a colocar un color de fondo lime-500 si no se va a colocar un color de fondo orange-500
              }`}
            >
              {categoryNames(+activity.category)}{/*se le pasa la categoria*/}
              {/*se le pasa la categoria*/}
            </p>
            {/*se le pasa la categoria*/}
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500">
              {activity.calories}
              {""}
              <span>calorias</span>
            </p>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
}

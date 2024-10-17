
import { Activity } from "../types"


//las acciones son las que describen que esta sucediendo y que informacion es la que va modificar
//una accion consta de dos partes
//el type que es la descripcion y el payload que es la informacion que modifica o que va agregar a nuestro state
export type ActivityActions = {
    //una ves enviado el formulario le decimos a reducer que ejecute el type de save-activity
    type: 'save-activity', 
    payload: {newActivity : Activity}//pero cuando se genera una actividad nueva tenemos que pasarle cierta informacion
    //lo que el usuario ingreso en ese formulario eso se le conoce como el payload
    //piensa en el payload como los datos que se van a agregar a nuestro state
} | {
    type: 'set-activeId',//este es el type que se va a ejecutar cuando se seleccione una actividad
    payload: {id: Activity['id']}//este es el id que se va a seleccionar
}


//nuestro state
type ActivityState = {
    activities: Activity[]//colacamos nuestro arreglo y va ser de tipo Activity
    activeId: Activity['id']//pasamos un look up type para que activeId sea de tipo id

}

export const initialState : ActivityState = {//asociamos nuestro activitystate
    activities: [],//lo definimos como un arreglo vacio
    activeId: '',//aqui se ira colocando el id que vayamos seleccionando

}


export const activityReducer = (//este es el reducer
    //veras que tenemos activiy Actions para los acciones y activity state para el estado
    state : ActivityState =  initialState,//este reducer va a recibir un estado
    action : ActivityActions
) => {//este reducer es el que conecta a ambos

    if(action.type === 'save-activity'){
        //este codigo maneja la logica para actualizar el state
        //todo lo que coloques aqui una ves mandes a llamar una accion se va a ejecutar
        //este if .
        //antes de este puedes manejar la logica de registros duplicados o todo loq que sea necesario
       return{//este va retornar el estado actualizado
            ...state,//copia del state
            activities: [...state.activities, action.payload.newActivity]//se va a agregar una nueva actividad
            //usamos el operador spreed para copiar el arreglo de actividades y luego agregamos la nueva actividad

       }
    }
    if(action.type === 'set-activeId'){
        return{
            ...state,
            activeId: action.payload.id
        }
    }
    
    return state
}
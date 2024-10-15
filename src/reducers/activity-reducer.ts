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
}


//nuestro state
type ActivityState = {
    activities: Activity[]//colacamos nuestro arreglo y va ser de tipo Activity

}

export const initialState : ActivityState = {//asociamos nuestro activitystate
    activities: []//lo definimos como un arreglo vacio

}


export const activityReducer = (
    //veras que tenemos activiy Actions para los acciones y activity state para el estado
    state : ActivityState =  initialState,//este reducer va a recibir un estado
    action : ActivityActions
) => {//este reducer es el que conecta a ambos

    if(action.type === 'save-activity'){
        //este codigo maneja la logica para actualizar el state
        //todo lo que coloques aqui una ves mandes a llamar una accion se va a ejecutar
        //este if .
        console.log('guardando actividad de save-activity')
    }
}
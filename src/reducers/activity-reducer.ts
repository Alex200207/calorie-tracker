import { Activity } from "../types"


//las acciones son las que describen que esta sucediendo
export type ActivityActions = {

}

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

    
}
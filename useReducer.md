Que es Use Reducer????

Es una alaternativa de useEstate esta basado en este
 -es un hook para manejar el state
 -y useReducer es un Hook de react que te permite agrega un reducer a tus componentes.

 El hook use reducer en react es una alternativa a useState que se utiliza para manejar estados mas complejos y transiciones de estado que involucran logica mas complicada . Mientras que useestate es perfecto para el manejo de estados simples , usereducer es mas adecuado para situaciones donde el nuevo estado depende del estado anterior o cuando hay multiples sub-valores o logica condiconal a considerar.


 composicion 

 const [state, dispatch] = usereducer(reducer, initialState);

 reducer : es una fucnion que toma el estado actual y una accion y devuelve un nuvo estado.

 Estado inicial: El estado inicial del reducer.

 algunos terminos cuando trabajas con useReducer .

 cuando creas tus reducer encontraras varios terminos

 el state es el valor del estado cuya logica se maneja dentro del Reducer

 initialState es el estado inicial con el que es creado el reducer , este initialState es similar a los valores de inicio de useState 

 Actions son las acciones o funciones que manejan toda la logica para modificar el state.

 Payload es la informacion que modifica mi state.

 Dispatch es la funcion que manda a llamar la accion con el payload

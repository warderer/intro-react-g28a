import { useState } from 'react'

const ToDoList = () => {
  // 1. Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista cada vez que cambia (se ejecuta nuevamente el return).
  const [inputValue, setInputValue] = useState('')

  // 3b. Función que se ejecuta cuando se hace click en el botón Agregar
  const handleAdd = () => {
    console.log('Agregue', inputValue)
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      {/* 2. Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la información en el estado apenas sea tecleado. La información del input siempre la tendra event.target.value */}
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      {/* 3a. Otra forma de trabajar con eventos es que podemos declarar la función más arriba y solo mandarla a llamar en el evento */}
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        <li>Item 1<button>Eliminar</button></li>
        <li>Item 2<button>Eliminar</button></li>
        <li>Item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}
export default ToDoList

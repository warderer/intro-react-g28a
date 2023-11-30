import { useState } from 'react'

const ToDoList = () => {
  // 1. Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista cada vez que cambia (se ejecuta nuevamente el return).
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <h1>Lista de Tareas</h1>
      <input type='text' />

      <button>Agregar</button>
      <ul>
        <li>Item 1<button>Eliminar</button></li>
        <li>Item 2<button>Eliminar</button></li>
        <li>Item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}
export default ToDoList

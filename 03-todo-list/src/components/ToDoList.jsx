import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  // 1. Los estados de React sirven para guardar información que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista cada vez que cambia (se ejecuta nuevamente el return).
  const [inputValue, setInputValue] = useState('')

  // 4. Añadimos un estado para guardar la lista de tareas
  const [todos, setTodos] = useState([])

  // 3b. Función que se ejecuta cuando se hace click en el botón Agregar
  // 5. Modificamos la función para que agregue el nuevo elemento a la lista de tareas
  const handleAdd = () => {
    // console.log('Agregue', inputValue)
    setTodos([...todos, inputValue])
    setInputValue('') // vacio el input para volver a escribir
  }

  // 6. Función que se encarga de eliminar un elemento de la lista de tareas
  const deleteTodo = (index) => {
    // Filter: Permite filtrar un arreglo y regresar un nuevo arreglo con los elementos que cumplan la condición
    setTodos(todos.filter((todo, i) => i !== index))
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
        {/* 7. Iterar el arreglo de ToDos y por cada elemento, renderizar un componente ToDoItem */}
        {
            todos.map((todo, index) => (
              <ToDoItem
                key={index}
                todoName={todo}
                handleDelete={() => deleteTodo(index)}
              />
            ))
        }
      </ul>
    </>
  )
}
export default ToDoList

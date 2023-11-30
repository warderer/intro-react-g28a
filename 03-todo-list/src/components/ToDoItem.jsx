const ToDoItem = ({ todoName, handleDelete }) => {
  return (
    <li>
      {todoName}
      <button
        className='delete-button'
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </li>
  )
}
export default ToDoItem

// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails

  const deleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todo-item-container">
      <p className="para">{title}</p>
      <button className="delete-button" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem

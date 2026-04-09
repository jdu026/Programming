//https://programming-3215.s2434.workers.dev


import "./todolist.css"
import Button from "./components/Button.jsx"
import CheckBox from "./components/CheckBox.jsx";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";

function TodoListApp() {
  return (
    <div className="todo">
      <h1 className="todo__title">Todo Todo</h1>
      <form className="todo__form">
        <input type="text" className="todo__input" placeholder="할 일을 입력하세요" />
        <Button type="submit" className="todo__button todo__button--add">Add</Button>
      </form>
      <ul className="todo__list">
        <TodoItemEmpty/>
        <li className="todo__item todo__item--complete">
          <CheckBox type="checkBox" className="todo__check" name="" id="1" />
          <button className="todo__button todo__button--edit">🖋️</button>
          <button className="todo__button todo__button--delete">🚮</button>
        </li>
      </ul>
    </div>
  )
}
export default TodoListApp;
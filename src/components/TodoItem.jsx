import CheckBox from "./CheckBox.jsx";
import Button from './Button.jsx';
import Checkbox from "./CheckBox.jsx";
import { useState } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);      //수정중인지 아닌지
    const [editText, setEditText] = useState(todo.text);    //수정중인 text
    function handleEditClick() {
        if (!isEditing) { //edit시작
            setIsEditing(true);
            setEditText(todo.text);
        } else { //edit끝
            const trimmedText = editText.trim();
            //빈칸이 아니고 이전 text가 아닐때만 editTodo()
            if (trimmedText !== "" && trimmedText !== todo.text) {
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);

        }
    }
    return (
        // todo.isCompleted가 true면 " todo__item--complete", false ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {!isEditing &&
                <CheckBox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >{todo.text}</CheckBox>
            }
            {isEditing &&
                < input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    //enter치면, handleEditClick
                    onKeyDown={(event) => { if (event.key === "Enter") handleEditClick() }}
                    autoFocus
                />
            }
            <Button className="todo__button todo__button--edit" onClick={handleEditClick}>{isEditing ? "🛠️" : "🖋️"}</Button>
            <Button className="todo__button todo__button--delete" onClick={() => deleteTodo(todo.id)}>🚮</Button>
        </li>
    );
}
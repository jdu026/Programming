import { useState } from 'react';
import Button from './Button.jsx';


export default function TodoAdder({addTodo}) {
    const [inputTodo, setInputTodo] = useState('');
    
    const handleSumbit = (event) => {
        event.preventDefault(); //기본 동작 막자
        if(!inputTodo.trim()) return; //빈칸이면 바로 return
        addTodo(inputTodo.trim()); //input에 있는 text value 할 일 하기 뒤
        setInputTodo('');
    }


    return (
        <form className="todo__form" onSubmit={handleSumbit}>
            <input type="text" className="todo__input" placeholder="할 일을 입력하세요" value = {inputTodo} onChange = {(event) => setInputTodo(event.target.value)}/>
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    );
}
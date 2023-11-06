import styled from "styled-components"
import { TodoTitle } from "../TodoTitle"
import TodoForm from "../TodoForm"
import { useState } from "react"
import TodoList from "../TodoList"

const TodoMain = styled.main`
    background-color: var(--secondary-color);
    width: 750px;
    margin: auto 20px;
    @media (max-width: 419px) {
    width: 93%;
    }
`
export default function Todo(){
    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = () => {
        if (inputText !== '') {
            const newItem = {
                text: inputText,
                checked: false
            };
            setTodoList([...todoList, newItem]);
            setInputText('');
        }
    }

    const deleteTask = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index, 1);
        setTodoList(updatedTodoList);
    }

    const handleCheckboxChange = (index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].checked = !updatedTodoList[index].checked;
        setTodoList(updatedTodoList);
    }
    
    return(
        <TodoMain>
            <TodoTitle>To-Do List</TodoTitle>
            <TodoForm
                onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <TodoList
                todoList={todoList}
                handleCheckboxChange={handleCheckboxChange}
                deleteTask={deleteTask}
            />
        </TodoMain>
    )
}

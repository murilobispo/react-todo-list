import styled from "styled-components"
import { TodoTitle } from "./components/TodoTitle"
import EmptyTodo from "./components/EmptyTodo"
import { TodoInput } from "./components/TodoInput"
import SubmitButton from "./components/SubmitButton"
import { useState } from "react"
import TodoItem from "./components/TodoItem"

const TodoWrapper = styled.body`
  background-color: var(--primary-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TodoMain = styled.main`
  background-color: var(--secondary-color);
  width: 750px;
  margin: auto 20px;
  @media (max-width: 419px) {
    width: 93%;
  }
`

const TodoFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  overflow: hidden;
  position: relative;
  @media (orientation: landscape) {
    margin: 20px 0;
  }
`

const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-height: 150px;
  max-height: 490px;
  overflow: auto;
  padding: 0 0 40px 0;
  
  @media (max-height: 740px) {
    height: 400px;
  }
  @media (max-height: 640px) {
    height: 350px;
  }
  @media (max-height: 590px) {
    height: 300px;
  }
  @media (orientation: landscape) and (max-height: 500px) {
    height: 170px;
    padding: 0 0 10px 0;
  }
`

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = () => {
    if (inputText !== '') {
      const newItem = {
        text: inputText,
        completed: false
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
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  return (
    <TodoWrapper>
      <TodoMain>
        <TodoTitle>To-Do List</TodoTitle>
        <TodoFormContainer onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <TodoInput
            type="text"
            placeholder="Add a task"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <SubmitButton />
        </TodoFormContainer>
        <TodoListContainer>
          {!todoList.length ? (
            <EmptyTodo />
          ) : (
            todoList.map((item, index) => (
              <TodoItem
                checkboxOnChange={() => handleCheckboxChange(index)}
                completed={item.completed}
                deleteOnClick={() => deleteTask(index)}
                checked={item.completed}
              >
                {item.text}
              </TodoItem>
            ))
          )}
        </TodoListContainer>
      </TodoMain>
    </TodoWrapper>
  )
}

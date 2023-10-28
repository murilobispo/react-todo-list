import styled from "styled-components"
import { TodoTitle } from "./components/TodoTitle"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const TodoWrapper = styled.body`
  background-color:var(--primary-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center;
`
const TodoMain = styled.main`
  background-color: var(--secondary-color);
  width: 750px;
`

export default function App() {
  return (
      <TodoWrapper>
        <TodoMain>
          <TodoTitle>To-Do List</TodoTitle>
          <TodoForm/>
          <TodoList/>
        </TodoMain>
      </TodoWrapper>
  )
}

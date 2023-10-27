import styled from "styled-components"
import { TodoTitle } from "./components/TodoTitle"
import TodoForm from "./components/TodoForm"

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
  height: 70%;
`
const Todo = styled.div`
`

export default function App() {
  return (
      <TodoWrapper>
        <TodoMain>
          <TodoTitle>To-Do List</TodoTitle>
          <TodoForm/>
          <Todo>
          </Todo>
        </TodoMain>
      </TodoWrapper>
  )
}

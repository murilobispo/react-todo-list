import styled from "styled-components"
import Todo from "./components/Todo"

const TodoWrapper = styled.body`
  background-color: var(--primary-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <TodoWrapper>
      <Todo/>
    </TodoWrapper>
  )
}

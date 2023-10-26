import styled from "styled-components"

const TodoWrapper = styled.body`
  background-color: #171723;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; 
  align-items: center;
`
const TodoMain = styled.main`
  background-color: #292C44;
  width: 40%;
  height: 70%;
`
function App() {
  return (
      <TodoWrapper>
        <TodoMain>

        </TodoMain>
      </TodoWrapper>
  )
}

export default App

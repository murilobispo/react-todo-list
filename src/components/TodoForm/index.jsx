import styled from "styled-components"
import { TodoInput } from "../TodoInput"
import { SubmitPlus } from "../SubmitPlus"

const TodoFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction:column;
  margin: 30px 0;
  overflow: hidden;
  position: relative;
`

export default function TodoForm() {
    return(
        <TodoFormContainer>
            <TodoInput type="text" placeholder="- Add a task -"></TodoInput>
            <SubmitPlus/>
        </TodoFormContainer>
    )
}

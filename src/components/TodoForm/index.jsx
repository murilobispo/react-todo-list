import styled from "styled-components"
import { TodoInput } from "../TodoInput"
import SubmitButton from "../SubmitButton"

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

export default function TodoForm({onSubmit, value, onChange}){
    return(
        <TodoFormContainer onSubmit={onSubmit}>
            <TodoInput
                type="text"
                placeholder="Add a task"
                value={value}
                onChange={onChange}
                spellcheck="false"
            />
            <SubmitButton />
        </TodoFormContainer>
    )
}

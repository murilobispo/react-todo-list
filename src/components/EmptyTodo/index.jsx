import styled from "styled-components"
import Logo from "../../assets/app-logo.png"


const EmptyTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: auto 0;
`
const LogoImage = styled.img`
    width: 170px;
`
const EmptyTodoText = styled.p`
    font-family: var(--main-font);
    color: white;
`

export default function EmptyTodo(){
    return(
        <EmptyTodoContainer>
            <LogoImage src={Logo} />
            <EmptyTodoText>Your tasks are waiting for you!</EmptyTodoText>
        </EmptyTodoContainer>
    )
}
import styled from "styled-components"
import  TodoItem  from "../TodoItem"

const TodoListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    height: 470px;
    overflow: auto;
    padding: 0 0 40px 0;

`

export default function TodoList(){
    return(
        <TodoListContainer>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </TodoListContainer>
    )
}
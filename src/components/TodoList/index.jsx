import styled from "styled-components"
import EmptyTodo from "../EmptyTodo"
import TodoItem from "../TodoItem"

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

export default function TodoList({todoList, handleCheckboxChange, deleteTask}){
    return(
        <TodoListContainer>
            {!todoList.length ? (
                <EmptyTodo />
                ) : (
                todoList.map((item, index) => (
                    <TodoItem
                    checkboxOnChange={() => handleCheckboxChange(index)}
                    checked={item['checked']}
                    deleteOnClick={() => deleteTask(index)}
                    >
                    {item['text']}
                    </TodoItem>
                ))
            )}
        </TodoListContainer>
    )
}
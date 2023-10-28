import styled from "styled-components"
import {FaRegEdit} from "react-icons/fa"
import {FaRegTrashCan} from "react-icons/fa6"

const CheckBox = styled.input`
    
`
const TodoItemContainer = styled.li`
    background-color: var(--primary-color);
    width: 90%;
    height: 53px;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    gap:18px;
    align-items: center;
    border-radius: 11px;
    flex-shrink: 0;
`
const TodoItemText = styled.p`
    font-family: var(--main-font);
    font-weight: 500;
    color: #FF7A00;
    font-size: 18px;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;

    ${CheckBox}:checked + & {
        text-decoration: line-through;
        text-decoration-thickness: 2px;
        color: #D8AD94;
    }
`

const IconsContainer = styled.div`
    display: flex;
    gap: 7px;
`

const createStyledIcon = (icon, iconColor) => {
    return styled(icon)`
        color: white;
        width: 20px;
        height: 20px;
        visibility: hidden;
        cursor: pointer;

        &:hover {
            color: ${iconColor};
        }
        ${TodoItemContainer}:hover & {
            visibility: visible;
        }
    `
}
const EditIcon = createStyledIcon(FaRegEdit, "#00FFD1;")
const DeleteIcon = createStyledIcon(FaRegTrashCan, "#FF0000")

export default function TodoItem({ children }){
    return(
        <TodoItemContainer>
            <CheckBox type="checkbox"></CheckBox>
            <TodoItemText>{ children }</TodoItemText>
            <IconsContainer>
                <EditIcon/>
                <DeleteIcon/>
            </IconsContainer>
        </TodoItemContainer>
    )
}
import styled from "styled-components"

export const TodoInput = styled.input`
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  outline: none;
  border: none;
  background-color:var(--primary-color);
  color: #fff;
  padding: 5px 100px;
  transition: 0.5s ease;

  &::placeholder {
    color: #ffffff73 
  }
  &:focus{
    padding: 10px 80px;
    font-weight: 500;
  }
`

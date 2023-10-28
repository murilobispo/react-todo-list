import styled from "styled-components"
import { TodoInput } from "../TodoInput"
import {PiPlusBold} from 'react-icons/pi'


const SubmitButtonContainer = styled.button`
  background-color: #fff;
  border-radius: 50%; /* Torna a div circular */
  width: 70px;
  height: 70px;
  position: absolute;
  cursor: pointer;
  right: -100px;
  top: 50%;
  transform: translateY(-50%) ;
  transition: 1s ease; 
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  ${TodoInput}:focus + & {
    right: -10px; 
  }
`


 const SubmitButtonIcon = styled(PiPlusBold)`
  color:var(--secondary-color);
  height: 27px;
  width: 27px;
  position: absolute;
  left: 15px;
`
export default function SubmitButton(){
  return(
    <SubmitButtonContainer>
      <SubmitButtonIcon/>
    </SubmitButtonContainer>
  )
}

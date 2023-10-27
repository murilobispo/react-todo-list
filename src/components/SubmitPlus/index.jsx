import styled from "styled-components"
import { TodoInput } from "../TodoInput"
import {HiOutlinePlus} from 'react-icons/hi'

export const SubmitPlus = styled(HiOutlinePlus)`
  color:white;
  height: 25px;
  width: 25px;
  position: absolute;
  cursor: pointer;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  transition: 1s ease; 
  ${TodoInput}:focus + & {
    right: 25px; 
  }
`

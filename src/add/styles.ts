import styled from "styled-components";
import { Button, Modal } from 'antd';

export const Container = styled.div`
position: relative;
height: 100px;
width: 100%;
/* border: solid 1px; */
display: flex;
align-items: center;
justify-content: space-between;
    &.ant-modal-root {
        position: absolute;
        top: 0;
    }
`;

export const Input = styled.input`
  font-size: 18px;
  height: 50px;
  width: 50%;
  border-radius: 25px;
  padding-left: 45px;
  margin-left: 15px;
`;

export const icon = styled.i`
position: absolute;
left: 35px;
`;

export const AddContactsBnt = styled.button`
height: 40px;
width: 100px;
border: solid 1px blue;
margin-right: 5.5rem;
background-color: blue;
cursor: pointer;
border-radius: 5px;
  :hover {
   color: #C3AD60;
   border: #C3AD60;
  }
`;

export const Form = styled.form`
`;

export const Inputs = styled.input`
height: 45px;
width: 450px;
border: none;
margin-top: 12px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ImageInputDiv = styled.div`
height: 100px;
width: 450px;
/* border: solid 1px; */
`;

export const ImageInput = styled.input`
height: 300px;
width: 450px;
`;

export const SaveAndCloseDiv = styled.div`
height: 50px;
width: 450px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const Save = styled.button`
 height: 40px;
 width: 100px;
 background-color: #3ca2ed;
 border: blue;
 border-radius: 10px;
 color: #fff;
 font-weight: 600;
`;

export const Close = styled.button`
 height: 40px;
 width: 100px;
 background-color: red;
 border: blue;
 border-radius: 10px;
 color: #fff;
 font-weight: 600;
`;



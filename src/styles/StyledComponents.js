import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
  border-radius: 10px;
  border: 4px solid #374E7A;
  background-color: #5073B5;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  text-align: center;
  //border: 1px solid red;
  //gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 7px;
  background-color: #dddddd;
  color: black;
  &:hover{
    color: #eee;
    background-color: #BB2136;
  }
`;
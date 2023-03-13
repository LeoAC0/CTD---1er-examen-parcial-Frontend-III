import React from "react";
import styled from "styled-components";
import { Container } from "../styles/StyledComponents";

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
`;

export const CustomInputs = ({ name, value, setChange }) => {
  return (
    <Container>
      <Input
        placeholder={`Ingrese su ${name}`}
        value={value}
        onChange={(e) => setChange(e.target.value)}
      />
    </Container>
  );
};

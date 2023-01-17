import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid #000;
`;

export const LabelStyled = styled.label`
  margin-bottom: 10px;
`;

export const InputStyled = styled.input`
  width: 60%;
  height: 30px;
  margin-bottom: 20px;

  &:focus,
  &:hover {
    border: 2px solid #408dadb5;
    border-radius: 2px;
    outline: 2px solid #46add9a7;
  }
`;

export const BtnStyled = styled.button`
  width: 100px;
  height: 25px;
  font-size: 14px;
  border-radius: 4px;
  border: 0.5px solid #000;
  background-color: transparent;
  transition-property: background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #408dadb5;
    border-color: transparent;
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
  }
`;

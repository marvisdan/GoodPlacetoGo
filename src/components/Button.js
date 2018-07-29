import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: 1px solid #7db645;
  border-radius: 3px;
  color: #7db645;
  padding: 5px 6px;
  outline: none;
  font-family: proxima-nova, Arial, sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  line-height: 12px;
  font-size: 12px;
  text-transform: uppercase;
  &:hover {
    background: #7db645;
    color: white;
  }
`;

const Button = () => (
  <Btn type="button">
    Lire
  </Btn>
);

export default Button;

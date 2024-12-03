import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8; 
  }

  &:active {
    opacity: 0.6; 
  }
`;
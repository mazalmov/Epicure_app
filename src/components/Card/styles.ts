import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    max-height: 300px;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    
    
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
  
`;
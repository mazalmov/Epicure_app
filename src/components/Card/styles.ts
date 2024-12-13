import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

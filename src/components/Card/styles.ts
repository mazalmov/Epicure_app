import styled from "styled-components";
import { Colors } from "../colors";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Secondary.Beige};
    width: 100%; 
    height: auto;
    padding: 16px; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;

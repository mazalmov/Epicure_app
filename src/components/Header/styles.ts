import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  width: 90%;
  height: auto;
  background-color: white;
  flex-direction: row;

  @media (min-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;
export const HamburContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  padding: 15px;
  width: auto; 
  display: block;
  
  @media (min-width: 768px) {
    display: none;
    padding: 20px;
  }

  @media (min-width: 1024px) {
    display: none;
    padding: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  color: black;
  width: 100%; 
  max-width: 200px; 
  
  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    padding: 30px;
  }
`;


export const LogoTitleDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 5px;
    width: 70%;
    height: auto;
    display: block;
  }
`;


  export const Image = styled.img`
  width: 100%;    
  height: auto;    
  object-fit: contain; 
  cursor: pointer;
`;

export const TreeButtomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  gap: 10px;  
  
  @media (min-width: 768px) {
    width: 60%;
    width: auto;  
    height: auto;
  }

  @media (min-width: 1024px) {
    width: auto; 
    height: auto;
  }
`;
export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;  
  width: auto; 
  padding: 0;
  margin: 0; 
`;

export const SearchText = styled.input`
  display: none;  
  width: 100%;  
  padding: 5px;
  border: none; 
  border-radius: 4px;
  font-size: 16px;

  @media (min-width: 768px) {
    display: block;
    height: 30px;
  }

  @media (min-width: 1024px) {
    height: 34px;
    font-size: 18px;
  }
`;

export const RestorantAndChefsContainer = styled.div`
  display: none; 

  
  @media (min-width: 768px) {
    gap: 10px;
    display: flex; 
    flex-direction: row; 
    width: 20%;
    height: auto;
  }

  @media (min-width: 1024px) {
    width: 374px;
    height: 34px;
  }
`;

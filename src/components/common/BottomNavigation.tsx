import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;

const NavButton = styled.button`
  padding: 8px 15px;
  background-color: white;
  border: 2px solid #38a3a5;
  border-radius: 20px;
  color: #38a3a5;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 100px;
`;

const BottomNavigation: React.FC = () => {
  return (
    <NavContainer>
      <NavButton>Style</NavButton>
      <NavButton>Impact</NavButton>
      <NavButton>Result</NavButton>
    </NavContainer>
  );
};

export default BottomNavigation;
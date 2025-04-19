import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0;
  font-weight: bold;
`;

const NavTab = styled.div<{active: boolean}>`
  padding: 10px 20px;
  text-align: center;
  width: 50%;
  font-size: 1.2rem;
  border-bottom: ${props => props.active ? '3px solid #38a3a5' : 'none'};
`;

const MenuButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #38a3a5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <NavContainer>
      <div style={{ display: 'flex', width: '80%' }}>
        <NavTab active={location.pathname === '/reflect'}>
          <Link to="/reflect" style={{ textDecoration: 'none', color: 'black' }}>
            REFLECT
          </Link>
        </NavTab>
        <NavTab active={location.pathname === '/grow'}>
          <Link to="/grow" style={{ textDecoration: 'none', color: 'black' }}>
            GROW
          </Link>
        </NavTab>
      </div>
      <MenuButton>
        <span>≡</span>
      </MenuButton>
    </NavContainer>
  );
};

export default Navigation;
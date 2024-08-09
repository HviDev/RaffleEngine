// src/components/Header.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import ThemeToggleButton from './ThmeToggleButton';
import UserIcon from '../assets/icons/userIcon.svg?react';

const NavBarContainer = styled.header`
  background-color: var(--background-color);
`;


const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
    <div className="navbar-brand">
      <a href="/" className="navbar-brand">Raffle Manager v1</a>
    </div>
    <div className="d-flex align-items-center ml-auto">
      <ThemeToggleButton />
      <div className="dropdown ms-3">
        <a href="#" className="d-flex align-items-center  text-decoration-none " id="dropdownUser" data-bs-toggle="dropdown">
        <UserIcon className='buttonIcon' />
        </a>
        <ul className="dropdown-menu dropdown-menu-end text-small shadow" aria-labelledby="dropdownUser" >
          <li><a className="dropdown-item" href="#">Configuración</a></li>
          <li><a className="dropdown-item" href="#">Mi perfil</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  </header>
  
  );
};

export default Header;

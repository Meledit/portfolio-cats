import React from 'react';
import { CatNavbarCont } from './CatNavbarElements';
import CatButton from '../CatButton';

const CatNavbar = ({ isVisible }) => {
  return (
    <CatNavbarCont isVisible={isVisible}>
        <CatButton showWhenUnhovered={false} text="Qui suis-je ?" to="whoAmI" />
        <CatButton showWhenUnhovered={false} text="Mes projets" to="/projects" />
    </CatNavbarCont>
  )
}

export default CatNavbar

import React from 'react';
import S from './styles';
import CocktailsLogo from '../../assets/cocktails.png';

const Header = () => (
  <S.Header>
    <S.Logo src={CocktailsLogo} title="cocktails app logo" alt="main-logo" />
    <S.Title>Cocktails App</S.Title>
  </S.Header>
);
export default Header;

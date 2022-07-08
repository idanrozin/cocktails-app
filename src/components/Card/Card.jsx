import React from 'react';
import S from './styles';

const Card = (props) => {
  const { drinkName, imgUrl } = props;
  // console.log('object :>> ', object);
  return (
    <S.SectionContainer>
      <S.Title>{drinkName}</S.Title>
      <S.Image alt="cocktail-image" src={imgUrl} />
    </S.SectionContainer>
  );
};
export default Card;

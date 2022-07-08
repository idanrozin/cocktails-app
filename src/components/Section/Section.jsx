import React from 'react';
import Card from '../Card/Card.jsx';
import S from './styles';

const Section = (props) => {
  const { title, alcPercentage, drinks = [] } = props;
  return (
    <S.SectionContainer>
      <S.Title>
        {title}&nbsp;
        <S.SubTitle>
          {alcPercentage ? `${alcPercentage}%` : 'alc % not available'}
        </S.SubTitle>
      </S.Title>
      {drinks.map((alc) => (
        <Card
          key={alc.idDrink}
          drinkName={alc.strDrink}
          imgUrl={alc.strDrinkThumb}
        />
      ))}
    </S.SectionContainer>
  );
};
export default Section;

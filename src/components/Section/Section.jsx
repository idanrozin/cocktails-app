import React from 'react';
import S from './styles';

const Section = (props) => {
  const { title, alcPercentage } = props;
  return (
    <S.SectionContainer>
      <S.Title>
        {title}&nbsp;
        <S.SubTitle>
          {alcPercentage ? `${alcPercentage}%` : 'alc % not available'}
        </S.SubTitle>
      </S.Title>
    </S.SectionContainer>
  );
};
export default Section;

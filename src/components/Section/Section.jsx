import React from 'react';
import S from './styles';

const Section = ({ title, alcPercentage, children }) => (
  <S.SectionContainer>
    <S.Title>
      {title}&nbsp;
      <S.SubTitle>
        {alcPercentage ? `${alcPercentage}%` : 'alc % not available'}
      </S.SubTitle>
    </S.Title>
    <>{children}</>
  </S.SectionContainer>
);
export default Section;

import React from 'react';
import S from './styles';

const Section = ({ title, subTitle, children }) => (
  <S.SectionContainer>
    <S.Title>
      {title}&nbsp;
      {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
    </S.Title>
    <>{children}</>
  </S.SectionContainer>
);
export default Section;

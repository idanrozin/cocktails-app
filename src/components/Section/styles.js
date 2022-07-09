import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  color: white;
  background-color: #ff76762e;
  margin: 25px 0;
  padding: 0 8px;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #242946;
  font-size: 2.5em;
  margin: 15px;
`;
const SubTitle = styled.span`
  color: #242946;
  opacity: 0.7;
`;

export default { SectionContainer, Title, SubTitle };

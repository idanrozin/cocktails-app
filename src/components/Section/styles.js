import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  color: white;
  background-color: #7e86962b;
  margin: 25px 0;
  padding: 0 8px;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #242946;
`;
const SubTitle = styled.span`
  color: #242946;
  opacity: 0.7;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    max-width: 190px;
    margin: 60px;
  }
`;

export default { SectionContainer, Title, SubTitle, ChildrenContainer };

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 60px;
  }
`;
export default { Wrapper, CardsContainer };

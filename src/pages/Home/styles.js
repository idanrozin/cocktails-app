import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid white;
  > * {
    margin: 30px 20px;
  }
`;
export default { Wrapper, CardsContainer };

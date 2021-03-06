import styled from 'styled-components';
import mediaQueries from '../../services/CssUtils';

const Header = styled.header`
  display: flex;
  align-items: center;
  color: white;
  height: 14vh;
  background-color: #7e8696;
  padding: 0 8px;
  font-size: 2.5em;
  ${mediaQueries(
    `font-size: 1em;
    margin: -1px;`
  )}
`;

const Title = styled.h1`
  color: #242946;
`;

const Logo = styled.img`
  width: 130px;
  aspect-ratio: 1;
  margin-top: 25px;
`;

export default { Header, Title, Logo };

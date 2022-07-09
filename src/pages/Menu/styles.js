import styled from 'styled-components';
import mediaQueries from '../../services/CssUtils';

const MenuPageContainer = styled.div`
  @media print {
    button {
      display: none;
    }
    body {
      font-size: 10pt;
      margin: 0;
      padding: 0;
    }
  }
`;
const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  width: 50%;
  margin: 24px auto;
  box-shadow: 0px 0px 11px 9px #43434354;
  padding: 24px;
  ${mediaQueries(`padding: 30px;`)}
`;

const ImagedTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  h2 {
    text-transform: uppercase;
  }
  h2,
  h4 {
    text-align: start;
    margin: 0 0 0 21px;
  }
  h4 {
    font-weight: normal;
    color: #ac7474d1;
  }
  ul {
    text-align: start;
    margin-top: 8px;
  }
  ${mediaQueries(`
   flex-direction: column;    
    max-height: 500px;
    justify-content: flex-start;
    overflow-y: auto;
    padding-right: 8px;
  `)}
  @media print {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Instructions = styled.div`
  margin: 0 auto;
  padding: 5px;
  width: 45%;
  font-weight: 600;
  @media print {
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 2em;
  font-weight: 650;
  ${mediaQueries(`
  font-size: 1.2em;
  padding: 8px;
  `)}
`;

const CocktailLogo = styled.img`
  ${mediaQueries(`width: 80%`)}
`;

export default {
  MenuItem,
  ImagedTitle,
  Instructions,
  Title,
  CocktailLogo,
  MenuPageContainer,
};

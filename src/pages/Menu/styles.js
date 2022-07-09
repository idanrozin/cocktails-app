import styled from 'styled-components';

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
`;

const ImagedTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
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
`;

const Instructions = styled.div`
  margin: 0 auto;
  padding: 5px;
  width: 45%;
  font-weight: 600;
`;

export default { MenuItem, ImagedTitle, Instructions };

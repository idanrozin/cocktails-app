import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  color: white;
  height: 14vh;
  background-color: #7e8696;
`;

const Title = styled.h1`
  color: #242946;
`;

const Logo = styled.img`
  width: 130px;
  aspect-ratio: 1;
`;

export default { Header, Title, Logo };

// export { Title, Header };

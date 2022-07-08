import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #7e8696;
  padding: 10px 4px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin: 0;
`;
const selectedTab = (selected) =>
  selected
    ? `
  background: #303030;
  border-color: white;
`
    : ``;

const ListItem = styled.li`
  &:hover:not(${(props) => !props.selected}) {
    background: #979797;
  }
  border-radius: 7px;
  border-bottom: 4px solid transparent;
  ${(props) => selectedTab(props.selected)}
  padding: 8px 16px;
  margin: 0 4px;
  > * {
    color: ${(props) => (props.selected ? 'white' : 'black')};
    font-weight: 600;
    text-decoration: none;
  }
`;

export default { List, ListItem, Nav };

// export { Title, Header };

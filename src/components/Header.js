import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: ${({ theme }) => theme.spacing.padding};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
`;

const Header = () => (
  <HeaderContainer>
    <h1>Your Name</h1>
  </HeaderContainer>
);

export default Header;

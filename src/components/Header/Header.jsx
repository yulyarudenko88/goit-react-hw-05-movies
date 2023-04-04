import { StyledHeader, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;

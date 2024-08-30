import logo from '../../assets/logo.svg'

import {
  Nav,
  Contain,
  Brand,
  Logo,
  Name,
  NavLinks,
  NavLink
} from './styles'

const Navbar = () => {
  return (
    <Nav>
      <Contain>
        <Brand to="/">
          <Logo src={logo} alt="Engilore Logo" />
          <Name>Engilore</Name>
        </Brand>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Forum</NavLink>
          <NavLink to="/">Blog</NavLink>
        </NavLinks>
      </Contain>
    </Nav>
  );
}

export default Navbar

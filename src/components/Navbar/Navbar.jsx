import { useState, useEffect } from 'react'
import { useAuth } from '../../container/Auth/contexts'

import {
  Nav,
  Contain,
  Brand,
  Logo,
  Name,
  RightSection,
  NavLinks,
  NavLink,
  LoginButton,
  LoginHamButton,
  HamburgerMenu,
  MobileMenu,
  MobileMenuLink,
} from './styles'

import logo from '../../assets/logo.svg'


const Navbar = () => {
  const { user, logout } = useAuth()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => window.innerWidth > 768 && setMobileMenuOpen(false)

  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu)
    return () => window.removeEventListener('resize', closeMobileMenu)
  }, [])

  const handleLogout = () => {
    logout()
    setMobileMenuOpen(false)
  }

  return (
    <Nav>
      <Contain>
        <Brand to="/">
          <Logo src={logo} alt="Engilore Logo" />
          <Name>Engilore</Name>
        </Brand>

        <RightSection>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </NavLinks>

          {user ? (
            <LoginButton onClick={handleLogout} className="desktop">
              Logout
            </LoginButton>
          ) : (
            <LoginButton to="/auth/login" className="desktop">
              Sign In
            </LoginButton>
          )}

          <HamburgerMenu onClick={toggleMobileMenu}>☰</HamburgerMenu>
        </RightSection>
      </Contain>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileMenuLink>
          <MobileMenuLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileMenuLink>
          <MobileMenuLink to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileMenuLink>

          {user ? (
            <LoginHamButton onClick={handleLogout}>Logout</LoginHamButton>
          ) : (
            <LoginHamButton to="/auth/login" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </LoginHamButton>
          )}
        </MobileMenu>
      )}
    </Nav>
  )
}

export default Navbar

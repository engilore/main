import { useState, useEffect } from 'react'
import logo from '../../assets/logo.svg'

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
  MobileMenuLink
} from './styles'


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    if (window.innerWidth > 768) {
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu)
    return () => {
      window.removeEventListener('resize', closeMobileMenu)
    }
  }, [])

  const handleLinkClick = () => {
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
          <LoginButton to="/login" className="desktop">Sign In</LoginButton>
          <HamburgerMenu onClick={toggleMobileMenu}>
            ☰
          </HamburgerMenu>
        </RightSection>
      </Contain>
      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuLink to="/" onClick={handleLinkClick}>Home</MobileMenuLink>
          <MobileMenuLink to="/about" onClick={handleLinkClick}>About</MobileMenuLink>
          <MobileMenuLink to="/blog" onClick={handleLinkClick}>Blog</MobileMenuLink>
          <LoginHamButton to="/login" onClick={handleLinkClick}>Sign In</LoginHamButton>
        </MobileMenu>
      )}
    </Nav>
  )
}

export default Navbar
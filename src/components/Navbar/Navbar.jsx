import { useState, useEffect } from 'react'
import { useAuth } from '../../container/Auth/contexts'
import Button from '../Button/index'
import ProfileMenu from '../ProfileMenu/index'

import {
  Nav,
  Contain,
  Brand,
  Logo,
  Name,
  RightSection,
  NavLinks,
  NavLink,
  HamburgerMenu,
  MobileMenu,
  MobileMenuLink,
} from './styles'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  const { user } = useAuth()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => window.innerWidth > 768 && setMobileMenuOpen(false)

  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu)
    return () => window.removeEventListener('resize', closeMobileMenu)
  }, [])

  return (
    <Nav>
      <Contain>
        <Brand to="/" onClick={() => setMobileMenuOpen(false)}>
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
            <ProfileMenu />
          ) : (
            <Button
              text="Sign In"
              size="base"
              shape="rounded"
              bgColor="var(--bg-primary)"
              hoverColor="none"
              to="/auth/login"
            />
          )}

          <HamburgerMenu onClick={toggleMobileMenu}>☰</HamburgerMenu>
        </RightSection>
      </Contain>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuLink to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </MobileMenuLink>
          <MobileMenuLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </MobileMenuLink>
          <MobileMenuLink to="/blog" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </MobileMenuLink>
        </MobileMenu>
      )}
    </Nav>
  )
}

export default Navbar

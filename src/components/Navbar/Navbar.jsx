import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/authContexts'
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
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
    setProfileMenuOpen(false)
  }

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen)
    setMobileMenuOpen(false)
  }

  const closeMenusOnResize = () => {
    if (window.innerWidth > 768) {
      setMobileMenuOpen(false)
      setProfileMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', closeMenusOnResize)
    return () => window.removeEventListener('resize', closeMenusOnResize)
  }, [])

  return (
    <Nav>
      <Contain>
        <Brand to="/" onClick={() => {
          setMobileMenuOpen(false)
          setProfileMenuOpen(false)
        }}>
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
            <ProfileMenu isProfileMenuOpen={isProfileMenuOpen} toggleProfileMenu={toggleProfileMenu} />
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

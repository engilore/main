import { NavbarWrapper, NavbarLeft, NavbarCenter, NavbarRight } from './styles'


const Navbar = ({ leftContent, centerContent, rightContent, bgColor, borderTop, borderBottom }) => {
  return (
    <NavbarWrapper bgColor={bgColor} borderTop={borderTop} borderBottom={borderBottom}>
      <NavbarLeft>
        {leftContent}
      </NavbarLeft>
      <NavbarCenter>
        {centerContent}
      </NavbarCenter>
      <NavbarRight>
        {rightContent}
      </NavbarRight>
    </NavbarWrapper>
  )
}

export default Navbar

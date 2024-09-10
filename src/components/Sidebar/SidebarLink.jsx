import PropTypes from 'prop-types'

import { useSidebar } from '../../contexts/sidebarContexts' 
import Button from '../Button/index'

import { StyledLink, Item, ItemWrapper, Text } from './styles'


const SidebarLink = ({ to, text, icon, variant, bgColor, textColor, hoverColor }) => {
  const { toggleSidebar } = useSidebar()

  if (variant === 'special') {
    return (
      <Button
        text={text}
        size="medium"
        shape="pill"
        bgColor={bgColor}
        textColor={textColor}
        hoverColor={hoverColor}
        icon={icon}
        iconRight={false}
        to={to}
      />
    )
  }

  return (
    <StyledLink to={to} onClick={toggleSidebar}>
      <Item>
        <ItemWrapper>
          {icon && icon}
          <Text>{text}</Text>
        </ItemWrapper>
      </Item>
    </StyledLink>
  )
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
}

export default SidebarLink

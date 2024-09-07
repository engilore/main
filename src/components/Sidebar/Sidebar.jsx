import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/index'

import {
  Side,
  Contain,
  Content,
  Items,
  Item,
  StyledLink,
  ItemWrapper,
  Text,
  Divider,
  Title,
  ItemContainer
} from './styles'

const Sidebar = ({ links }) => {
  return (
    <Side>
      <Contain>
        <Content>
          <Items>
            {links.map(({ title, to, icon, text, isDivider, variant, bgColor, textColor }, index) => (
              <React.Fragment key={index}>
                {title && <Title>{title}</Title>}
                {isDivider && <Divider key={`divider-${index}`} />}

                <ItemContainer>
                  {variant === 'special' ? (
                    <Button
                      text={text}
                      size="medium"
                      shape="pill"
                      bgColor={bgColor}
                      textColor={textColor}
                      hoverColor="none"
                      icon={icon}
                      iconRight={false}
                      to={to}
                    />
                  ) : (
                    <StyledLink to={to} key={to}>
                      <Item>
                        <ItemWrapper>
                          {icon && icon}
                          <Text>{text}</Text>
                        </ItemWrapper>
                      </Item>
                    </StyledLink>
                  )}
                </ItemContainer>
              </React.Fragment>
            ))}
          </Items>
        </Content>
      </Contain>
    </Side>
  )
}

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      icon: PropTypes.element,
      text: PropTypes.string.isRequired,
      isDivider: PropTypes.bool,
      variant: PropTypes.string,
      title: PropTypes.string,
      bgColor: PropTypes.string,  // Add bgColor prop
      hoverColor: PropTypes.string,  // Add hoverColor prop
    })
  ).isRequired,
}

export default Sidebar

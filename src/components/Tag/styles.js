import styled from 'styled-components'

export const Tagger = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  padding: 5px 10px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  text-decoration: none;  /* Ensure no underline for links */
  color: ${({ textColor }) => textColor || 'var(--clr-white)'};

  /* Handle background and text colors based on whether it's outlined or filled */
  background-color: ${({ outlined, bgColor }) => outlined ? 'transparent' : bgColor || 'var(--bg-primary)'};

  /* Apply border when outlined is true */
  border: ${({ outlined, borderColor }) => outlined ? `2px solid ${borderColor || 'var(--clr-secondary)'}` : 'none'};

  /* Hover effect for background, text, and border colors */
  &:hover {
    background-color: ${({ hoverBgColor, outlined, bgColor }) => hoverBgColor || (outlined ? 'transparent' : bgColor)};
    color: ${({ hoverTextColor, textColor }) => hoverTextColor || textColor || 'var(--clr-white)'};
    border-color: ${({ hoverBorderColor, outlined, borderColor }) => outlined && hoverBorderColor ? hoverBorderColor : borderColor};
  }

  /* Ensure link-specific styling is overridden */
  a {
    text-decoration: none;
    color: inherit;
  }

  &:focus {
    outline: none;
  }
`;

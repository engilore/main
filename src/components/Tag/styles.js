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
  text-decoration: none;
  color: ${({ $textColor }) => $textColor || 'var(--clr-white)'};
  background-color: ${({ $outlined, $bgColor }) => $bgColor || ($outlined ? 'transparent' : 'var(--bg-primary)')};
  border: ${({ $outlined, $borderColor }) => $outlined ? `2px solid ${$borderColor || 'var(--clr-secondary)'}` : 'none'};

  &:hover {
    background-color: ${({ $hoverBgColor, $outlined, $bgColor }) => $hoverBgColor || $bgColor};
    color: ${({ $hoverTextColor, $textColor }) => $hoverTextColor || $textColor || 'var(--clr-white)'};
    border-color: ${({ $hoverBorderColor, $outlined, $borderColor }) => $hoverBorderColor || ($outlined ? $borderColor : 'none')};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &:focus {
    outline: none;
  }
`

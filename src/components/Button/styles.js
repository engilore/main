import styled from 'styled-components'


export const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: ${({ iconRight }) => (iconRight ? 'space-between' : 'center')};
  
  padding: ${({ size }) =>
    size === 'small'
      ? 'var(--btn-padding-sm)'
      : size === 'medium'
      ? 'var(--btn-padding-md)'
      : size === 'large'
      ? 'var(--btn-padding-lg)'
      : 'var(--btn-padding-base)'};

  font-size: ${({ size }) =>
    size === 'small'
      ? 'var(--fs-sm)'
      : size === 'medium'
      ? 'var(--fs-md)'
      : size === 'large'
      ? 'var(--fs-lg)'
      : 'var(--fs-base)'};

  border-radius: ${({ shape }) =>
    shape === 'pill'
      ? 'var(--radius-pill)'
      : shape === 'rounded'
      ? 'var(--radius-md)'
      : 'var(--radius-none)'};

  background-color: ${({ bgColor }) => bgColor || 'var(--bg-primary)'};
  color: ${({ textColor }) => textColor || 'var(--clr-white)'};
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || 'var(--bg-secondary)'};
    opacity: var(--opacity-strong);
  }

  &:focus {
    outline: none;
  }
`

export const ButtonIcon = styled.span`
  display: inline-flex;
  margin-left: ${({ iconRight }) => (iconRight ? '10px' : '0')};
  margin-right: ${({ iconRight }) => (!iconRight ? '10px' : '0')};
`

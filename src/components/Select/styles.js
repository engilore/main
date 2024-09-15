import styled from 'styled-components'


export const Select = styled.select`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  border-radius: var(--radius-lg);
  border: 2px solid var(--bg-light);
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  padding-right: 40px;

  &:focus {
    outline: none;
  }
`
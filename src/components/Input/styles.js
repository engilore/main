import styled from 'styled-components'


export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const Input = styled.input`
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

export const ToggleButton = styled.button`
  color: var(--clr-grey);
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 5px;

  &:focus {
    outline: none;
  }
`
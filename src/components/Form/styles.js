import styled from 'styled-components'


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FieldContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

export const Label = styled.label`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-lg);
  margin-bottom: 5px;
  display: block;
  width: 100%;
`

export const SubmitButton = styled.button`
  color: var(--clr-white);
  background-color: var(--bg-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;

  &:hover {
    opacity: var(--opacity-strong);
  }

  &:disabled {
    opacity: var(--opacity-light);
    cursor: not-allowed;
  }
`

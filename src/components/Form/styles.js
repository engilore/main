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

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const Input = styled.input`
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

import styled from 'styled-components'


export const Section = styled.section`
  background-color: var(--bg-white);
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Content = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 20px;
`

export const Label = styled.label`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-medium);
  margin-bottom: 10px;
`

export const TextArea = styled.textarea`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-lg);
  width: 100%;
  padding: 10px;
  min-height: 500px;
  resize: none;
  border: 4px;
  border-left: solid;
  border-color: var(--bg-secondary);

  &:focus {
    outline: none;
    border: 2px;
    border-left: solid;
    border-color: var(--bg-secondary);
  }

  &::placeholder {
    color: var(--clr-secondary);
    font-size: var(--fs-lg);
  }
`
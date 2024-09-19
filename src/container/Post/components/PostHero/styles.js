import styled from 'styled-components'


export const Section = styled.section`
  background-color: var(--bg-accent);
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

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`

export const Content = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`

export const Label = styled.label`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-medium);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
  }
`

export const TextInput = styled.input`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-3xl);
  background-color: var(--bg-accent);
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px;
  border-left: solid;
  border-color: var(--bg-accent);

  &:focus {
    outline: none;
    border: 2px;
    border-left: solid;
    border-color: var(--bg-secondary);
  }

  &::placeholder {
    color: var(--clr-secondary);
    font-size: var(--fs-3xl);

    @media (max-width: 768px) {
      font-size: var(--fs-xl);
    }
  }

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
    padding: 8px;
  }
`

export const TextArea = styled.textarea`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-lg);
  font-weight: var(--fw-light);
  font-style: italic;
  background-color: var(--bg-accent);
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  min-height: 150px;
  resize: none;
  border: 2px;
  border-left: solid;
  border-color: var(--bg-accent);

  &:focus {
    outline: none;
    border: 2px;
    border-left: solid;
    border-color: var(--bg-secondary);
  }

  &::placeholder {
    color: var(--clr-secondary);
    font-size: var(--fs-lg);

    @media (max-width: 768px) {
      font-size: var(--fs-md);
    }
  }

  @media (max-width: 768px) {
    font-size: var(--fs-md);
    padding: 8px;
    min-height: 120px;
  }
`

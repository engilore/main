import styled from 'styled-components'


export const Section = styled.section`
  padding: 20px;
  flex: 1;
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: var(--fs-lg);
  color: var(--clr-primary);
  background-color: var(--bg-white);
  border: 2px solid var(--bg-secondary);
  border-radius: 5px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: var(--bg-primary);
  }
`

export const Label = styled.label`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-medium);
  margin-bottom: 10px;
`

export const NoPostTypes = styled.div`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
`

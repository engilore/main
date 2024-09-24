import styled from 'styled-components'


export const Section = styled.header`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const Title = styled.h1`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
  }
`

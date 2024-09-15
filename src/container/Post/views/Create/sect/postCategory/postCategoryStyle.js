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

export const Label = styled.label`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-medium);
  margin-bottom: 10px;
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const NoTopics = styled.div`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
`
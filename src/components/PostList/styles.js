import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ListWrapper = styled.div`
  background-color: var(--bg-white);
  border-radius: var(--radius-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  padding-right: 10px;

  @media (max-width: 768px) {
    max-height: 200px; /* Reduce the height for smaller screens */
  }

`

export const Content = styled.div`
  width: 100%;
`

export const ListHeader = styled.h3`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  margin-bottom: 10px;
  width: 100%;
`

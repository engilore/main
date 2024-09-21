import styled from 'styled-components'


export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
`

export const Card = styled.div`
  background-color: var(--bg-white);
  border: 1px solid var(--bg-light);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  padding: 16px;
  width: 300px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`

export const CardTitle = styled.h3`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-lg);
  color: var(--clr-primary);
  margin-bottom: 8px;
`

export const CardContent = styled.div`
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  color: var(--clr-secondary);

  p {
    margin: 4px 0;
  }
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Foot = styled.footer`
  background-color: var(--bg-white);
  color: var(--clr-primary);
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 100;
`

export const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Copyright = styled.div`
    color: var(--clr-secondary);
    font-family: var(--fnt-primary);
    font-size: var(--fs-sm);
    font-weight: var(--fw-medium);
    text-decoration: none;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const Name = styled.span`
    color: var(--clr-primary);
`

export const FootLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const FootLink = styled(Link)`
    color: var(--clr-secondary);
    font-family: var(--fnt-primary);
    font-size: var(--fs-sm);
    font-weight: var(--fw-medium);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
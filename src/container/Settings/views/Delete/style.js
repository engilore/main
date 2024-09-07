import styled from 'styled-components'


export const Section = styled.section`
  height: 70vh;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`

export const Contain = styled.div`
  max-width: 1200px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: var(--radius-md);
  border: 2px solid;
  border-color: var(--bg-light);

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: var(--radius-sm);
  }

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: var(--radius-xs);
  }
`

export const Header = styled.h1`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: var(--fs-lg);
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const WarningText = styled.p`
  font-family: var(--fnt-primary);
  font-size: var(--fs-md);
  color: var(--clr-warning);
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: var(--fs-sm);
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: var(--fs-xs);
    margin-bottom: 10px;
  }
`

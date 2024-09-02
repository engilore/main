import styled from 'styled-components'


export const Section = styled.section`
  background-color: var(--bg-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  padding: 5% 10%;
  box-sizing: border-box;
`

export const Contain = styled.div`
  background-color: var(--bg-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 600px;
  width: 100%;
  padding: 5%;
`

export const Header = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-3xl);
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
  }
`

export const Description = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-lg);
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--fs-md);
    margin-bottom: 20px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const SubscribeForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  border: 2px solid var(--clr-grey);
  border-radius: var(--radius-pill) 0 0 var(--radius-pill);
  flex-grow: 1;
  padding: 12px 15px;
  border-right: none;
  outline: none;

  @media (max-width: 768px) {
    border-radius: var(--radius-pill);
    border-right: 2px solid var(--clr-grey);
    width: 100%;
    margin-bottom: 10px;
  }
`

export const Button = styled.button`
  color: var(--clr-white);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  background-color: var(--bg-primary);
  border: 2px solid var(--bg-primary);
  border-radius: 0 var(--radius-pill) var(--radius-pill) 0;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: var(--radius-pill);
    margin-top: 10px;
  }
`

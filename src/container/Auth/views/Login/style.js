import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Section = styled.section`
    background-color: var(--bg-primary);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
`

export const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`

export const LoginBox = styled.div`
  background-color: var(--bg-white);
  border: 4px solid;
  border-color: var(--bg-light);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 500px;
  padding: 30px;
`

export const Header = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  text-align: center;
  margin-bottom: 40px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  border-radius: var(--radius-sm);
  border: 2px;
  border-bottom: solid;
  border-color: var(--bg-light);
  padding: 10px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
  }
`

export const LoginBTN = styled.button`
    color: var(--clr-white);
    font-family: var(--fnt-primary);
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    background-color: var(--bg-primary);
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    padding: 10px;

    &:hover {
      opacity: var(--opacity-strong);
    }
`

export const Forgot = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-sm);
  text-align: right;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const NoAccount = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-md);
  text-align: center;
  margin-top: 40px;
`

export const RegisterLink = styled(Link)`
  color: var(--clr-primary);
  font-weight: var(--fw-medium);
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`

export const RegisterBTN = styled.button`
    color: var(--clr-white);
    font-family: var(--fnt-primary);
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
    background-color: var(--bg-primary);
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    padding: 10px;

    &:hover {
      opacity: var(--opacity-strong);
    }
`

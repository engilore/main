import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 10px;
    min-height: auto; /* Allows height to grow with content on mobile */
  }
`

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    align-items: center; /* Centers content on mobile */
  }
`

export const Header = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-3xl);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Description = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xl);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`

export const Subscribe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`

export const EmailInput = styled.input`
  font-family: var(--fnt-primary);
  font-size: var(--fs-md);
  border: 2px solid; 
  border-color: var(--bg-primary);
  outline: none;
  border-radius: 5px 0 0 5px;
  padding: 0.75rem;
  flex: 1;

  @media (max-width: 768px) {
    border-radius: 5px;
    margin-bottom: 10px;
  }
`

export const SubscribeBTN = styled.button`
  color: var(--clr-white);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  background-color: var(--bg-primary);
  border: 2px solid var(--bg-primary);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  padding: 0.75rem 1rem;

  @media (max-width: 768px) {
    border-radius: 5px;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  opacity: ${props => props.loadCompleted ? 1 : 0};
  animation: ${fadeIn} 1.5s ease-out forwards;
  border-radius: 10px;
  object-fit: cover;
`

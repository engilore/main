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
  height: 60vh;
  padding: 0 20px;
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
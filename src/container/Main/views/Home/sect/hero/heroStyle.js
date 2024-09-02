import { Link } from 'react-router-dom'
import styled from 'styled-components'


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
    min-height: auto;
  }
`

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 40px;

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
    align-items: center;
  }
`

export const Header = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-3xl);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: var(--fs-2xl);
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

export const MembershipContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`

export const MemberBTN = styled(Link)`
  color: var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; // Adds space between text and icon
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  background-color: var(--bg-primary);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.75rem 1rem;
  text-decoration: none;
`;


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
  opacity: ${props => (props.loadCompleted ? 1 : 0)};
  transition: opacity 1.5s ease-out;
  border-radius: 10px;
  object-fit: cover;
`

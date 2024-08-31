import styled, { keyframes, css } from 'styled-components'


const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Section = styled.section`
  background-color: var(--bg-accent);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileCard = styled.div`
  font-family: var(--fnt-primary);
  background-color: var(--bg-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  flex: 0.35;
  max-width: 300px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const Photo = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.loadCompleted ? 1 : 0)};
  animation: ${fadeIn} 1.5s ease-out forwards;
  transition: opacity 0.5s ease-in-out;
  border-radius: 50%;
  z-index: 1;
`

export const ActivityStatus = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? '#5FDD9D' : 'grey')};
  z-index: 3;
  border: 2px solid white;
  animation: ${props => (props.isActive ? css`${blink} 2s linear infinite` : 'none')};
`

export const Badge = styled.img`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 50px;
  height: 50px;
  transition: 0.3s ease;
  z-index: 3;
`

export const Name = styled.h1`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-xxl);
  margin-bottom: 10px;
`

export const Pronunciation = styled.p`
  color: var(--clr-secondary);
  font-size: var(--fs-lg);
  margin-bottom: 20px;
`

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const SocialLink = styled.a`
  color: var(--clr-black);
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: var(--bg-secondary);
    transform: scale(1.1);
  }
`

export const DetailsCard = styled.div`
  background-color: var(--bg-white);
  flex: 0.65;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ListItem = styled.li`
  color: var(--clr-primary);
  font-size: var(--fs-md);
  margin-bottom: 8px;

  &:before {
    color: var(--clr-primary);
    content: "• ";
  }
`


export const Title = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  margin-bottom: 5px;
`

export const Description = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-lg);
  font-style: italic;
  margin-bottom: 10px;
`

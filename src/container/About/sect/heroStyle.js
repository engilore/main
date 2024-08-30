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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  background-color: var(--bg-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProfileCard = styled.div`
  font-family: var(--fnt-primary);
  flex: 0.35;
  max-width: 300px;
  background: var(--bg-white);
  border-radius: 15px;
  box-shadow: var(--shadow-md);
  padding: 30px;
  text-align: center;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.loadCompleted ? 1 : 0};
  animation: ${fadeIn} 1.5s ease-out forwards;
`

export const ActivityStatus = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? '#5FDD9D' : 'grey'};
  animation: ${props => props.isActive ? css`${blink} 2s linear infinite` : 'none'};
`;

export const Badge = styled.img`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 50px;
  height: 50px;
  transition: 0.3s ease;
`

export const Name = styled.h1`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-xxl);
  margin-bottom: 10px;
  font-weight: var(--fw-bold);
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
  margin-bottom: 8px;
  font-size: var(--fs-sm);
  color: var(--clr-primary);

  &:before {
    content: "• ";
    color: var(--clr-primary);
  }
`


export const Title = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xl);
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

import styled, { keyframes, css } from 'styled-components'

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
  align-items: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  min-height: 300px; /* Ensures there is some height to center the message */

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const Contain = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: ${({ hasImage }) => (hasImage ? 'flex-start' : 'center')};
  gap: 20px;
  padding: 0 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 0 20px;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  opacity: ${({ $loadCompleted }) => ($loadCompleted ? 1 : 0)};
  ${({ $loadCompleted }) =>
    $loadCompleted &&
    css`
      animation: ${fadeIn} 1s ease-in-out;
    `}
  transition: opacity 0.5s ease-in-out;
`

export const Content = styled.div`
  flex: 1;
  max-width: ${({ hasImage }) => (hasImage ? '50%' : '800px')}; 
  text-align: ${({ hasImage }) => (hasImage ? 'left' : 'center')};

  @media (max-width: 1024px) {
    max-width: ${({ hasImage }) => (hasImage ? '100%' : '80%')};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-top: ${({ hasImage }) => (hasImage ? '20px' : '0')};
  }
`

export const Type = styled.span`
  color: var(--bg-secondary);
  font-size: var(--fs-sm);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  display: block;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: var(--fs-xs);
    margin-bottom: 4px;
  }
`

export const Title = styled.h1`
  color: var(--clr-primary);
  font-size: var(--fs-3xl);
  font-family: var(--fnt-primary);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const Intro = styled.p`
  color: var(--clr-secondary);
  font-size: var(--fs-xl);
  font-family: var(--fnt-secondary);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }
`

export const NoPostsMessage = styled.p`
  color: var(--clr-grey);
  font-family: var(--fnt-primary);
  font-size: var(--fs-lg);
  font-weight: var(--fw-medium);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: var(--fs-md);
    padding: 0 10px;
  }
`

import styled from 'styled-components'


export const BackgroundAnimation = () => {
  return (
    <SvgBackground>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(92, 164, 169, 1)" /> {/* --bg-primary */}
            <stop offset="100%" stopColor="rgba(92, 164, 169, 0)" />
          </radialGradient>
          <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(79, 0, 11, 1)" /> {/* --bg-secondary */}
            <stop offset="100%" stopColor="rgba(79, 0, 11, 0)" />
          </radialGradient>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgba(237, 240, 218, 1)" /> {/* --bg-accent */}
            <stop offset="100%" stopColor="rgba(237, 240, 218, 0)" />
          </radialGradient>
        </defs>
        <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite" />
        </rect>
        <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
          <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
        </rect>
        <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
          <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
          <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite" />
        </rect>
      </svg>
    </SvgBackground>
  )
}

const SvgBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;

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
  opacity: ${props => (props.loadCompleted ? 1 : 0)};
  transition: opacity 1.5s ease-out;
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

export const Button = styled.a`
  color: var(--clr-white);
  background-color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  border-radius: var(--radius-md);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;

  &:hover {
    background-color: var(--bg-black);
  }
`

export const ButtonText = styled.span`
  margin-right: 8px;
`

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
`
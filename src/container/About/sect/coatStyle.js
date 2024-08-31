import styled from 'styled-components'

import coatlayout from '../../../assets/coat/badge-layout.svg'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  min-height: 110vh;
  background-color: var(--bg-accent);
  overflow: hidden;

  @media (max-width: 1440px) {
    min-height: 90vh;
  }

  @media (max-width: 1200px) {
    min-height: 70vh;
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    min-height: 40vh;
    padding: 15px 0;
  }
`

export const Header = styled.header`
  background-color: var(--bg-accent);
  width: 100%;
  text-align: center;
  z-index: 3;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`

export const Title = styled.h1`
  color: var(--text-primary);
  font-family: var(--fnt-secondary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-3xl);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const Subtitle = styled.h2`
  color: var(--text-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  margin: 10px auto 0;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 90%;  /* Makes it more responsive on small screens */
  }
`

export const CoatBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${coatlayout});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  z-index: 0;

  @media (max-width: 1200px) {
    background-size: contain;
    background-position: bottom center;
  }

  @media (max-width: 768px) {
    background-size: contain;
    background-position: bottom center;
  }

  @media (max-width: 480px) {
    background-size: contain;
    background-position: bottom center;
  }
`

export const Contain = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;

  @media (max-width: 768px) {
    padding: 10px;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`

export const CoatLabels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 20px;

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    top: 5px;
    left: 5px;
    gap: 3px;
  }
`

export const CoatLabel = styled.img`
  width: 150px;
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
  }
`

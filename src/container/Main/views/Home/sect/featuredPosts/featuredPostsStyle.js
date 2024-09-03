import styled from 'styled-components'


export const Section = styled.section`
  background-color: var(--bg-white);
  color: var(--clr-black);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  }
`

export const ArmsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

export const ArmsTitle = styled.h2`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }

  @media (max-width: 480px) {
    font-size: var(--fs-md);
  }
`

export const CoatOfArms = styled.img`
  width: 500px;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 50px;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`
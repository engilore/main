import styled from 'styled-components'


export const Section = styled.section`
  background-color: var(--bg-accent);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 40vh;
  padding: 5% 10%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Contain = styled.div`
  background-color: var(--bg-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 600px;
  width: 100%;
  padding: 5%;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

export const FormWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
`

export const Heading = styled.h2`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  color: var(--clr-primary);
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
  }
`

export const Description = styled.p`
  font-family: var(--fnt-primary);
  font-size: var(--fs-lg);
  color: var(--clr-secondary);
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: var(--fs-md);
    margin-bottom: 20px;
  }
`

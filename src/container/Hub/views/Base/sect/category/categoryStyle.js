import styled from 'styled-components'


export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border: 4px;
  border-bottom: solid;
  border-color: var(--bg-light);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`

export const Contain = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const Header = styled.h1`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  margin: 20px 0 40px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
    margin: 10px 0 20px;
    text-align: center;
  }
`

export const FormContainer = styled.div`
  flex: 1;
  margin-right: 40px;
  height: 100%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    height: auto;
  }
`

export const CategoryListContainer = styled.div`
  flex: 1;
  margin: 40px 0;
  height: 100%;
  padding: 20px;
  border-radius: var(--radius-lg);
  border: 4px solid var(--bg-light);
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 400px;

  @media (max-width: 768px) {
    padding: 10px;
    max-height: 300px;
  }
`

export const NoContent = styled.p`
  color: var(--clr-grey);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-align: center;
`
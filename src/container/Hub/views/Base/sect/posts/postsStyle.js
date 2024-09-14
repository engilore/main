import styled from 'styled-components'


export const Section = styled.section`
  background-color: var(--bg-white);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px auto;
  }
`

export const Contain = styled.div`
  background-color: var(--bg-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const PostsHeader = styled.h2`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  color: var(--clr-primary);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
    text-align: center;
    margin-bottom: 15px;
  }
`

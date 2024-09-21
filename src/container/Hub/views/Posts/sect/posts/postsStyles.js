import styled from 'styled-components'


export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 50vh;
  width: 100%;
  margin-bottom: 40px;
  box-sizing: border-box;
`

export const Contain = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`

export const Content = styled.div`
  width: 100%;
`


export const PostsHeader = styled.h1`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  margin-top: 40px;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
    text-align: center;
  }
`

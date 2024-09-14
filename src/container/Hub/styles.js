import styled from 'styled-components'


export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 10px;
  }
`

export const MainContent = styled.main`
  flex-grow: 1;
  margin-right: 20px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-top: 20px;
  }
`
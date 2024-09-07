import styled from 'styled-components'


export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`

export const SidebarWrapper = styled.div`
  width: 240px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`

export const MainContent = styled.main`
  flex: 3;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 20px;
  }
`
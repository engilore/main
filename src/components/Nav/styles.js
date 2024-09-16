import styled from 'styled-components'
import Button from '../../components/Button/index'


export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor || 'var(--bg-light)'};
  border-top: ${(props) => (props.borderTop ? `2px solid ${props.borderTop}` : 'none')};
  border-bottom: ${(props) => (props.borderBottom ? `2px solid ${props.borderBottom}` : 'none')};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;  
    padding: 10px 15px;
  }
`

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center; 
    width: 100%;
    margin-bottom: 10px;
  }
`

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
`

export const ResponsiveButton = styled(Button)`
  max-width: 100%;
  white-space: nowrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`

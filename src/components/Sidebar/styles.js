import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Side = styled.div`
  width: 230px;
  flex-shrink: 0;
  transform: ${({ $isSidebarVisible }) => ($isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)')};

  @media (min-width: 1024px) {
    transform: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: white;
    z-index: 1000;
    overflow-y: none;
  }
`

export const Contain = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Title = styled.h3`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-lg);
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1024px) {
    text-align: center;
  }
`

export const Item = styled.div`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  text-align: left;
  border-radius: var(--radius-pill);
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-light);
  }

  @media (max-width: 1024px) {
    width: 80%;
    padding: 15px;
    text-align: center;
  }
`

export const StyledLink = styled(Link)`
  color: var(--clr-primary);
  text-decoration: none;
  width: 100%;

  & ${Item} {
    display: flex;
    align-items: center;
  }
  
  &:hover {
    text-decoration: none;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.span`
  margin-left: 10px;
`

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid;
  border-color: var(--bg-light);
  border-radius: var(--radius-pill);
  height: 1px;
  margin: 20px 0;

  @media (max-width: 1024px) {
    margin: 10px 0;
  }
`

export const ItemContainer = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CloseButton = styled.button`
  color: var(--bg-white);
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-lg);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1101;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const ToggleButton = styled.button`
  color: var(--bg-white);
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-lg);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1100;

  @media (min-width: 1024px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const ProfileIcon = styled.div`
  background-color: var(--bg-secondary);
  color: var(--clr-white);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: var(--opacity-strong);
  }
`

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: var(--bg-white);
  border: 2px solid var(--bg-light);
  border-radius: var(--radius-md);
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  z-index: 1000;
`

export const ProfileDropdownLink = styled(Link)`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-base);
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background-color: var(--bg-light);
    color: var(--clr-primary);
  }

  &:last-child {
    border-top: 1px solid var(--bg-light);
  }
`

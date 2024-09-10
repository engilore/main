import styled from 'styled-components'
import { FaPen } from 'react-icons/fa'
import { RiUser4Line } from "react-icons/ri"


export const Section = styled.section``

export const Contain = styled.div`
  max-width: 1200px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
`

export const Header = styled.h1`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xxl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  margin-top: 50px;
  margin-bottom: 50px;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 30px;
  position: relative;
`

export const Ppf = styled.div`
  width: 120px;
  height: 120px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-circle);
  box-shadow: var(--shadow-md);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--clr-white);
  font-family: var(--fnt-primary);
  font-size: var(--fs-lg);
  text-transform: uppercase;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

export const ProfileIcon = styled(RiUser4Line)`
  font-size: 50px;
  color: var(--clr-white);
`

export const PenIconTopRight = styled(FaPen)`
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: var(--clr-white);
  color: var(--bg-secondary);
  padding: 10px;
  border-radius: var(--radius-circle);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  font-size: 40px;
`

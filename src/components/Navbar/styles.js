import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'


const wobbleAnimation = keyframes`
    0% { transform: rotate(0deg); }
    15% { transform: rotate(15deg); }
    30% { transform: rotate(-10deg); }
    45% { transform: rotate(5deg); }
    60% { transform: rotate(-5deg); }
    75% { transform: rotate(2deg); }
    100% { transform: rotate(0deg); }
`

export const Nav = styled.nav`
    background-color: var(--bg-white);
    color: var(--clr-primary);
    height: 60px;
    box-shadow: var(--shadow-sm);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Contain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    width: 100%;
    max-width: 1200px;
`

export const Brand = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
`

export const Logo = styled.img`
    width: 40px;
    height: 40px;

    ${Brand}:hover & {
    animation: ${wobbleAnimation} 1s ease-in-out;
  }
`

export const Name = styled.h1`
    color: var(--clr-primary);
    font-family: var(--fnt-primary);
    font-size: var(--fs-xl);
    margin-left: 10px;
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavLink = styled(Link)`
    color: var(--clr-secondary);
    font-family: var(--fnt-primary);
    font-size: var(--fs-md);
    font-weight: var(--fw-medium);
    text-decoration: none;
    border-radius: var(--radius-md);
    margin: 0 2px;
    padding: 8px 12px;

    &:hover {
        background-color: var(--bg-light);
        color: var(--clr-primary);
    }
`
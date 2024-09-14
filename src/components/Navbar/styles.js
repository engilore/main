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
    color: var(--clr-primary);
    background-color: var(--bg-white);
    height: 60px;
    border: 4px;
    border-bottom: solid;
    border-color: var(--bg-light);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`


export const Contain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
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

    @media (max-width: 768px) {
        font-size: var(--fs-lg);
    }
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavLink = styled(Link)`
    color: var(--clr-secondary);
    font-family: var(--fnt-primary);
    font-size: var(--fs-base);
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

export const LoginButton = styled(Link)`
    background-color: var(--bg-primary);
    color: var(--clr-white);
    font-family: var(--fnt-primary);
    font-size: var(--fs-base);
    font-weight: var(--fw-bold);
    text-decoration: none;
    border-radius: var(--radius-md);
    padding: 8px 16px;
    margin-left: 10px;

    @media (max-width: 768px) {
        display: none;
    }

    &:hover {
        opacity: var(--opacity-strong);
    }
`

export const LoginHamButton = styled(Link)`
    background-color: var(--bg-primary);
    color: var(--clr-white);
    font-family: var(--fnt-primary);
    font-size: var(--fs-base);
    font-weight: var(--fw-bold);
    text-decoration: none;
    border-radius: var(--radius-md);
    padding: 8px 16px;
    margin-top: 10px;
    width: calc(100% - 40px);
    box-sizing: border-box;

    &:hover {
        opacity: var(--opacity-strong);
    }
`


export const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    font-size: 24px;
    margin-left: 20px;

    @media (max-width: 768px) {
        display: block;
    }
`

export const MobileMenu = styled.div`
    background-color: var(--bg-white);
    border: 2px;
    border-bottom: solid;
    border-color: var(--bg-light);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 20px;
`

export const MobileMenuLink = styled(Link)`
    color: var(--clr-secondary);
    font-family: var(--fnt-primary);
    font-size: var(--fs-base);
    font-weight: var(--fw-medium);
    text-decoration: none;
    padding: 10px 20px;
    width: 100%;
    text-align: center;

    &:hover {
        background-color: var(--bg-light);
        color: var(--clr-primary);
    }
`
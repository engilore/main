import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Section = styled.section`
  background-color: var(--bg-accent);
  color: var(--clr-black);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Header = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  text-align: start;
  width: 70%;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: var(--fs-xl);
  }
`

export const Post = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 30px;
  margin-bottom: 50px;

  border-radius: var(--radius-md);
  border: 4px solid transparent;

  &:hover {
    border-color: var(--clr-primary);
    box-shadow: var(--shadow-sm);

    ${Title} {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const Intro = styled.p`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
  opacity: var(--opacity-strong);
  border-radius: var(--radius-md);
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: 10px;
    font-size: var(--fs-md);
  }
`

export const PostMeta = styled.div`
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  color: var(--clr-primary);
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PostType = styled.span`
  color: var(--clr-secondary);
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  
  & > span:not(:last-child)::after {
    content: ', ';
    margin-right: 5px;
  }
`

export const PostDate = styled.span`
  color: var(--clr-primary);
  font-weight: var(--fw-bold);
  margin-left: auto;
  white-space: nowrap;
  display: flex;
  align-items: center;
`

export const TagPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
  padding: 10px 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

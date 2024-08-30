import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Section = styled.section`
  background-color: var(--bg-white);
  color: var(--clr-black);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
  }
`

export const ArmsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

export const ArmsTitle = styled.h2`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  color: var(--clr-primary);
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: var(--fs-lg);
  }

  @media (max-width: 480px) {
    font-size: var(--fs-md);
  }
`

export const CoatOfArms = styled.img`
  width: 500px;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 50px;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
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
  border: 4px;
  border-bottom: solid;
  border-color: var(--bg-light);

  &:hover {
    ${Title} {
        text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
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

export const Tag = styled.span`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  border-radius: var(--radius-pill);
  border: 2px solid;
  border-color: var(--clr-secondary);
  padding: 5px 10px;
`

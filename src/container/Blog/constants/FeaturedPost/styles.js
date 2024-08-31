import styled from 'styled-components'
import { Link } from 'react-router-dom'


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

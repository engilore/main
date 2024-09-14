import styled from 'styled-components'


export const PostContainer = styled.div`
  background-color: var(--bg-white);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid var(--bg-light);
  border-radius: var(--radius-lg);
`

export const PostTitle = styled.h1`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-3xl);
`

export const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const PostMeta = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  margin-bottom: 10px;
`

export const PostCategory = styled.p`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`

export const PostTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const PostContent = styled.div`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-base);
  margin-top: 20px;
  line-height: 1.6;
`

export const PostType = styled.p`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  margin-bottom: 5px;
`

export const PostDate = styled.p`
  color: var(--clr-secondary);
  font-size: var(--fs-sm);
  margin-bottom: 10px;
`

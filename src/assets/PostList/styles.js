import styled from 'styled-components'


export const PostContainer = styled.div`
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

  @media (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`

export const NoPostsMessage = styled.p`
  color: var(--clr-grey);
  font-family: var(--fnt-primary);
  font-size: var(--fs-lg);
  font-weight: var(--fw-medium);
  text-align: center;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: var(--fs-md);
    padding: 0 10px;
  }
`
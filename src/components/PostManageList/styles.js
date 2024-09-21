import styled from 'styled-components'


export const Container = styled.div`
  background-color: var(--bg-white);
  border: 4px solid var(--bg-light);
  border-radius: var(--radius-md);
  margin: 20px;
  padding: 0;
  max-height: 400px;
  max-width: 1000px;
  width: 95%;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 10px;
  }
`


export const ListHeader = styled.div`
  background-color: var(--bg-white);
  border-bottom: 2px solid var(--bg-light);
  padding: 20px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-md); 
`

export const HeaderTitle = styled.h3`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-xl);
  font-weight: var(--fw-bold);
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: var(--fs-lg);
    margin-bottom: 5px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const HeaderInfo = styled.div`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    flex: 1;
    text-align: left;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ListWrapper = styled.div`
  margin-top: 0px; 
  padding-top: 0px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid var(--bg-light);
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: var(--bg-light);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`


export const Title = styled.span`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: var(--fs-md);
  }
`

export const Status = styled.span`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  margin: 5px;
  flex: 1;
  text-align: left;
  

  @media (max-width: 768px) {
    display: none;
  }
`

export const DateInfo = styled.span`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  margin: 5px;
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: auto;
  }
`

export const NoPostsMessage = styled.p`
  color: var(--clr-grey);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-align: center;
  margin-top: 20px;
`

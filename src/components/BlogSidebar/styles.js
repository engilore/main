import styled from 'styled-components'


export const Sidebar = styled.div`
  background-color: var(--bg-white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Item = styled.div`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-md);
  text-align: left;
  border-radius: var(--radius-pill);
  width: 100%;
  padding: 10px 20px;
  margin-top: 3px;
  margin-bottom: 3px;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-light);
  }

  @media (max-width: 768px) {
    padding: 15px;
    text-align: center;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.span`
  margin-left: 10px;
`

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid;
  border-color: var(--bg-light);
  border-radius: var(--radius-pill);
  height: 1px;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`

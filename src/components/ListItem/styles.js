import styled from 'styled-components'


export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 70vh;
  margin: 40px 0;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  border-radius: var(--radius-lg);
  border: 4px solid var(--bg-light);
  background-color: var(--clr-white);
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const ItemField = styled.div`
  font-family: var(--fnt-secondary);
  font-size: var(--fs-sm);
  color: var(--clr-secondary);
  margin-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  strong {
    font-weight: var(--fw-bold);
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: var(--fs-xs);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 15px;
  margin-bottom: 10px;
  border-bottom: 2px solid var(--bg-light);
  background-color: var(--bg-white);
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

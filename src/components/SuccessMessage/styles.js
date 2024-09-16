import styled from 'styled-components'


export const SuccessContainer = styled.div`
  color: var(--clr-success);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-sm);
  background-color: var(--bg-success);
  border-radius: var(--radius-md);
  opacity: var(--opacity-medium);
  border: 2px solid;
  border-color: var(--clr-success);
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 90%;
  max-width: 1000px;
`
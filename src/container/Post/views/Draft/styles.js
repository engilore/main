import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { MdOutlineDataSaverOff } from 'react-icons/md'


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

export const Header = styled.h2`
  color: var(--clr-primary);
  font-family: var(--fnt-primary);
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  margin-bottom: 20px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

export const AutoSave = styled.div`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  display: flex;
  align-items: center;
  gap: 8px;


@media (max-width: 768px) {
  font-size: 14px;
}
`

export const AutoSaveIconSaving = styled(MdOutlineDataSaverOff)`
animation: spin 1s infinite linear;
color: var(--clr-secondary);

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
`

export const AutoSaveIconSaved = styled(FaCheck)`
  color: var(--clr-secondary);
`
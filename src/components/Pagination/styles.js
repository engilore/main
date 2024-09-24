import styled from 'styled-components'


export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  padding: 10px;
`

export const ArrowButton = styled.button`
    color: var(--clr-primary);
    font-size: var(--fs-lg);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;
    padding: 5px;

    &:disabled {
        color: var(--clr-grey);
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        color: var(--clr-secondary);
    }

    svg {
        vertical-align: middle;
    }
`

export const PageInfo = styled.span`
    color: var(--clr-primary);
    font-family: var(--fnt-secondary);
    font-weight: var(--fw-bold);
    font-size: var(--fs-md);
`

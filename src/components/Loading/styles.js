import styled, { keyframes } from "styled-components"


const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderWrapper = styled.div`
  background-color: var(--bg-secondary);
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 7s infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 3px);
    left: calc(50% - 12.5px);
    box-shadow: inherit;
    width: 25px;
    aspect-ratio: 1;
    border-radius: 50%;
    transform-origin: 50% -28px;
    animation: ${rotate} 1.5s infinite;
  }

  &::after {
    animation-delay: -0.75s;
  }
`

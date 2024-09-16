import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
  0% {
    transform: scaleX(1) translate(0) rotate(0deg);
  }
  16.67% {
    transform: scaleX(1) translate(-50%) rotate(0deg);
  }
  33.33% {
    transform: scaleX(1) translate(-50%) rotate(90deg);
  }
  50%,
  100% {
    transform: scaleX(1) translate(0) rotate(90deg);
  }
`

export const LoaderWrapper = styled.div`
  display: inline-flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  display: inline-block;
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  animation: ${rotate} 1.5s infinite;
  
  &:after {
    content: '';
    width: 25px;
    aspect-ratio: 1;
    box-shadow: 0 0 0 3px inset #fff;
    animation: ${rotate} 1.5s infinite;
    animation-delay: 0.75s;
  }
`


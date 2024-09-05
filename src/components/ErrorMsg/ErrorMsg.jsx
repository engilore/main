import { ErrorContainer } from './styles'


const ErrorMsg = ({ message }) => {
    return (
      message ? <ErrorContainer>{message}</ErrorContainer> : null
    )
  }
  
  export default ErrorMsg
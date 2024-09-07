import { ErrorContainer } from './styles'


const ErrorMessage = ({ message }) => {
    return (
      message ? <ErrorContainer>{message}</ErrorContainer> : null
    )
  }
  
  export default ErrorMessage
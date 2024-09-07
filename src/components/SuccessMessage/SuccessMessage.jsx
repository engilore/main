import { ErrorContainer } from './styles'


const SucessComponents = ({ message }) => {
    return (
      message ? <ErrorContainer>{message}</ErrorContainer> : null
    )
  }
  
  export default SucessComponents
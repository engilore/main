import { useEffect, useState } from 'react'
import { SuccessContainer } from './styles'


const SuccessComponent = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [message])

  if (!isVisible || !message) return null

  return <SuccessContainer>{message}</SuccessContainer>
}

export default SuccessComponent

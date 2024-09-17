import { useEffect, useState } from 'react'
import { ErrorContainer } from './styles'

const ErrorMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!message) return
    setIsVisible(true)

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [message])

  if (!message || !isVisible) return null

  const parseMessage = (message) => {
    const jsonStartIndex = message.indexOf('{')

    if (jsonStartIndex === -1) return { stringMessage: message, parsedErrors: null }

    try {
      const jsonPart = message.substring(jsonStartIndex)
      const parsedErrors = JSON.parse(jsonPart)
      const stringMessage = message.substring(0, jsonStartIndex).trim()

      return { stringMessage, parsedErrors }
    } catch (e) {
      console.error('Failed to parse JSON part of error message', e)
      return { stringMessage: message, parsedErrors: null }
    }
  }

  const { stringMessage, parsedErrors } = parseMessage(message)

  return (
    <ErrorContainer>
      {stringMessage && <p>{stringMessage}</p>}
      {parsedErrors?.message && <p>{parsedErrors.message}</p>}
      {parsedErrors?.errors && (
        <ul>
          {Object.entries(parsedErrors.errors).map(([field, errors]) => (
            <li key={field}>
              <strong>{field}:</strong> {errors.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </ErrorContainer>
  )
}

export default ErrorMessage

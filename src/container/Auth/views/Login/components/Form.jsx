import { useState } from 'react'

import ErrorMsg from '../../../../../components/ErrorMsg/index'
import { Form, Input, LoginBTN, Forgot, NoAccount, RegisterLink } from '../style'


const LoginForm = ({ onLogin, isLoading }) => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await onLogin(identifier, password)
    } catch (error) {
      setError('Login failed. Please check your credentials.')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ErrorMsg message={error} />
      <Input
        type="text"
        placeholder="Username or Email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)} 
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <LoginBTN type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </LoginBTN>
      <Forgot>Forgot your password?</Forgot>
      <NoAccount>
        Don't have an account? <RegisterLink to="/auth/register">Register</RegisterLink>
      </NoAccount>
    </Form>
  )
}

export default LoginForm
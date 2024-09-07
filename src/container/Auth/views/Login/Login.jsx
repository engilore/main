import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import ErrorMessage from '../../../../components/ErrorMessage/index'
import Form from '../../../../components/Form/index'

import {
  Section,
  Contain,
  LoginBox,
  Header,
  ForgotLink,
  NoAccount,
  RegisterLink
} from './style'


const Login = () => {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const loginFields = [
    { name: 'identifier', type: 'text', placeholder: 'Username or Email' },
    { name: 'password', type: 'password', placeholder: 'Password' }
  ]

  const handleLogin = async (formData) => {
    setError('')
    try {
      await login(formData.identifier, formData.password)
      navigate('/hub')
    } catch (error) {
      console.error('Login error:', error)
      setError('Login failed. Please try again.')
    }
  }

  return (
    <Section>
      <Contain>
        <LoginBox>
          
          <Header>Login</Header>

          <ErrorMessage message={error} />

          <Form
            fields={loginFields}
            onSubmit={handleLogin}
            isLoading={isLoading}
            buttonText="Login"
          />

          <ForgotLink to="/auth/forgot-password">
            Forgot Password?
          </ForgotLink>

          <NoAccount>
            Don’t have an account? 
            <RegisterLink to="/auth/register">Register</RegisterLink>
          </NoAccount>

        </LoginBox>
      </Contain>
    </Section>
  )
}

export default Login

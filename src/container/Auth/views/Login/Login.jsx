import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

import ErrorMsg from '../../../../components/ErrorMsg/index'
import LoginForm from './components/Form'

import {
  Section,
  Contain,
  LoginBox,
  Header,
} from './style'


const Login = () => {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleLogin = async (identifier, password) => {
    setError('')
    try {
      await login(identifier, password)
      navigate('/')
    } catch (error) {
      setError('Login failed. Please try again.')
    }
  }

  return (
    <Section>
      <Contain>
        <LoginBox>
          <Header>Login</Header>

          <ErrorMsg message={error} />

          <LoginForm onLogin={handleLogin} isLoading={isLoading} />
        </LoginBox>
      </Contain>
    </Section>
  )
}

export default Login

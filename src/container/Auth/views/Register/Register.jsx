import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

import ErrorMsg from '../../../../components/ErrorMsg/index'
import RegistrationForm from './components/Form'

import {
  Section,
  Contain,
  RegisterBox,
  Header,
  NoAccount,
  LoginLink,
} from './style'


const Register = () => {
  const { register, isLoading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleRegistrationSubmit = async (formData) => {
    try {
      await register(formData)
      navigate('/')
    } catch (error) {
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <Section>
      <Contain>
        <RegisterBox>
          <Header>Register</Header>

          <ErrorMsg message={error} />

          <RegistrationForm onSubmit={handleRegistrationSubmit} isLoading={isLoading} />

          <NoAccount>
            Already have an account?
            <LoginLink to="/auth/login">Login</LoginLink>
          </NoAccount>
        </RegisterBox>
      </Contain>
    </Section>
  )
}

export default Register

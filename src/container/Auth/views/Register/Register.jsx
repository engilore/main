import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import ErrorMessage from '../../../../components/ErrorMessage/index'
import Form from '../../../../components/Form/index'

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

  const registrationFields = [
    { name: 'first_name', type: 'text', placeholder: 'First Name' },
    { name: 'last_name', type: 'text', placeholder: 'Last Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ]

  const handleRegistrationSubmit = async (formData) => {
    setError('')
    try {
      await register(formData)
      navigate('/hub')
    } catch (error) {
      console.error(error)
      setError('Registration failed. Please try again.')
    }
  }


  return (
    <Section>
      <Contain>
        <RegisterBox>
          <Header>Register</Header>

          {error && <ErrorMessage message={error} />}

          <Form
            fields={registrationFields}
            onSubmit={handleRegistrationSubmit}
            isLoading={isLoading}
            buttonText="Register"
          />

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

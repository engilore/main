import useRegister from '../../../../hooks/useAuth/useRegister'
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
  const { registrationFields, handleRegistrationSubmit, isLoading, error } = useRegister()

  return (
    <Section>
      {error && <ErrorMessage message={error} />}

      <Contain>
        <RegisterBox>
          <Header>Register</Header>
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

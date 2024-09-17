import useLogin from '../../../../hooks/useAuth/useLogin'
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
  const { loginFields, handleLogin, isLoading, error } = useLogin()

  return (
    <Section>
      <ErrorMessage message={error} />

      <Contain>
        <LoginBox>
          <Header>Login</Header>

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

import {
  Section,
  Contain,
  LoginBox,
  Header,
  Form,
  Input,
  LoginBTN,
  Forgot,
  NoAccount,
  RegisterLink
} from './heroStyle'


const hero = () => {
  return (
    <Section>
      <Contain>
        <LoginBox>
          <Header>Login</Header>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <LoginBTN>Login</LoginBTN>
          </Form>
          <Forgot>Forgot your password?</Forgot>
          <NoAccount>
            Don't have an account? 
            <RegisterLink to="/register">Register</RegisterLink>
          </NoAccount>
        </LoginBox>
      </Contain>
    </Section>
  )
}

export default hero
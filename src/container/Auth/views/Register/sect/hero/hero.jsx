import {
  Section,
  Contain,
  RegisterBox,
  Header,
  Form,
  Input,
  RegisterBTN,
  NoAccount,
  LoginLink,
} from './heroStyle'


const hero = () => {
  return (
    <Section>
      <Contain>
        <RegisterBox>
          <Header>Register</Header>
          <Form>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
            <Input type="username" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <RegisterBTN>Join</RegisterBTN>
          </Form>
          <NoAccount>
            Already have an account? 
            <LoginLink to="/login">Login</LoginLink>
          </NoAccount>
        </RegisterBox>
      </Contain>
    </Section>
  )
}

export default hero

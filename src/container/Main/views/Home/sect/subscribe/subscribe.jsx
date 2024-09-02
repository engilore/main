import {
    Section,
    Contain,
    Content,
    Header,
    Description,
    SubscribeForm,
    Input,
    Button
} from './subscribeStyle'


const Subscribe = () => {
  return (
    <Section>
    <Contain>
        <Header>The Engilore Publication</Header>
        <Description>
            Subscribe for early alerts on Engilore's Guardians' latest publications.
        </Description>
        <Content>
        <SubscribeForm>
            <Input placeholder="Enter your email"></Input>
            <Button>Subscribe</Button>
        </SubscribeForm>
        </Content>
    </Contain>
    </Section>
  )
}

export default Subscribe;

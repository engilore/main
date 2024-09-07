import Form from '../../../../../../components/Form/index'

import {
    Section,
    Contain,
    FormWrapper,
    Heading,
    Description,
} from './subscribeStyle'


const Subscribe = () => {
  const handleSubscribe = async (formData) => {
    console.log('Subscribed with email:', formData.email)
  }

  const subscribeField = [
    { name: 'email', type: 'email', placeholder: 'Email' },
  ]

  return (
    <Section>
      <Contain>
        <Heading>The Engilore Publication</Heading>
        <Description>
          Subscribe for early alerts on Engilore's Guardians' latest publications.
        </Description>

        <FormWrapper>
          <Form 
            fields={subscribeField}
            onSubmit={handleSubscribe} 
            isLoading={false} 
            buttonText="Subscribe" 
          />
        </FormWrapper>
      </Contain>
    </Section>
  )
}

export default Subscribe

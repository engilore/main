import useDeleteAccount from '../../../../hooks/useAccount/useDeleteAccount'
import Form from '../../../../components/Form/index'
import ErrorMessage from '../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../components/SuccessMessage/index'

import { 
  Section, 
  Contain, 
  Content, 
  Header 
} from './style'


const Delete = () => {
  const { authLoading, error, success, handleSubmit } = useDeleteAccount()

  const deleteFields = [
    { name: 'password', type: 'password', title: 'Password', placeholder: 'Confirm your password' }
  ]

  return (
    <>
      <Header>Delete Account</Header>

      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}

      <Section>
        <Contain>
          <Content>
            {!authLoading && (
              <Form
                fields={deleteFields}
                onSubmit={handleSubmit}
                isLoading={false}
                buttonText="Delete Account"
              />
            )}
          </Content>
        </Contain>
      </Section>
    </>
  )
}

export default Delete

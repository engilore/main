import useUpdateAccount from '../../../../hooks/useAccount/useUpdateAccount'
import Form from '../../../../components/Form/index'
import ErrorMessage from '../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../components/SuccessMessage/index'

import { 
  Section, 
  Contain, 
  Content, 
  Header 
} from './style'

const Profile = () => {
  const { profileFields, authLoading, error, success, handleSubmit } = useUpdateAccount()

  return (
    <>
      <Header>Profile</Header>

      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}

      <Section>
        <Contain>
          <Content>
            {!authLoading && (
              <Form
                fields={profileFields}
                onSubmit={handleSubmit}
                isLoading={false}
                buttonText="Save Changes"
              />
            )}
          </Content>
        </Contain>
      </Section>
    </>
  )
}

export default Profile

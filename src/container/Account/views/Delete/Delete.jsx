import { useState } from 'react'
import { useAuth } from '../../../../contexts/authContexts'
import { deleteUser } from '../../services/deleteUserService'
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
  const { isLoading: authLoading, logout } = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const deleteFields = [
    { name: 'password', type: 'password', title: 'Password', placeholder: 'Confirm your password' }
  ]

  const handleSubmit = async (formData) => {
    setError(null)
    setSuccess(null)
  
    if (!formData.password) {
      setError('Password is required to delete your account.')
      return
    }
  
    try {
      const token = localStorage.getItem('authToken')
      const response = await deleteUser(token, formData.password)
  
      if (response.error) {
        setError(response.error)
        return
      }
  
      setSuccess('Your account has been deleted successfully.')
  
      localStorage.removeItem('authToken')
      await logout()
  
    } catch (error) {
      console.error('Account deletion error:', error)
      setError('An error occurred while deleting your account.')
    }
  }


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

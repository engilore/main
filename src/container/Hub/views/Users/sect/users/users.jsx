import { useState } from 'react'
import { useAuth } from '../../../../../../contexts/authContexts'
import { useUsers } from '../../../../../../hooks/useUsers'
import ErrorMessage from '../../../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../../../components/SuccessMessage/index'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

import {
  Section,
  Contain,
  Header,
  FormContainer,
  UserListContainer,
} from './userStyles'


const User = () => {
  const { token } = useAuth()
  const [formState, setFormState] = useState({ username: '', email: '', id: null })
  const [isEditing, setIsEditing] = useState(false)
  const { users, error, success, isLoading, handleCreateOrUpdate, handleDeleteUser, handleAssignRole, handleRevokeRole } = useUsers(token)

  const handleEdit = (user) => {
    setIsEditing(true)
    setFormState({
      username: user.username,
      email: user.email,
      id: user.id
    })
  }

  const handleSubmit = (data) => {
    handleCreateOrUpdate({ ...formState, ...data }, isEditing)
    setFormState({ username: '', email: '', id: null })
    setIsEditing(false)
  }

  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}
      
      <Contain>
        <FormContainer>
          <Header>Manage Users</Header>

          <UserForm formState={formState} isEditing={isEditing} isLoading={isLoading} handleSubmit={handleSubmit} />
        </FormContainer>

        <UserListContainer>
          <UserList users={users} handleEdit={handleEdit} handleDelete={handleDeleteUser} handleAssignRole={handleAssignRole} handleRevokeRole={handleRevokeRole} />
        </UserListContainer>

      </Contain>
    </Section>
  )
}

export default User

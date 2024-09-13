import Form from '../../../../../../../components/Form/index'


const UserForm = ({ formState, isEditing, isLoading, handleSubmit }) => {
  return (
    <Form
      fields={[
        { name: 'username', type: 'text', value: formState.username, title: 'Username' },
        { name: 'email', type: 'email', value: formState.email, title: 'Email' },
      ]}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={isEditing ? "Update User" : "Add User"}
    />
  )
}

export default UserForm

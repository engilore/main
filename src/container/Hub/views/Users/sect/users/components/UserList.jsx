import { useState } from 'react'
import ListItem from '../../../../../../../components/ListItem/index'

import { FaPen, FaTrash, FaUserShield } from 'react-icons/fa'


const UserList = ({ users, handleEdit, handleDelete, handleAssignRole, handleRevokeRole }) => {
  const [isProcessing, setIsProcessing] = useState(null) 

  const onAssignRole = async (id, role) => {
    if (isProcessing === id) return
    setIsProcessing(id)
    await handleAssignRole(id, role)
    setIsProcessing(null)
  }

  const onRevokeRole = async (id, role) => {
    if (isProcessing === id) return
    setIsProcessing(id)
    await handleRevokeRole(id, role)
    setIsProcessing(null)
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <p>No users available.</p>
  }

  return (
    <>
      {users.map((user) => {
        const roleList = [
          user.is_guardian ? 'Guardian' : null,
          user.is_auxiliary ? 'Auxiliary' : null
        ].filter(Boolean).join(', ') || 'User'

        const fields = [
          { label: 'Username', value: user.username },
          { label: 'Email', value: user.email },
          { label: 'Role', value: roleList },
          { label: 'Joined At', value: new Date(user.date_joined).toLocaleDateString() },
        ]

        const actions = [
          {
            label: 'Edit',
            onClick: () => handleEdit(user),
            icon: <FaPen />,
            bgColor: '#007bff',
          },
          {
            label: 'Delete',
            onClick: () => handleDelete(user.id),
            icon: <FaTrash />,
            bgColor: '#BD1F36',
          },
          {
            label: user.is_guardian ? 'Revoke Guardian' : 'Assign Guardian',
            onClick: () => user.is_guardian ? onRevokeRole(user.id, 'guardian') : onAssignRole(user.id, 'guardian'),
            icon: <FaUserShield />,
            bgColor: user.is_guardian ? '#998650' : '#DDB967',
            disabled: isProcessing === user.id
          },
          {
            label: user.is_auxiliary ? 'Revoke Auxiliary' : 'Assign Auxiliary',
            onClick: () => user.is_auxiliary ? onRevokeRole(user.id, 'auxiliary') : onAssignRole(user.id, 'auxiliary'),
            icon: <FaUserShield />,
            bgColor: user.is_auxiliary ? '#998650' : 'var(--bg-primary)',
            disabled: isProcessing === user.id
          },
        ]

        return <ListItem key={user.id} fields={fields} actions={actions} />
      })}
    </>
  )
}

export default UserList

import ListItem from '../../../../../../../components/ListItem/index'

import { FaPen, FaTrash } from 'react-icons/fa'


const TopicList = ({ topics, handleEdit, handleDelete }) => {
  if (topics.length === 0) {
    return <p>No topics available.</p>
  }

  return (
    <>
      {topics.map((topic) => {
        const fields = [
          { value: topic.category_details?.name || 'No category' },
          { label: 'Name', value: topic.name },
          { label: 'Description', value: topic.description },
          { label: 'Meta Title', value: topic.meta_title || 'No meta title' },
          { label: 'Meta Description', value: topic.meta_description || 'No meta description' },
          { label: 'Created At', value: new Date(topic.created_at).toLocaleDateString() },
          { label: 'Created By', value: topic.created_by },
        ]

        const actions = [
          {
            label: 'Edit',
            onClick: () => handleEdit(topic),
            icon: <FaPen />,
            bgColor: '#007bff',
          },
          {
            label: 'Delete',
            onClick: () => handleDelete(topic.id),
            icon: <FaTrash />,
            bgColor: '#BD1F36',
            allowedRoles: ['admin']
          },
        ]

        return <ListItem key={topic.id} fields={fields} actions={actions} />
      })}
    </>
  )
}

export default TopicList

import ListItem from '../../../../../../../components/ListItem/index'

import { FaPen, FaTrash } from 'react-icons/fa'


const CategoryList = ({ categories, handleEdit, handleDelete }) => {
  if (categories.length === 0) {
    return <p>No categories available.</p>
  }

  return (
    <>
      {categories.map((category) => {
        const fields = [
          { label: 'Category Name', value: category.name },
          { label: 'Description', value: category.description },
          { label: 'Meta Title', value: category.meta_title || 'No meta title' },
          { label: 'Meta Description', value: category.meta_description || 'No meta description' },
          { label: 'Slug', value: category.slug || 'No slug' },
          { label: 'Created At', value: new Date(category.created_at).toLocaleDateString() },
          { label: 'Created By', value: category.created_by },
        ]

        const actions = [
          {
            label: 'Edit',
            onClick: () => handleEdit(category),
            icon: <FaPen />,
            bgColor: '#007bff',
          },
          {
            label: 'Delete',
            onClick: () => handleDelete(category.id),
            icon: <FaTrash />,
            bgColor: '#BD1F36',
            allowedRoles: ['admin']
          },
        ]

        return <ListItem key={category.id} fields={fields} actions={actions} />
      })}
    </>
  )
}

export default CategoryList

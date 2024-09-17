import Form from '../../../../../../../components/Form/index'


const CategoryForm = ({ formState, isEditing, isLoading, handleSubmit }) => {
  return (
    <Form
      fields={[
        { name: 'name', type: 'text', value: formState.name, title: 'Category Name' },
        { name: 'description', type: 'text', value: formState.description, title: 'Category Description' },
      ]}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={isEditing ? "Update Category" : "Add Category"}
    />
  )
}

export default CategoryForm
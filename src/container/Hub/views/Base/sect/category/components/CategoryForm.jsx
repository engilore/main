import Form from '../../../../../../../components/Form/index'


const CategoryForm = ({ formState, isEditing, isLoading, handleSubmit }) => {
  return (
    <Form
      fields={[
        { name: 'name', type: 'text', value: formState.name, title: 'Category Name' },
        { name: 'description', type: 'text', value: formState.description, title: 'Category Description' },
        { name: 'meta_title', type: 'text', value: formState.meta_title, title: 'Category Meta Title' },
        { name: 'meta_description', type: 'text', value: formState.meta_description, title: 'Category Meta Description' },
      ]}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={isEditing ? "Update Category" : "Add Category"}
    />
  )
}

export default CategoryForm
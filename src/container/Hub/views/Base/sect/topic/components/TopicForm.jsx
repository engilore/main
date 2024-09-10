import Form from '../../../../../../../components/Form/index'


const TopicForm = ({ formState, isEditing, isLoading, handleSubmit, categories }) => {
  return (
    <Form
      fields={[
        { name: 'name', type: 'text', value: formState.name, title: 'Topic Name' },
        { name: 'description', type: 'text', value: formState.description, title: 'Description' },
        {
          name: 'category',
          type: 'select',
          value: formState.category,
          title: 'Category',
          options: categories.map(category => ({ label: category.name, value: category.id })),
        },
        { name: 'meta_title', type: 'text', value: formState.meta_title, title: 'Meta Title' },
        { name: 'meta_description', type: 'text', value: formState.meta_description, title: 'Meta Description' },
      ]}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={isEditing ? "Update Topic" : "Add Topic"}
    />
  )
}

export default TopicForm

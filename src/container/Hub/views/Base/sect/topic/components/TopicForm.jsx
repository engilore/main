import Form from '../../../../../../../components/Form/index'


const TopicForm = ({ formState, setFormState, isEditing, isLoading, handleSubmit, categories }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <Form
      fields={[
        { 
          name: 'name', 
          type: 'text', 
          value: formState.name, 
          title: 'Topic Name',
          onChange: handleInputChange,
        },
        { 
          name: 'description', 
          type: 'text', 
          value: formState.description, 
          title: 'Description',
          onChange: handleInputChange,
        },
        {
          name: 'category',
          type: 'select',
          value: formState.category,
          title: 'Category',
          options: categories.map(category => ({ label: category.name, value: category.id })),
          onChange: handleInputChange,
        },
      ]}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={isEditing ? "Update Topic" : "Add Topic"}
    />
  )
}

export default TopicForm

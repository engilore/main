import { Select } from './styles'


const CustomSelect = ({ name, value, onChange, options }) => {
  return (
    <Select name={name} value={value} onChange={onChange}>
      <option value="">Select an option</option>
      {options && options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default CustomSelect

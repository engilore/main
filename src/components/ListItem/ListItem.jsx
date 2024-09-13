import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/index'

import { ItemContainer, ItemField, ButtonContainer, ListItemWrapper } from './styles'


const ListItem = ({ fields, actions }) => (
  <ListItemWrapper>
    <ItemContainer>
      {fields.map((field, index) => (
        <ItemField key={index}>
          {field.label && <strong>{field.label}:</strong>} {field.value || 'N/A'}
        </ItemField>
      ))}
    </ItemContainer>

    <ButtonContainer>
      {actions.map((action, index) => (
        <Button
          key={index}
          text={action.label}
          icon={action.icon}
          bgColor={action.bgColor || '#007bff'}
          hoverColor={action.hoverColor || 'none'}
          onClick={action.onClick}
          size="small"
          shape="rounded"
          allowedRoles={action.allowedRoles || []}
        />
      ))}
    </ButtonContainer>
  </ListItemWrapper>
)

ListItem.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
    })
  ).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.element,
      bgColor: PropTypes.string,
      hoverColor: PropTypes.string,
      allowedRoles: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
}

export default ListItem


export const accountUrl = 'account/'

export const userUrl = `${accountUrl}users/`
export const userListUrl = userUrl
export const userDetailUrl = (id) => `${userUrl}${id}/`
export const userUpdateUrl = (id) => `${userUrl}${id}/update/`
export const userDeleteUrl = (id) => `${userUrl}${id}/delete/`
export const userAssignRoleUrl = (id) => `${userUrl}${id}/assign-role/`
export const userRevokeRoleUrl = (id) => `${userUrl}${id}/revoke-role/`

export const categoryUrl = 'category/'
export const categoryCreateUrl = `${categoryUrl}create/`
export const categoryDetailUrl = (id) => `${categoryUrl}${id}/`
export const categoryUpdateUrl = (id) => `${categoryUrl}${id}/edit/`
export const categoryDeleteUrl = (id) => `${categoryUrl}${id}/delete/`

export const topicUrl = `${categoryUrl}topic/`
export const topicCreateUrl = `${topicUrl}create/`
export const topicDetailUrl = (id) => `${topicUrl}${id}/`
export const topicUpdateUrl = (id) => `${topicUrl}${id}/edit/`
export const topicDeleteUrl = (id) => `${topicUrl}${id}/delete/`

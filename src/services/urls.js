
export const accountUrl = 'account/'
export const authUrl = 'account'
export const categoryUrl = 'category/'
export const postUrl = 'blog/post/'

export const deleteUrl = "/delete/"
export const updateUrl = "/update/"
export const guardiansUrl = "/guardians/"

export const registerUrl = "/register/"
export const loginUrl = "/login/"
export const logoutUrl = "/logout/"
export const validateUrl = "/validate/"

export const userUrl = `${accountUrl}users/`
export const userListUrl = userUrl
export const userDetailUrl = (id) => `${userUrl}${id}/`
export const userUpdateUrl = (id) => `${userUrl}${id}/update/`
export const userDeleteUrl = (id) => `${userUrl}${id}/delete/`
export const userAssignRoleUrl = (id) => `${userUrl}${id}/assign-role/`
export const userRevokeRoleUrl = (id) => `${userUrl}${id}/revoke-role/`

export const categoryCreateUrl = `${categoryUrl}create/`
export const categoryDetailUrl = (id) => `${categoryUrl}${id}/`
export const categoryUpdateUrl = (id) => `${categoryUrl}${id}/edit/`
export const categoryDeleteUrl = (id) => `${categoryUrl}${id}/delete/`

export const topicUrl = `${categoryUrl}topic/`
export const topicCreateUrl = `${topicUrl}create/`
export const topicDetailUrl = (id) => `${topicUrl}${id}/`
export const topicUpdateUrl = (id) => `${topicUrl}${id}/edit/`
export const topicDeleteUrl = (id) => `${topicUrl}${id}/delete/`

export const postTypesUrl = `${postUrl}types/`
export const postCreateUrl = `${postUrl}create/`
export const postDetailUrl = (id) => `${postUrl}${id}/`
export const postUpdateUrl = (id) => `${postUrl}${id}/edit/`
export const postDeleteUrl = (id) => `${postUrl}${id}/delete/`
export const toggleFeatureUrl = (id) => `${postUrl}${id}/toggle-feature/`

export const userPostUrl = `${postUrl}user/`

export const postDraftUrl = `${postUrl}draft/`
export const postDraftDetailUrl = (id) => `${postDraftUrl}${id}/`
export const postDraftUpdateUrl = (id) => `${postDraftUrl}${id}/edit/`
export const postDraftDeleteUrl = (id) => `${postDraftUrl}${id}/delete/`

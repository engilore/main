
export const postUrl = 'blog/post/'
export const postCreateUrl = `${postUrl}create/`
export const postDetailUrl = (id) => `${postUrl}${id}/`
export const postUpdateUrl = (id) => `${postUrl}${id}/edit/`
export const postDeleteUrl = (id) => `${postUrl}${id}/delete/`

export const userPostUrl = `${postUrl}user/`

export const postDraftUrl = `${postUrl}draft/`
export const postDraftDetailUrl = (id) => `${postDraftUrl}${id}/`
export const postDraftUpdateUrl = (id) => `${postDraftUrl}${id}/edit/`
export const postDraftDeleteUrl = (id) => `${postDraftUrl}${id}/delete/`

import { useRef, useCallback } from 'react'


export const useInfiniteScroll = (loading, hasMore, loadMore) => {
  const observer = useRef()

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore, loadMore]
  )

  return { lastPostElementRef }
}

import {
    Post,
    Title,
    PostMeta,
    PostType,
    PostDate,
    TagPills,
    Tag
} from './styles'

const featuredPosts = [
  {
    title: "Post One Title",
    types: ["Analysis", "Research"],
    date: "August 29, 2024",
    content: "Short content summary for post one...",
    tags: ["Philosophy", "Science"]
  },
  {
    title: "Post Two Title",
    types: ["Poem"],
    date: "August 29, 2024",
    content: "Short content summary for post one...",
    tags: ["Philosophy", "Science", "Photonics"]
  },
  {
    title: "Post Three Title",
    types: ["Memoir", "Treatise"],
    date: "August 28, 2024",
    content: "Short content summary for post two...",
    tags: ["Education"]
  },
  {
    title: "Post Four Title",
    types: ["Story"],
    date: "August 27, 2024",
    content: "Short content summary for post three...",
    tags: ["Literature", "Culture"]
  }
]

const FeaturedPost = ({ count = 4 }) => {
  return (
    <>
      {featuredPosts.slice(0, count).map((post, index) => (
        <Post to={`/post-url-${index}`} key={index}>
          <Title>{post.title}</Title>
          <PostMeta>
            <PostType>
              {post.types.map((type, index) => (
                <span key={index}>{type}</span>
              ))}
            </PostType>
            <PostDate>{post.date}</PostDate>
          </PostMeta>
          <TagPills>
            {post.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagPills>
        </Post>
      ))}
    </>
  )
}

export default FeaturedPost

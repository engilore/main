import Tag from '../../../../components/Tag/index'

import {
    PostContainer,
    Title,
    PostMeta,
    PostType,
    PostDate,
    TagPills,
} from './styles'


const posts = [
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

const Post = ({ count = 4 }) => {
  return (
    <>
      {posts.slice(0, count).map((post, index) => (
        <PostContainer key={index}>
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
                <Tag
                  key={tag}
                  text={tag}
                  textColor="var(--clr-secondary)"
                  bgColor="var(--bg-light)"
                  outlined={true}     
                  borderColor="var(--bg-light)"
                />
            ))}
          </TagPills>
        </PostContainer>
      ))}
    </>
  )
}

export default Post

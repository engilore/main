import {
  Section,
  Post,
  Contain,
  Title,
  Intro,
  PostMeta,
  PostDate,
  PostType,
  Header,
  TagPills,
  Tag
} from './spotlightPostStyle'

const spotlightPostData = {
  title: "Exploring the Depths of Quantum Physics",
  types: ["Analysis", "Memoir", "Research"],
  date: "August 29, 2024",
  intro: "Dive into the fascinating world of quantum mechanics, where particles behave in ways that challenge our understanding of reality. Discover how these principles are shaping the future of technology.",
  tags: ["Philosophy", "Education", "Science"]
}


const SpotlightPost = () => {
  return (
    <Section>
      <Header>In the Spotlight :</Header>
      <Post to="/blog">
        <Contain>
          <Title>{spotlightPostData.title}</Title>
          <PostMeta>
            <PostType>
              {spotlightPostData.types.map((type, index) => (
                <span key={index}>{type}</span>
              ))}
            </PostType>
            <PostDate>
              {spotlightPostData.date}
            </PostDate>
          </PostMeta>
          <Intro>{spotlightPostData.intro}</Intro>
          <TagPills>
            {spotlightPostData.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagPills>
        </Contain>
      </Post>
    </Section>
  )
}

export default SpotlightPost

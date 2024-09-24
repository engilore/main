import { SpotlightPostSection, PostsSection } from './sect/index'

import { Layout, MainContent } from './styles'


const Base = () => {

  return (
    <>
      <SpotlightPostSection />
      <Layout>
        <MainContent>
          <PostsSection />
        </MainContent>
      </Layout>
    </>
  )
}

export default Base

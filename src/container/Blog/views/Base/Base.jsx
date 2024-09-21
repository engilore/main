import { SpotlightPostSection, FeaturedPostsSection } from './sect/index'

import { Layout, MainContent } from './styles'


const Base = () => {

  return (
    <>
      <SpotlightPostSection />
      <Layout>
        <MainContent>
          <FeaturedPostsSection />
        </MainContent>
      </Layout>
    </>
  )
}

export default Base

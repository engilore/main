import BlogSidebar from '../../components/BlogSidebar/index'
import { 
  SpotlightPostSection,
  FeaturedPostsSection,
} from './sect/index'

import {
  Layout,
  MainContent,
  SidebarWrapper
} from './styles'


const Blog = () => {
  return (
    <>
      <SpotlightPostSection />
      <Layout>
        <MainContent>
          <FeaturedPostsSection />
        </MainContent>
        <SidebarWrapper>
          <BlogSidebar />
        </SidebarWrapper>
      </Layout>
    </>
  )
}

export default Blog

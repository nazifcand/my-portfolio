import Post from "../components/Post"
import Layout from "../layouts/default"
import { fetchPosts } from "../services/post.service"
import Section from '../components/Section'

const PostPage = ({ posts }) => {
  return <>
    <Section title='Son Yazılarım'>
      <div id="list-posts">
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </Section>
  </>
}

export const getServerSideProps = async () => {
  let [err, posts] = await fetchPosts()

  if (err) {
    posts = []
  }

  return { props: { posts } }
}

PostPage.getLayout = page => {
  return <Layout>{page}</Layout>
}

export default PostPage
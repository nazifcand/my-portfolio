import Layout from "../layouts/default"

const PostPage = (x) => {
  return <>
    Post
  </>
}

export const getServerSideProps = async () => {
  return { props: {} }
}

PostPage.getLayout = page => {
  return <Layout>{page}</Layout>
}

export default PostPage
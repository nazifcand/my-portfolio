import Layout from "../layouts/default"
import Typed from 'react-typed';
import Head from "next/head";

const IndexPage = (x) => {
  return <>

    <Head>
      <title>nazifcandurgut.dev</title>
    </Head>

    <div id="index-page">
      <h2 id="name">Nazif Can DURGUT</h2>

      <div id="iam">
        <span>{"I'm a "}</span>
        <strong><Typed
          strings={['Frontend Developer', 'Backend Developer', 'Fullstack Developer :)']}
          typeSpeed={50}
          backSpeed={25}
          loop
        /></strong>
      </div>
    </div>
  </>
}

export const getServerSideProps = async () => {
  return { props: { deneme: 'deneme' } }
}

IndexPage.getLayout = page => {
  return <Layout>{page}</Layout>
}

export default IndexPage
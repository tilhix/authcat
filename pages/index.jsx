import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import { authInitialProps } from "../lib/auth";

const Index = (props) => (
  <Layout title="Home" {...props}>
    <Head>
      <title>Home | AuthCat</title>
    </Head>
    <p>lorem ipsum</p>
    <Link href="/profile">
      <a>Go to profile</a>
    </Link>
  </Layout>
);

Index.getInitialProps = authInitialProps();

export default Index;

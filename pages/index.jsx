import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

const Index = () => (
  <Layout title="Home">
    <Head>
      <title>Home | NextAuth</title>
    </Head>
    <p>lorem ipsum</p>
    <Link href="/profile">
      <a>Go to profile</a>
    </Link>
  </Layout>
);

export default Index;

import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => (
  <Layout title="Home">
    <p>lorem ipsum</p>
    <Link href="/profile">
      <a>Go to profile</a>
    </Link>
  </Layout>
);

export default Index;

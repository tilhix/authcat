import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import Head from "next/head";

const Login = () => (
  <Layout title="Login">
    <Head>
      <title>Login | NextAuth</title>
    </Head>
    <LoginForm />
  </Layout>
);

export default Login;

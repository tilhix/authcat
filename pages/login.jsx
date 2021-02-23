import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import Head from "next/head";
import { authInitialProps } from "../lib/auth";

const Login = (props) => (
  <Layout title="Login" {...props}>
    <Head>
      <title>Login | AuthCat</title>
    </Head>
    <LoginForm />
  </Layout>
);

Login.getInitialProps = authInitialProps();

export default Login;

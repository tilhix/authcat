import App from "next/app";
import { getUserToken } from "../util/auth";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const user = getUserToken(appContext.ctx.req);

  return { ...appProps, ...user };
};

export default MyApp;

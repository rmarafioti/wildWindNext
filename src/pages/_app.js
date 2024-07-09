// src/pages/_app.js
import Layout from "@/layout/layout";
import ".././globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

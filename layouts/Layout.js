import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/ecdb2bd2bc.js"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-site-verification"
          content="C4-QBjnXbQ_r5AkALSnCFORkhR3QVdpc3Hm385bRYss"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

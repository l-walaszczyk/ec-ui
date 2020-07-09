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
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

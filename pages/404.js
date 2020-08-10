import React from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";

const Error404 = () => {
  // const handleButtonClick = () => {
  //   window.location.assign("https://www.onet.pl");
  // };

  return (
    <Layout>
      <Head>
        <title>Błąd 404</title>
      </Head>
      <main
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "stretch",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            width: "100%",
          }}
        >
          Strona o podanym adresie nie istnieje
        </h1>
        {/* <button onClick={handleButtonClick}>PRZEKIERUJ</button> */}
      </main>
    </Layout>
  );
};

export default Error404;

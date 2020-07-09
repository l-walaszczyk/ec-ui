import Layout from "../layouts/Layout";

import React from "react";

const Error404 = () => {
  return (
    <Layout>
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
      </main>
    </Layout>
  );
};

export default Error404;

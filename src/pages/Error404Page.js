import React from "react";

const Error404Page = () => {
  return (
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
  );
};

export default Error404Page;

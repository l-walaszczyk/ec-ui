import Layout from "../layouts/Layout";

import React from "react";

const Downloads = () => {
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
          Materiały do pobrania
        </h1>
      </main>
    </Layout>
  );
};

// Downloads.getInitialProps = async (ctx) => {
//   console.log(ctx.req ? ctx.req.headers["user-agent"] : undefined);
//   let isMobileView = (ctx.req
//     ? ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };

export default Downloads;

// export async function getServerSideProps({ req }) {
//   console.log(req.headers["user-agent"]);

//   let isMobileView = (req
//     ? req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(
//     /Android|BlackBerry|iPhone|iPad|iPod|Phone|Opera Mini|IEMobile|WPDesktop/i
//   );
//   // Pass data to the page via props
//   return { props: { isMobileView: Boolean(isMobileView) } };
// }

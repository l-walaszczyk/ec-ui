import React from "react";
import Head from "next/head";
import Layout from "../layouts/Layout";

const Downloads = () => {
  return (
    <Layout>
      <Head>
        <title>Materiały do pobrania</title>
        <meta
          name="description"
          content="Kwestionariusze do wypełnienia przed rozpoczęciem terapii dla dzieci i młodzieży, a także regulaminy i informacje o przetwarzaniu danych osobowych"
        />
        <meta
          property="og:title"
          content="Emilia Cwojdzińska - Materiały do pobrania"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://emiliacwojdzinska.pl/do-pobrania"
        />
      </Head>
      <main>
        <section className="downloads">
          <h1>Materiały do pobrania</h1>
          <div className="downloads-wrap">
            <div className="text-container">
              <h3>
                Kwestionariusz do wypełnienia przed terapią dzieci/młodzieży:
              </h3>
              <ul>
                <li>
                  <a href="/docs/Kwestionariusz dzieci pytania.doc">
                    W formacie .doc (do wypełnienia na komputerze)
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/Kwestionariusz dzieci pytania.pdf"
                    target="_blank"
                  >
                    W formacie .pdf (do wydruku)
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-container">
              <h3>Regulaminy:</h3>
              <ul>
                <li>
                  <a href="/docs/Regulamin.pdf" target="_blank">
                    Regulamin serwisu emiliacwojdzinska.pl
                  </a>
                </li>
                <li>
                  <a href="/docs/Regulamin.pdf" target="_blank">
                    Informacja o danych osobowych
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Downloads;

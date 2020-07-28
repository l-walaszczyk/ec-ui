import Layout from "../layouts/Layout";

import React from "react";

const Downloads = () => {
  return (
    <Layout>
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
                  <a
                    href="/docs/Kwestionariusz dzieci pytania.pdf"
                    target="_blank"
                  >
                    Regulamin serwisu emiliacwojdzinska.pl
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/Kwestionariusz dzieci pytania.pdf"
                    target="_blank"
                  >
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

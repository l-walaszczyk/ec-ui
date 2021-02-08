import React from "react";

const texts = {
  home: {
    home: (
      <p>
        Zapraszam Państwa serdecznie
        <br />
        do poradni psychoterapeutycznej
        <br />
        <strong>
          Gabinet Psychologiczny
          <br />– mgr Emilia Cwojdzińska
        </strong>
        <br />
        położonej w miejscowości
        <br />
        Babimost, na granicy województwa
        <br />
        lubuskiego i wielkopolskiego.
      </p>
    ),
    about: (
      <>
        <p>
          Jestem dyplomowanym psychologiem i certyfikowanym psychoterapeutą.
          Specjalizuję się w udzielaniu pomocy psychologicznej oraz prowadzeniu
          psychoterapii w nurcie poznawczo-behawioralnym. Aktualnie jest to
          forma terapii o najlepiej udokumentowanej skuteczności popartej
          dowodami naukowymi.
        </p>
        <p>
          Dla osób zainteresowanych psychoterapią za pośrednictwem Internetu
          dostępne są wizyty online.
        </p>
      </>
    ),
    services: [
      <p>1) Psychoterapia poznawczo - behawioralna dorosłych</p>,
      <p>2) Psychoterapia poznawczo - behawioralna dzieci i młodzieży</p>,
      <p>
        3) Psychologia transportu i medycyna pracy - badania psychologiczne /
        psychotechniczne
      </p>,
    ],
    contact: {
      addressLine1: "ul. T. Kościuszki 2,",
      addressLine2: "66-110 Babimost",
      companyLine1: "Gabinet Psychologiczny",
      companyLine2: "- mgr Emilia Cwojdzińska,",
      companyLine3: "NIP 923 168 21 74",
      email: "e.cwojdzinska@gmail.com",
      phone: "+48 600 044 618",
      accountNumberLine1: "Numer konta (mBank):",
      accountNumberLine2: "84 1140 2004 0000 3202 7948 7472",
      fb: "https://www.facebook.com",
    },
  },
  about: {
    title: <h3>Mgr Emilia Cwojdzińska </h3>,
    about: (
      <>
        <p>
          Jestem absolwentką Wydziału Psychologii Uniwersytetu im. Adama
          Mickiewicza w Poznaniu, specjalność Psychologia Kliniczna. Jestem
          certyfikowanym psychoterapeutą poznawczo-behawioralnym (nr certyfikatu
          581). Ukończyłam 4,5 letnie Podyplomowe Szkolenie w Psychoterapii o
          orientacji Poznawczo-Behawioralnej z podstawami Psychoterapii
          Psychodynamicznej w Warszawie organizowaną przez II Klinikę
          Psychiatryczną Warszawskiego Uniwersytetu Medycznego i Fundację
          Rozwoju Psychiatrii i Psychoterapii przy II Klinice Psychiatrycznej
          Warszawskiego Uniwersytetu Medycznego. Posiadam kilkuletnie
          doświadczenie kliniczne, prowadzę terapię oraz konsultacje dla osób
          dorosłych, młodzieży i dzieci. Organizuję warsztaty tematyczne z
          zakresu psychoedukacji. Jestem członkiem Polskiego Towarzystwa Terapii
          Poznawczej i Behawioralnej (PTTPB).
        </p>
        <p>
          Ukończyłam Studia Podyplomowe na kierunku Psychologia Transportu
          Uniwersytetu Humanistycznospołecznego SWPS w Poznaniu zdobywając
          uprawnienia do badań psychologicznych/psychotechnicznych z zakresu
          psychologii transportu i medycyny pracy.
        </p>
      </>
    ),
    caption: (
      <p>
        mgr Emilia Cwojdzińska - certyfikowany psychoterapeuta
        poznawczo-behawioralny
      </p>
    ),
  },
  services: {
    titles: [
      <>
        Psychoterapia poznawczo - behawioralna
        <br />
        osób dorosłych
      </>,
      <>
        Psychoterapia poznawczo - behawioralna
        <br />
        dzieci i młodzieży
      </>,
      <>
        Psychologia transportu i medycyna pracy
        <br />- badania psychologiczne / psychotechniczne
      </>,
    ],
    descriptions: [
      {
        intro: (
          <>
            <p>
              Jest nurtem terapii o potwierdzonej naukowo skuteczności w
              leczeniu określonych zaburzeń.
            </p>
            <p>
              Oferuję kompleksowe podejście w rozwiązywaniu problemów
              ukierunkowanych na ”tu i teraz”, czasem z nawiązaniem do
              przeszłości jako elementu uzupełnienia w celu lepszego rozumienia
              obecnego funkcjonowania.
            </p>
          </>
        ),
        extended: (
          <>
            <p>
              Jest nurtem terapii o potwierdzonej naukowo skuteczności w
              leczeniu określonych zaburzeń.
            </p>
            <p>
              Oferuję kompleksowe podejście w rozwiązywaniu problemów
              ukierunkowanych na ”tu i teraz”, czasem z nawiązaniem do
              przeszłości jako elementu uzupełnienia w celu lepszego rozumienia
              obecnego funkcjonowania.
            </p>
            <p>
              Klient poznaje przydatne strategie radzenia sobie z trudnościami i
              może je samodzielnie zastosować w aktualnych doświadczeniach
              życiowych. Terapia opiera się na dostrzeżeniu związku pomiędzy
              sposobem myślenia, emocjami i zachowaniem się w różnych
              sytuacjach, a także modyfikacji zniekształconych przekonań
              będących źródłem przykrych emocji i cierpienia, które zniwelują
              stres i pomogą poprawić jakość życia.
            </p>
            <h4>Specjalizuję się w terapii:</h4>
            <ul>
              <li>
                Zaburzeń lękowych <br />
                (lęk napadowy, fobii np. agorafobia, arachnofobia, fobia
                społeczna itd.) lęk uogólniony (GAD), obsesyjno - kompulsyjnych
                (OCD), hipochondria, zespół stresu pourazowego (PTSD).
              </li>
              <li>Zaburzenia nastroju</li>
              <li>Depresja</li>
              <li>Zaburzenia odżywiania, (np. bulimia, jedzenie napadowe)</li>
              <li>
                Uzależnienia od substancji psychoaktywnych oraz zachowań
                (uzależnienia od komputera, hazard, zakupoholizm)
              </li>
              <li>Zaburzeń snu</li>
              <li>Zaburzenia osobowości</li>
              <li>Terapia małżeńska</li>
            </ul>
          </>
        ),
      },
      {
        intro: (
          <>
            <p>
              Założenia teoretyczne psychoterapii poznawczo- behawioralnej
              dzieci i młodzieży są takie same jak w terapii osób dorosłych.
            </p>
            <p>
              Dodatkowo w proces terapeutyczny włącza się osoby bliskie takie
              jak rodzice, opiekunowie.
            </p>
          </>
        ),
        extended: (
          <>
            <p>
              Założenia teoretyczne psychoterapii poznawczo-behawioralnej dzieci
              i młodzieży są takie same jak w terapii osób dorosłych. Dodatkowo
              w proces terapeutyczny włącza się osoby bliskie takie jak rodzice,
              opiekunowie.
            </p>
            <p>
              Ważnym aspektem zrozumienia trudności dziecka jest dostosowanie
              pomocy do fazy rozwoju w jakiej się znajduje.
            </p>
            <p>
              Poza spotkaniami indywidualnymi prowadzę warsztaty
              psychoedukacyjne dla dzieci i młodzieży na wybrany temat w
              zależności od zgłaszanych potrzeb.
            </p>
            <p>Zapraszam do współpracy!</p>
          </>
        ),
      },
      {
        intro: (
          <ul>
            <li>
              badania psychologiczne / psychotechniczne dla osób wykonujących
              zawód wymagający szczególnej sprawności psychomotorycznej, np.
              kierowcy i operatorzy maszyn,
            </li>
            <li>
              badanie psychologiczne dla osób skierowanych przez sąd, lekarza
              lub pracodawcę w celu oceny stanu psychologicznego.
            </li>
          </ul>
        ),
        extended: {
          part1: (
            <>
              <h5>
                Badanie psychologiczne, psychotechniczne dla osób wykonujących
                zawód wymagajacy szczególnej sprawności psychomotorycznej:
              </h5>
              <ul>
                <li>
                  kierowców kat. C, C+E, C1, C1+E, D1, D1+E, D, D+E, uprawnienia
                  do kierowania pojazdem uprzywilejowanym lub przewożącym
                  wartości pieniężne
                </li>
                <li>instruktor / egzaminator / instruktor techniki jazdy</li>
                <li>
                  kierujący pojazdami kat. B w ramach obowiązków służbowych
                </li>
                <li>
                  <strong>operatorzy maszyn</strong> budowlanych i
                  konstrukcyjnych (np. wózków widłowych, koparek, ładowarek,
                  osoby wykonujące prace na wysokościach i in.)
                </li>
              </ul>
            </>
          ),
          part2: (
            <h5>
              Badanie psychologiczne dla osób skierowanych przez sąd, lekarza
              lub pracodawcę w celu oceny stanu psychologicznego.
            </h5>
          ),
          part3: (
            <h5>
              Oferujemy zniżki dla firm przy umowach grupowych.
              <br />
              Możliwe przeprowadzenie badań grupowych w siedzibie firmy klienta.
            </h5>
          ),
        },
      },
    ],
    types: [
      [
        {
          name: "Usługa testowa - stworzona do testowania systemu płatności",
          price: 10,
          minutes: 15,
        },
        {
          name: "Konsultacja psychologiczna",
          price: 150,
          minutes: 50,
        },
        {
          name: "Sesja psychoterapii indywidualnej",
          price: 150,
          minutes: 50,
        },
        {
          name: "Konsultacja psychologiczna pary",
          price: 170,
          minutes: 80,
        },
        {
          name: "Sesja terapii par",
          price: 170,
          minutes: 80,
        },
        {
          name: "Wizyta przez Skype",
          price: 150,
          minutes: 50,
        },
        {
          name: "Wizyta dla par przez Skype",
          price: 170,
          minutes: 80,
        },
      ],
      [
        {
          name: "Usługa testowa, Skype, dziecko - stworzona do testowania systemu płatności",
          price: 1,
          minutes: 15,
        },
        {
          name: "Konsultacja psychologiczna dziecka/nastolatka",
          price: 150,
          minutes: 50,
        },
        {
          name: "Sesja psychoterapii indywidualnej dziecka/nastolatka",
          price: 150,
          minutes: 50,
        },
        {
          name: "Wizyta przez Skype dziecka/nastolatka",
          price: 150,
          minutes: 50,
        },
      ],
      [
        {
          name:
            "Badanie psychologiczne dla kandydatów i kierowców zawodowych kategorii: C, C+E, C1, C1+E, D1, D1+E, D, D+E C, C+E",
          price: 150,
          minutes: 110,
        },
        {
          name: "Badanie psychologiczne kierowcy pojazdów służbowych kat. B",
          price: 100,
          minutes: 110,
        },
        {
          name: "Badanie psychologiczne operatorów wózków widłowych",
          price: 100,
          minutes: 110,
        },
        {
          name: "Badanie psychologiczne osób pracujących na wysokościach",
          price: 80,
          minutes: 110,
        },
        {
          name:
            "Badanie psychologiczne w zakresie medycyny pracy na inne stanowiska pracy na podstawie skierowania od lekarza lub pracodawcy",
          price: 100,
          minutes: 110,
        },
      ],
    ],
    formFields: {
      firstNameContact: {
        placeholder: [
          "Twoje imię",
          "Imię rodzica/opiekuna prawnego",
          "Twoje imię",
        ],
      },
      lastNameContact: {
        placeholder: [
          "Twoje nazwisko",
          "Nazwisko rodzica/opiekuna prawnego",
          "Twoje nazwisko",
        ],
      },
      emailContact: {
        placeholder: [
          "Twój adres e-mail",
          "Adres e-mail rodzica/opiekuna prawnego",
          "Twój adres e-mail",
        ],
        error: "Adres e-mail niepoprawny",
      },
      phoneContact: {
        placeholder: [
          "Twój numer telefonu",
          "Numer telefonu rodzica/opiekuna prawnego",
          "Twój numer telefonu",
        ],
      },
      firstName2: {
        placeholder: [
          "Imię partnera/partnerki",
          "Imię dziecka/nastolatka",
          "Imię drugiej osoby",
        ],
      },
      lastName2: {
        placeholder: [
          "Nazwisko partnera/partnerki",
          "Nazwisko dziecka/nastolatka",
          "Nazwisko drugiej osoby",
        ],
      },
      yearOfBirth2: {
        placeholder: [
          "Rok urodzenia partnera/partnerki",
          "Rok urodzenia dziecka/nastolatka",
          "Rok urodzenia drugiej osoby",
        ],
      },
      firstName3: {
        placeholder: [
          "Imię trzeciej osoby",
          "Imię drugiego dziecka/nastolatka",
          "Imię trzeciej osoby",
        ],
      },
      lastName3: {
        placeholder: [
          "Nazwisko trzeciej osoby",
          "Nazwisko drugiego dziecka/nastolatka",
          "Nazwisko trzeciej osoby",
        ],
      },
    },
  },
};

export default texts;

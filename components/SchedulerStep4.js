import React from "react";
import { useRouter } from "next/router";
import texts from "../public/content/texts";

const SchedulerStep4 = ({
  setSelectedFieldIndex,
  savedMeeting: {
    _id: id,
    status,
    meetingDate,
    meetingName,
    meetingPrice,
    meetingDuration,
    numberOfPeople,
    meetingDetails: { emailContact, paymentMethod },
    emailDetails: { messageId } = {},
  },
}) => {
  const router = useRouter();

  const handleOK = () => {
    const idCookie =
      document.cookie &&
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("id"))
        .split("=")[1];

    if (idCookie === id) {
      document.cookie = "id=;max-age=0";
    }
    router.push("/");
  };

  return (
    <section className="scheduler">
      <div className="options-container">
        {status === "temp" ? (
          <div className="summary-container">
            <h2>
              Płatność nie została sfinalizowana
              <br />
              spotkanie nie zostało zarezerwowane
            </h2>
            <p>
              Jeśli wpłaciliście Państwo pieniądze, proszę o przesłanie do mnie
              wiadomości e-mail otrzymanej od seriwsu Przelewy24. Na podstawie
              danych transakcji z serwisu Przelewy24 wpłata zostanie
              zidentyfikowana i zwrócona Państwu bądź zaliczona na poczet
              przyszłego spotkania.
            </p>
          </div>
        ) : (
          <div className="summary-container">
            <h2>
              Spotkanie zostało {status === "paid" && "opłacone i "}
              zarezerwowane
            </h2>
            {status === "paid" && <p>Dziękuję za dokonanie płatności.</p>}
            <p>
              Na podany adres email ({emailContact}){" "}
              {messageId ? "zostało" : "powinno zostać"} wysłane potwierdzenie
              rezerwacji. Powinno dojść w przeciągu 5 minut, jeśli go nie
              widzisz, sprawdź folder Spam.
            </p>
            <p>
              W przypadku nieotrzymania potwierdzenia po upływie 10 minut proszę
              o kontakt pod adresem:{" "}
              <a
                className="row"
                rel="noopener noreferrer"
                href={`mailto:${texts.home.contact.email}`}
              >
                {texts.home.contact.email}
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="button-container">
        <button type="button" className="ok" onClick={handleOK}>
          OK
        </button>
      </div>
    </section>
  );
};
export default SchedulerStep4;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorHint from "./ErrorHint";
import SelectField from "./SelectField";
import texts from "../public/content/texts";
import moment from "moment-timezone";
import "moment/locale/pl";

const SummaryForm = ({
  step,
  setStep,
  selectedFieldIndex,
  setSelectedFieldIndex,
  id,
  meetingName,
  meetingPrice,
  meetingDuration,
  numberOfPeople,
  setSavedMeeting,
}) => {
  const handleCancel = () => {
    if (
      window.confirm(
        "Wybrany termin wróci do puli i ktoś inny będzie mógł go zarezerwować. Czy zgadzasz się na to?"
      )
    ) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        mode: "cors", // no-cors, *cors, same-origin
        credentials: "include", // include, *same-origin, omit
      };

      const params = {
        status: "temp",
      };

      const url =
        process.env.API_URL +
        "meetings/" +
        id +
        "?" +
        new URLSearchParams(params);

      fetch(url, requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.success) {
              document.cookie = "id=;max-age=0";
              setSelectedFieldIndex(null);
              setStep(0);
            } else {
              console.log("Failed at deleting meeting of id", id);
            }
          },
          (error) => {
            console.log("Error:", error);
          }
        );
    }
  };

  let subHeader1 = null;
  let header2 = null;

  const initialValues = {
    firstNameContact: "",
    lastNameContact: "",
    emailContact: "",
    repeat: "",
    phoneContact: "",
    agreement1: false,
    agreement2: false,
  };

  const validationSchema = {
    firstNameContact: Yup.string().required("Pole wymagane"),
    lastNameContact: Yup.string().required("Pole wymagane"),

    emailContact: Yup.string()
      .email("Adres email niepoprawny")
      .required("Pole wymagane"),
    repeat: Yup.string()
      .required("Pole wymagane")
      .oneOf(
        [Yup.ref("emailContact")],
        "Adres e-mail się nie zgadza. Sprawdź poprawność."
      ),
    phoneContact: Yup.string()
      .min(9, "Numer telefonu powinien mieć co najmniej 9 znaków")
      .required("Pole wymagane"),
    agreement1: Yup.boolean().oneOf([true], "Akcaptacja wymagana"),
    agreement2: Yup.boolean().oneOf([true], "Akcaptacja wymagana"),
  };

  if (numberOfPeople >= 2) {
    initialValues.paymentMethod = "in-person";
  } else if (meetingName.includes(" Skype")) {
    initialValues.paymentMethod = "p24";
  } else {
    initialValues.paymentMethod = "";
    validationSchema.paymentMethod = Yup.string().required(
      "Wybierz metodę płatności"
    );
  }

  switch (selectedFieldIndex) {
    case 0:
      if (meetingName.includes(" par")) {
        header2 = (
          <h2>
            Proszę podaj następujące informacje
            <br />o partnerze/partnerce
          </h2>
        );
        initialValues.firstName2 = "";
        initialValues.lastName2 = "";
        validationSchema.firstName2 = Yup.string().required("Pole wymagane");
        validationSchema.lastName2 = Yup.string().required("Pole wymagane");
      }
      break;

    case 1:
      subHeader1 = (
        <span>
          <br />
          (wypełnia rodzic/opiekun prawny)
        </span>
      );
      header2 = (
        <h2>
          Proszę podaj następujące informacje
          <br />o dziecku/nastolatku
        </h2>
      );
      initialValues.firstName2 = "";
      initialValues.lastName2 = "";
      initialValues.yearOfBirth2 = "";
      validationSchema.firstName2 = Yup.string().required("Pole wymagane");
      validationSchema.lastName2 = Yup.string().required("Pole wymagane");
      console.log(
        moment.utc().tz("Europe/Warsaw").subtract(18, "years").get("year")
      );
      validationSchema.yearOfBirth2 = Yup.number()
        .min(
          moment.utc().tz("Europe/Warsaw").subtract(18, "years").get("year"),
          "To spotkanie jest przenaczone dla dzieci/młodzieży"
        )
        .max(
          moment.utc().tz("Europe/Warsaw").subtract(1, "year").get("year"),
          "Rok urodzenia musi być wcześniejszy niż bieżący"
        )
        .typeError("Rok musi być liczbą")
        .required("Pole wymagane");
      initialValues.parent = false;
      validationSchema.parent = Yup.boolean().oneOf(
        [true],
        "Wymagana zgoda rodzica/opiekuna"
      );
      break;

    case 2:
      if (numberOfPeople >= 2) {
        subHeader1 = (
          <span>
            <br />
            (wypełnia jedna z osób do badania, osoba kontakowa)
          </span>
        );
        header2 = (
          <h2>
            Proszę podaj następujące informacje
            <br />o pozostałych klientach
          </h2>
        );
        initialValues.firstName2 = "";
        initialValues.lastName2 = "";
        validationSchema.firstName2 = Yup.string().required("Pole wymagane");
        validationSchema.lastName2 = Yup.string().required("Pole wymagane");
      }
      if (numberOfPeople === 3) {
        initialValues.firstName3 = "";
        initialValues.lastName3 = "";
        validationSchema.firstName3 = Yup.string().required("Pole wymagane");
        validationSchema.lastName3 = Yup.string().required("Pole wymagane");
      }
      break;

    default:
      break;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={(values, { setSubmitting }) => {
        const finalValues = {};
        for (const property in values) {
          const value = values[property];
          if (typeof value === "string") {
            finalValues[property] = value.trim();
          } else finalValues[property] = value;
        }
        console.log(finalValues);

        const requestOptions = {
          method: "PATCH",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalValues),
          mode: "cors", // no-cors, *cors, same-origin
          credentials: "include", // include, *same-origin, omit
        };

        const url = process.env.API_URL + "meetings/" + id;
        // +
        // "/" +
        // finalValues.paymentMethod;

        fetch(url, requestOptions)
          .then((res) => res.json())
          .then(({ success, savedMeeting, url }) => {
            setSubmitting(false);
            if (success) {
              if (url) {
                console.log("Redirecting to url:", url);
                window.location.assign(url);
              } else {
                setSavedMeeting(savedMeeting);
                setStep(step + 1);
              }
            } else {
              alert(
                "Błąd podczas zapisywania spotkania. Odśwież stronę i spróbuj zarezerwować spotkanie ponownie."
              );
            }
          });
      }}
    >
      {({ values, isSubmitting, isValid, dirty }) => (
        <Form>
          <h2>Proszę podaj kilka informacji o sobie{subHeader1}</h2>
          <div className="form-field">
            <Field
              type="text"
              name="firstNameContact"
              placeholder={
                texts.services.formFields.firstNameContact.placeholder[
                  selectedFieldIndex
                ]
              }
            />
            <ErrorMessage name="firstNameContact" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="text"
              name="lastNameContact"
              placeholder={
                texts.services.formFields.lastNameContact.placeholder[
                  selectedFieldIndex
                ]
              }
            />
            <ErrorMessage name="lastNameContact" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="email"
              name="emailContact"
              placeholder={
                texts.services.formFields.emailContact.placeholder[
                  selectedFieldIndex
                ]
              }
            />
            <ErrorMessage name="emailContact" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="email"
              name="repeat"
              placeholder="Powtórz kontakt mailowy (dla sprawdzenia)"
            />
            <ErrorMessage name="repeat" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="tel"
              name="phoneContact"
              placeholder={
                texts.services.formFields.phoneContact.placeholder[
                  selectedFieldIndex
                ]
              }
            />
            <ErrorMessage name="phoneContact" component={ErrorHint} />{" "}
          </div>
          {header2 && (
            <>
              {header2}
              <div className="form-field">
                <Field
                  type="text"
                  name="firstName2"
                  placeholder={
                    texts.services.formFields.firstName2.placeholder[
                      selectedFieldIndex
                    ]
                  }
                />
                <ErrorMessage name="firstName2" component={ErrorHint} />
              </div>
              <div className="form-field">
                <Field
                  type="text"
                  name="lastName2"
                  placeholder={
                    texts.services.formFields.lastName2.placeholder[
                      selectedFieldIndex
                    ]
                  }
                />
                <ErrorMessage name="lastName2" component={ErrorHint} />
              </div>
              {selectedFieldIndex === 1 && (
                <div className="form-field">
                  <Field
                    type="text"
                    name="yearOfBirth2"
                    placeholder={
                      texts.services.formFields.yearOfBirth2.placeholder[
                        selectedFieldIndex
                      ]
                    }
                  />
                  <ErrorMessage name="yearOfBirth2" component={ErrorHint} />
                </div>
              )}
              {numberOfPeople === 3 && (
                <>
                  <div className="form-field">
                    <Field
                      type="text"
                      name="firstName3"
                      placeholder={
                        texts.services.formFields.firstName3.placeholder[
                          selectedFieldIndex
                        ]
                      }
                    />
                    <ErrorMessage name="firstName3" component={ErrorHint} />
                  </div>
                  <div className="form-field">
                    <Field
                      type="text"
                      name="lastName3"
                      placeholder={
                        texts.services.formFields.lastName3.placeholder[
                          selectedFieldIndex
                        ]
                      }
                    />
                    <ErrorMessage name="lastName3" component={ErrorHint} />
                  </div>
                </>
              )}
            </>
          )}
          {numberOfPeople >= 2 ? (
            <>
              <h2>Sposób płatności</h2>
              <div className="payment-container">
                <div className="text-container">
                  <p>Płatność do uregulowania podczas wizyty</p>
                </div>
              </div>
            </>
          ) : meetingName.includes(" Skype") ? (
            <>
              <h2>Sposób płatności</h2>
              <div className="payment-container">
                <div className="text-container">
                  <p>Płatność za pośrednictwem serwisu Przelewy24</p>
                </div>
                <div className="img-container">
                  <img src="/images/przelewy24.png" />
                </div>
              </div>
            </>
          ) : (
            <>
              <h2>Wybierz sposób płatności</h2>
              <div className="form-field">
                <Field
                  name={"paymentMethod"}
                  component={SelectField}
                  value={values.paymentMethod}
                  options={[
                    {
                      value: "",
                      label: <p>wybierz z listy...</p>,
                      isDisabled: true,
                    },
                    {
                      value: "p24",
                      label: (
                        <>
                          <p>Płatność z góry</p>
                          <img src="/images/przelewy24.png" />
                        </>
                      ),
                    },
                    {
                      value: "in-person",
                      label: <p>Płatność podczas wizyty w gabinecie</p>,
                    },
                  ]}
                />
                <ErrorMessage name="paymentMethod" component={ErrorHint} />
              </div>
            </>
          )}

          {selectedFieldIndex === 1 && (
            <div className="form-field">
              <label>
                <Field type="checkbox" name="parent" />
                <span>
                  <span>
                    Jestem rodzicem/opiekunem prawnym dziecka i wyrażam
                    zgodę na wizytę{" "}
                    {meetingName.includes(" Skype") ? "online" : "w gabinecie"}.
                  </span>
                </span>
              </label>
              <ErrorMessage name="parent" component={ErrorHint} />
            </div>
          )}

          <div className="form-field">
            <label>
              <Field type="checkbox" name="agreement1" />
              <span>
                <span>
                  {"Akceptuję "}
                  <a href="/docs/Regulamin.pdf" target="_blank">
                    Regulamin świadczenia usług
                  </a>
                </span>
              </span>
            </label>
            <ErrorMessage name="agreement1" component={ErrorHint} />
          </div>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="agreement2" />
              <span>
                <span>
                  {"Akceptuję "}
                  <a href="/docs/RODO.pdf" target="_blank">
                    Informację o przetwarzaniu danych osobowych
                  </a>
                </span>
              </span>
            </label>
            <ErrorMessage name="agreement2" component={ErrorHint} />
          </div>
          <div className="button-container">
            <button type="button" className="nav" onClick={handleCancel}>
              Wstecz
            </button>

            <button
              type="submit"
              className={`nav${dirty && isValid ? "" : " inactive"}`}
              disabled={isSubmitting}
            >
              {values.paymentMethod === "p24"
                ? "Płacę"
                : values.paymentMethod === "in-person"
                ? "Rezerwuję"
                : "Dalej"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SummaryForm;

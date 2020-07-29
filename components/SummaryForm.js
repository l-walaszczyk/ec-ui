import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorHint from "./ErrorHint";
import SelectField from "./SelectField";

const SummaryForm = ({ step, setStep, savedMeeting, meetingType }) => {
  return (
    <Formik
      initialValues={{
        forSomeoneElse: false,
        contactFirstName: "",
        contactLastName: "",
        patient1FirstName: "",
        patient1LastName: "",
        patient1YearOfBirth: "",
        email: "",
        telephone: "",
        paymentMethod: "",
        agreement1: false,
        agreement2: false,
      }}
      validationSchema={Yup.object({
        forSomeoneElse: Yup.boolean(),
        contactFirstName: Yup.string().when("forSomeoneElse", (val, schema) => {
          return val ? schema.required("Wpisz imię osoby kontaktowej") : schema;
        }),
        contactLastName: Yup.string().when("forSomeoneElse", (val, schema) => {
          return val
            ? schema.required("Wpisz nazwisko osoby kontaktowej")
            : schema;
        }),
        patient1FirstName: Yup.string().required("Wpisz imię"),
        patient1LastName: Yup.string().when("forSomeoneElse", (val, schema) => {
          return val ? schema : schema.required("Wpisz nazwisko");
        }),
        patient1YearOfBirth: Yup.number()
          .typeError("Rok musi być liczbą")
          // .test(
          //   "len",
          //   "Rok urodzenia powinien być 4-cyfrowy",
          //   (val) => val.toString().length === 4
          // )
          .required("Wpisz rok urodzenia pacjenta"),
        email: Yup.string()
          .email("Adres email niepoprawny")
          .required("Wpisz adres email"),
        telephone: Yup.string()
          .min(9, "Numer telefonu powinien mieć co najmniej 9 znaków")
          .required("Wpisz numer telefonu"),
        paymentMethod: Yup.string().required("Wybierz metodę płatności"),
        agreement1: Yup.boolean().oneOf(
          [true],
          "Potwierdź akceptację regulaminu"
        ),
        agreement2: Yup.boolean().oneOf(
          [true],
          "Potwierdź akceptację informacji o danych osobowych"
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const finalValues = Object.assign({ meetingType }, values);
        console.log(finalValues);
        if (!values.forSomeoneElse) {
          delete finalValues.contactFirstName;
          delete finalValues.contactLastName;
        } else {
          delete finalValues.patient1LastName;
          delete finalValues.patient2LastName;
        }

        const params = {
          id: savedMeeting._id,
        };

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

        const url =
          process.env.API_URL + "summary/?" + new URLSearchParams(params);

        fetch(url, requestOptions)
          .then((res) => res.json())
          .then((res) => {
            setSubmitting(false);
            if (res.success) {
              console.log("PATCHing successful");
              setStep(step + 1);
            } else {
              alert(
                "Błąd podczas zapisywania spotkania. Odśwież stronę i spróbuj zarezerwować spotkanie ponownie."
              );
              console.log("PATCHing failed");
            }
          });
      }}
    >
      {({ values, isSubmitting, isValid, dirty }) => (
        <Form>
          <h2>
            Proszę podaj jeszcze kilka informacji
            <br />
            {/* (wymagane oznaczono *) */}
          </h2>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="forSomeoneElse" />
              <span>
                Zaznacz tylko jeśli rezerwujesz termin dla innej osoby (nie dla
                siebie)
              </span>
            </label>
          </div>
          {values.forSomeoneElse && (
            <>
              <div className="form-field">
                <Field
                  type="text"
                  name="contactFirstName"
                  placeholder="Imię osoby kontaktowej"
                />
                <ErrorMessage name="contactFirstName" component={ErrorHint} />
              </div>
              <div className="form-field">
                <Field
                  type="text"
                  name="contactLastName"
                  placeholder="Nazwisko osoby kontaktowej"
                />
                <ErrorMessage name="contactFirstName" component={ErrorHint} />
              </div>
            </>
          )}
          <div className="form-field">
            <Field
              type="text"
              name="patient1FirstName"
              placeholder={values.forSomeoneElse ? "Imię pacjenta" : "Imię"}
              autocomplete={values.forSomeoneElse ? "off" : "on"}
            />
            <ErrorMessage name="patient1FirstName" component={ErrorHint} />
          </div>
          {!values.forSomeoneElse && (
            <div className="form-field">
              <Field
                type="text"
                name="patient1LastName"
                placeholder={
                  values.forSomeoneElse ? "Nazwisko pacjenta" : "Nazwisko"
                }
                // autocomplete={values.forSomeoneElse ? "off" : "on"}
              />
              <ErrorMessage name="patient1LastName" component={ErrorHint} />
            </div>
          )}
          <div className="form-field">
            <Field
              type="text"
              name="patient1YearOfBirth"
              placeholder={
                values.forSomeoneElse
                  ? "Rok urodzenia pacjenta"
                  : "Rok urodzenia"
              }
              autocomplete="off"
            />
            <ErrorMessage name="patient1YearOfBirth" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="email"
              name="email"
              placeholder={
                values.forSomeoneElse
                  ? "Adres e-mail os. kontaktowej"
                  : "Adres e-mail"
              }
            />
            <ErrorMessage name="email" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="tel"
              name="telephone"
              placeholder={
                values.forSomeoneElse
                  ? "Numer telefonu os. kontaktowej"
                  : "Numer telefonu"
              }
            />
            <ErrorMessage name="telephone" component={ErrorHint} />{" "}
          </div>
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
                  value: "przelewy24",
                  label: (
                    <>
                      <p>Płatność z góry</p>

                      <img src="/images/przelewy24.png" />
                    </>
                  ),
                },
                {
                  value: "personally",
                  label: <p>Płatność podczas wizyty w gabinecie</p>,
                },
              ]}
            />
            <ErrorMessage name="paymentMethod" component={ErrorHint} />
          </div>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="agreement1" />
              <span>
                Akceptuję{" "}
                <a href="/docs/Regulamin.pdf" target="_blank">
                  regulamin serwisu emiliacwojdzinska.pl
                </a>
              </span>
            </label>
            <ErrorMessage name="agreement1" component={ErrorHint} />
          </div>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="agreement2" />
              <span>
                Akceptuję{" "}
                <a href="/docs/Regulamin.pdf" target="_blank">
                  informację o danych osobowych
                </a>
              </span>
            </label>
            <ErrorMessage name="agreement2" component={ErrorHint} />
          </div>
          <div className="button-container">
            <button type="button" className="nav inactive">
              Wstecz
            </button>

            <button
              type="submit"
              className={`nav${dirty && isValid ? "" : " inactive"}`}
              disabled={isSubmitting}
            >
              Dalej
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SummaryForm;

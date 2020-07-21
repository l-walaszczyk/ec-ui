import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorHint from "./ErrorHint";
import SelectField from "./SelectField";

const SummaryForm = ({ step, setStep, selected }) => {
  return (
    <Formik
      initialValues={{
        forSomeoneElse: false,
        firstNameContact: "",
        lastNameContact: "",
        firstNamePatient: "",
        lastNamePatient: "",
        yearOfBirth: "",
        email: "",
        telephone: "",
        paymentMethod: "",
      }}
      validationSchema={Yup.object({
        forSomeoneElse: Yup.boolean(),
        firstNameContact: Yup.string().when("forSomeoneElse", (val, schema) => {
          return val ? schema.required("Wpisz imię") : schema;
        }),

        firstNamePatient: Yup.string().required("Wpisz imię"),
        lastNameContact: Yup.string(),
        lastNamePatient: Yup.string(),
        yearOfBirth: Yup.number()
          .typeError("Rok musi być liczbą")
          // .test(
          //   "len",
          //   "Rok urodzenia powinien być 4-cyfrowy",
          //   (val) => val.toString().length === 4
          // )
          .required("Wpisz rok urodzenia"),
        email: Yup.string()
          .email("Adres email niepoprawny")
          .required("Wpisz adres email"),
        telephone: Yup.string()
          .min(9, "Numer telefonu powinien mieć co najmniej 9 znaków")
          .required("Wpisz numer telefonu"),
        paymentMethod: Yup.string().required("Wybierz sposób płatności"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submitting");
        const finalValues = Object.assign({}, values);

        if (!values.forSomeoneElse) {
          delete finalValues.firstNameContact;
          delete finalValues.lastNameContact;
        }
        setTimeout(() => {
          alert(JSON.stringify(finalValues, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting, isValid, dirty }) => (
        <Form>
          <h2>
            Proszę podaj jeszcze kilka informacji
            <br />
            (wymagane oznaczono *)
          </h2>
          <div className="form-field">
            <label>
              <Field type="checkbox" name="forSomeoneElse" />
              Zaznacz jeśli rezerwujesz termin dla innej osoby (nie dla siebie)
            </label>
          </div>
          {values.forSomeoneElse && (
            <>
              <div className="form-field">
                <Field
                  type="text"
                  name="firstNameContact"
                  placeholder="* Imię osoby kontaktowej"
                />
                <ErrorMessage name="firstNameContact" component={ErrorHint} />
              </div>
              <div className="form-field">
                <Field
                  type="text"
                  name="lastNameContact"
                  placeholder="Nazwisko osoby kontaktowej"
                />
              </div>
            </>
          )}
          <div className="form-field">
            <Field
              type="text"
              name="firstNamePatient"
              placeholder={values.forSomeoneElse ? "* Imię pacjenta" : "* Imię"}
            />
            <ErrorMessage name="firstNamePatient" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="text"
              name="lastNamePatient"
              placeholder={
                values.forSomeoneElse ? "Nazwisko pacjenta" : "Nazwisko"
              }
            />
          </div>
          <div className="form-field">
            <Field
              type="text"
              name="yearOfBirth"
              placeholder={
                values.forSomeoneElse
                  ? "* Rok urodzenia pacjenta"
                  : "* Rok urodzenia"
              }
            />
            <ErrorMessage name="yearOfBirth" component={ErrorHint} />
          </div>
          <div className="form-field">
            <Field
              type="email"
              name="email"
              placeholder={
                values.forSomeoneElse
                  ? "* Adres e-mail os. kontaktowej"
                  : "* Adres e-mail"
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
                  ? "* Numer telefonu os. kontaktowej"
                  : "* Numer telefonu"
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
            {/* <Field
              name="paymentMethod"
              as="select"
              // placeholder="wybierz z listy..."
              value={values.paymentMethod}
            >
              <option value="" disabled>
                wybierz z listy...
              </option>
              <option value="przelewy24">Płatność z góry</option>
              <option value="personally">
                Płatność podczas wizyty w gabinecie
              </option>
            </Field>
            <ErrorMessage name="paymentMethod" component={ErrorHint} /> */}
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

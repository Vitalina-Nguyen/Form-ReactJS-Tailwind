import React from "react";
import style from "./App.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  company: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  region: Yup.string().required("Required"),
  // goal: Yup.string().required('Required'),
  details: Yup.string().required("Required"),
});

function App() {
  return (
    <div>
      <div className={style.formContainer}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            checkboxViaPhone: false,
            region: "",
            // goal: '',
            details: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form className={style.form}>
              <div className={style.inputItem_group}>
                <div className={style.inputItem}>
                  <label className={style.firstNameLabel} htmlFor="firstName">
                    First Name*
                  </label>
                  <Field className={style.firstName} name="firstName" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </div>

                <div className={style.inputItem}>
                  <label className={style.lastNameLabel} htmlFor="lastName">
                    Last Name*
                  </label>
                  <Field className={style.lastName} name="lastName" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </div>

                <div className={style.inputItem}>
                  <label className={style.companyLabel} htmlFor="company">
                    Company*
                  </label>
                  <Field className={style.company} name="company" />
                  {errors.company && touched.company ? (
                    <div>{errors.company}</div>
                  ) : null}
                </div>

                <div className={style.inputItem}>
                  <label className={style.emailLabel} htmlFor="email">
                    Email*
                  </label>
                  <Field className={style.email} name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <label className={style.viaPhoneLabel}>
                <Field
                  className={style.checkboxViaPhone}
                  type="checkbox"
                  name="checkboxViaPhone"
                />
                I would like to be contacted via phone
              </label>

              <div className={style.regionGroup}>
                <div className="regionTitle_wrapper">
                  <div className={style.regionLabel} id="radio-group-region">
                    Choose your economic region*
                  </div>
                  <span className={style.regionInfoBtn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={style.infoSvg}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="orange"
                      className={style.infoSvgOrange}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <div className={style.regionsInfoMassage}>
                      APAC — Asia Pacific;
                      <React.Fragment>
                        <br />
                      </React.Fragment>
                      NA — North America;
                      <React.Fragment>
                        <br />
                      </React.Fragment>
                      EMEA — Europe, the Middle East{" "}
                      <React.Fragment>
                        <br />
                      </React.Fragment>
                      and Africa.
                    </div>
                  </span>
                </div>
                <div role="group" aria-labelledby="radio-group-region">
                  <label>
                    <Field type="radio" name="region" value="APAC" />
                    APAC
                  </label>
                  <label>
                    <Field type="radio" name="region" value="NA" />
                    NA
                  </label>
                  <label>
                    <Field type="radio" name="region" value="EMEA" />
                    EMEA
                  </label>
                  <label>
                    <Field type="radio" name="region" value="Other" />
                    Other
                  </label>
                </div>
              </div>

              {/* <div id="radio-group-goal">What is your goal?*</div>
              <div role="group" aria-labelledby="radio-group-goal" >
                <label>
                  <Field type="radio" name="region" value="Sales Enquiry" />
                  Sales Enquiry
                </label>
                <label>
                  <Field type="radio" name="region" value="Partnership" />
                  Partnership
                </label>
                <label>
                  <Field type="radio" name="region" value="Get support" />
                  Get support
                </label>
                <label>
                  <Field type="radio" name="region" value="Other" />
                  Other
                </label>
              </div> */}

              <label className={style.detailsLabel} htmlFor="details">
                Please give us more details about your request*
              </label>
              <Field as="textarea" className={style.details} name="details" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;

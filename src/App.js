import React from "react";
import style from "./App.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InfoBtnRegion from "./components/InfoBtnRegion/InfoBtnRegion.jsx"
import InfoBtnDetails from "./components/InfoBtnDetails/InfoBtnDetails.jsx"


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
  goal: Yup.string().required('Required'),
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
            goal: "",
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
                    <div className={style.error}>{errors.firstName}</div>
                  ) : null}
                </div>

                <div className={style.inputItem}>
                  <label className={style.lastNameLabel} htmlFor="lastName">
                    Last Name*
                  </label>
                  <Field className={style.lastName} name="lastName" />
                  {errors.lastName && touched.lastName ? (
                    <div className={style.error}>{errors.lastName}</div>
                  ) : null}
                </div>

                <div className={style.inputItem}>
                  <label className={style.companyLabel} htmlFor="company">
                    Company*
                  </label>
                  <Field className={style.company} name="company" />
                  {errors.company && touched.company ? (
                    <div className={style.error}>{errors.company}</div>
                  ) : null}
                </div>

                <div className={style.inputItem}>
                  <label className={style.emailLabel} htmlFor="email">
                    Email*
                  </label>
                  <Field className={style.email} name="email" type="email" />
                  {errors.email && touched.email ? (
                    <div className={style.error}>{errors.email}</div>
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
                <div className={style.regionTitle_wrapper}>
                  <div className={style.regionLabel} id="radio-group-region">
                    Choose your economic region*
                  </div>
                  <InfoBtnRegion />
                </div>
                <div className={style.radioBtn_wrapper} role="group" aria-labelledby="radio-group-region">
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
              <div className={style.goalLabel} id="radio-group-goal">What is your goal?*</div>
              <div className={style.radioBtn_wrapper} role="group" aria-labelledby="radio-group-goal" >
                <label>
                  <Field type="radio" name="goal" value="Sales Enquiry" />
                  Sales Enquiry
                </label>
                <label>
                  <Field type="radio" name="goal" value="Partnership" />
                  Partnership
                </label>
                <label>
                  <Field type="radio" name="goal" value="Get support" />
                  Get support
                </label>
                <label>
                  <Field type="radio" name="goal" value="Other" />
                  Other
                </label>
              </div>
              <InfoBtnDetails />
              <Field as="textarea" className={style.details} name="details" />
              {errors.details && touched.details ? <div className={style.error}>{errors.details}</div> : null}
              <div className={style.submitBtn_wrapper}>
                <button className={style.submitBtn} type="submit">Send request</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;

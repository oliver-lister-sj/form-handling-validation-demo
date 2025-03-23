import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { ContactFormSchemaYup } from "../schema/ContactFormSchema";
import { contactFormInitialValues } from "../lib/ContactFormInitialValues";
import submitData from "../lib/submitData";

const FormikForm = () => {
  // formik recommends use of the Formik HOC instead of useForm hook

  return (
    <Formik
      initialValues={contactFormInitialValues}
      validationSchema={ContactFormSchemaYup}
      onSubmit={submitData}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="form">
          <h2>Formik</h2>
          <Field
            as={TextField}
            id="firstName"
            name="firstName"
            label="First Name"
            error={touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
          />
          <Field
            as={TextField}
            id="lastName"
            name="lastName"
            label="Last Name"
            error={touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
          />
          <Field
            as={TextField}
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            error={touched.phoneNumber && !!errors.phoneNumber}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
          <Field
            as={TextField}
            id="email"
            name="email"
            label="Email"
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;

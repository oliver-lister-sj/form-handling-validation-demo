import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { Button, TextField } from "@mui/material";
import submitData from "../lib/submitData";
import { ContactFormSchemaZod } from "../schema/ContactFormSchema";
import { contactFormInitialValues } from "../lib/ContactFormInitialValues";

const { fieldContext, formContext } = createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    Button,
  },
  fieldContext,
  formContext,
});

const TanstackForm = () => {
  const form = useAppForm({
    defaultValues: contactFormInitialValues,
    validators: {
      onChange: ContactFormSchemaZod,
    },
    onSubmit: submitData,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="form"
    >
      <h2>Tanstack Form</h2>
      {/* Components are bound to `form` and `field` to ensure extreme type safety */}
      {/* Use `form.AppField` to render a component bound to a single field */}
      <form.AppField
        name="firstName"
        children={(field) => (
          <field.TextField
            label="First Name"
            helperText={
              typeof field.state.meta.errors[0] === "object"
                ? field.state.meta.errors[0]["message"]
                : null
            }
            error={Boolean(field.state.meta.errors[0])}
          />
        )}
      />
      <form.AppField
        name="lastName"
        children={(field) => {
          console.log(field.state.meta.errors);
          return (
            <field.TextField
              label="Last Name"
              helperText={
                typeof field.state.meta.errors[0] === "object"
                  ? field.state.meta.errors[0]["message"]
                  : null
              }
              error={Boolean(field.state.meta.errors[0])}
            />
          );
        }}
      />
      <form.AppField
        name="phoneNumber"
        children={(field) => (
          <field.TextField
            label="Phone Number"
            helperText={
              typeof field.state.meta.errors[0] === "object"
                ? field.state.meta.errors[0]["message"]
                : null
            }
            error={Boolean(field.state.meta.errors[0])}
          />
        )}
      />
      <form.AppField
        name="email"
        children={(field) => (
          <field.TextField
            label="Email"
            helperText={
              typeof field.state.meta.errors[0] === "object"
                ? field.state.meta.errors[0]["message"]
                : null
            }
            error={Boolean(field.state.meta.errors[0])}
          />
        )}
      />
      {/* The "name" property will throw a TypeScript error if typo'd  */}
      {/* Components in `form.AppForm` have access to the form context */}
      <form.AppForm>
        <form.Subscribe
          selector={(state) => [state.isSubmitting]}
          children={([isSubmitting]) => (
            <form.Button type="submit" variant="contained">
              {isSubmitting ? "Submitting..." : "Submit"}
            </form.Button>
          )}
        />
      </form.AppForm>
    </form>
  );
};

export default TanstackForm;

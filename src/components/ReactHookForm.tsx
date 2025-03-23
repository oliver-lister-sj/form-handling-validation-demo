import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormDataZod,
  ContactFormSchemaZod,
} from "../schema/ContactFormSchema";

const ReactHookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormDataZod>({
    resolver: zodResolver(ContactFormSchemaZod),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
  });

  // very handy formState methods like isSubmitting with removes the need for isLoading state.
  // or isLoading when the defaultValues are async data.

  const submitData = async (values: ContactFormDataZod) => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log(values);
        resolve();
      }, 1000)
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit(submitData)}>
      <h2>React Hook Form</h2>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="firstName"
            label="First Name"
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="lastName"
            label="Last Name"
            variant="outlined"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />
      <Button type="submit" variant="contained">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ReactHookForm;

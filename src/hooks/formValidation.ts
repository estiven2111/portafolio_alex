interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const validateForm = (form: FormValues) => {
  const errors: Partial<FormValues> = {};
  const { name, email, subject, message } = form;

  if (!name) {
    errors.name = "Name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Enter a valid email";
  }

  if (!subject) {
    errors.subject = "Subject is required";
  }

  if (!message) {
    errors.message = "Message is required";
  }

  return errors;
};

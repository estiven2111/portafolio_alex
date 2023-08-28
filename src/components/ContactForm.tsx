import { useState, useEffect } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { validateForm } from "../hooks/formValidation";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const API =
  "https://sheet.best/api/sheets/628867f2-399c-469d-b25a-e2af9990fb69";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setErrors(validateForm(form));
  }, [form]);

  const isFormValid = () => Object.keys(errors).length === 0;

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (!isFormValid()) return;

    axios
      .post(`${API}`, form)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Perfecto.",
          text: "Tu mensaje fue enviado!",
        });
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) =>
        Swal.fire({
          icon: "success",
          title: "Perfecto.",
          text: "Tu mensaje fue enviado!",
        })
      );
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={submitHandler}>
        <div className="my-3">
          <div className="md:py-2">
            <label className="text-xl " htmlFor="name">
              Nombre <span className="text-fuchsia-600">*</span>
            </label>
          </div>
          <div>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
        </div>
        <div className="my-3">
          <div className="md:py-2">
            <label className="text-xl " htmlFor="email">
              Correo <span className="text-fuchsia-600">*</span>
            </label>
          </div>
          <div>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
        </div>
        <div className="my-3">
          <div className="md:py-2">
            <label className="text-xl " htmlFor="subject">
              Titulo <span className="text-fuchsia-600">*</span>
            </label>
          </div>
          <div>
            <input
              className="input"
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <div className="text-red-500">{errors.subject}</div>
            )}
          </div>
        </div>
        <div className="my-3">
          <div className="md:py-2">
            <label className="text-xl " htmlFor="message">
              Mensaje <span className="text-fuchsia-600">*</span>
            </label>
          </div>
          <div className="mt-2 ">
            <textarea
              className="w-full px-5 border-2 outline-none bg-transparent dark:focus:border-fuchsia-600 focus:border-fuchsia-700 duration-300 dark:focus:text-white dark:bg-transparent border-black dark:border-neutral-300 rounded-lg md:h-16å md:text-xl  dark:border-opacity-50 border-opacity-50 py-2"
              rows={4}
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className="text-red-500">{errors.message}</div>
            )}
          </div>
        </div>
        <div className="my-5">
          <button
            className={`btn w-full text-xl ${
              Object.keys(errors).length !== 0
                ? "opacity-50 cursor-not-allowed"
                : null
            }`}
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
           Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

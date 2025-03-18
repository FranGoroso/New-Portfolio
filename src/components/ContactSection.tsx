import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_KEY);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      text: "Gracias por contactarme. Te responderé pronto!",
      confirmButtonText: "Cerrar",
    });
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section className="flex justify-center items-center py-12 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contáctame
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              placeholder="Tu correo electrónico"
            />
            <ValidationError prefix="Correo" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm h-28 resize-none"
              placeholder="Escribe tu mensaje"
            ></textarea>
            <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            disabled={state.submitting}
          >
            {state.submitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

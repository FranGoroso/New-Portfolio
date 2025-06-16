import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, Compass, AtSign, Calendar, Sparkles, Phone, Globe, Clock3 } from "lucide-react";
import { useScrollAnimation, fadeIn, slideUp } from "../hooks/useScrollAnimation";

const ContactForm = () => {
  const formKey = import.meta.env.VITE_FORM_KEY || "YOUR_FORMSPREE_FORM_ID";
  const [state, handleSubmit] = useForm(formKey);
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme. Te responderé lo antes posible.",
        confirmButtonText: "Genial",
        confirmButtonColor: "#f47e20",
        background: document.documentElement.classList.contains('dark') ? '#1a1a1a' : '#ffffff',
        color: document.documentElement.classList.contains('dark') ? '#f5f5f3' : '#2a2a2a',
      }).then(() => {
        setFormData({ name: "", email: "", message: "" });
      });
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: Compass,
      title: "Ubicación Global",
      content: "Encamp, Andorra",
      description: "Disponible para trabajo remoto",
      gradient: "from-primary-500 to-primary-700"
    },
    {
      icon: AtSign,
      title: "Contacto Directo",
      content: "contacto@frangoroso.com",
      description: "Respuesta en 24 horas",
      gradient: "from-accent-500 to-accent-700"
    },
    {
      icon: Calendar,
      title: "Disponibilidad",
      content: "Lun - Vie",
      description: "9:00 - 18:00 (CET)",
      gradient: "from-secondary-500 to-secondary-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 dark:bg-accent-900/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            {...fadeIn}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Mail className="text-primary-600 dark:text-primary-400" size={40} />
              <span className="gradient-text">Contáctame</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escucharte
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info - New Design */}
            <motion.div
              {...slideUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Construyamos algo increíble juntos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Siempre estoy buscando nuevos desafíos y oportunidades para crear soluciones innovadoras.
                </p>

                {/* Contact cards - New Style */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-300">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{info.title}</h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">{info.content}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional contact methods */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    También puedes encontrarme en:
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="tel:+376123456"
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-dark-700 rounded-xl hover:bg-neutral-200 dark:hover:bg-dark-600 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Llamar</span>
                    </a>
                    <a
                      href="https://frangoroso.com"
                      className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-dark-700 rounded-xl hover:bg-neutral-200 dark:hover:bg-dark-600 transition-colors"
                    >
                      <Globe className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Website</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Response time card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <Clock3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Respuesta rápida garantizada
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Normalmente respondo en menos de 24 horas
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...slideUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="relative"
            >
              <div className="relative bg-white dark:bg-dark-800 p-8 rounded-3xl shadow-xl">
                
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nombre
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === 'name' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                        focusedField === 'email' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'
                      }`} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <ValidationError prefix="Correo" field="email" errors={state.errors} />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-3 top-3 w-5 h-5 transition-colors ${
                        focusedField === 'message' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>
                    <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl shadow-lg overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {state.submitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar mensaje
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

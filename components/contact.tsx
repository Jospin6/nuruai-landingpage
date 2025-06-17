"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import emailjs from "emailjs-com"

const SERVICE_ID = "service_jqloo7b"
const TEMPLATE_ID = "template_i4v6fk2"
const USER_ID = "D1AqMBUddqJ1836a6"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    setErrors((prev) => ({ ...prev, [id]: "" }))
  }

  const validate = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
      budget: "",
    }

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof typeof newErrors] = "Ce champ est requis"
        valid = false
      }
    })

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        budget: formData.budget,
      }),
    });

    if (res.ok) {
      alert("Mail envoyé avec succès !");
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "", budget: "" })
    } else {
      alert("Erreur lors de l'envoi.");
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à transformer votre entreprise avec l'IA ? Parlons de vos besoins.
          </p>
        </motion.div>

        <div className=" flex justify-center lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 md:w-2/4 w-full backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom Complet
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jospin Ndagano"
                    className="bg-black/60 border-white/10 text-white"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jospinndagano1@gmail.com"
                    className="bg-black/60 border-white/10 text-white"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Accompagnement sur l'IA"
                  className="bg-black/60 border-white/10 text-white"
                />
                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Comment pouvons-nous vous aider ?
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Détaillez votre projet"
                  rows={5}
                  className="bg-black/60 border-white/10 text-white"
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Votre budget
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-[42px] px-4 text-sm text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-lg focus:outline-none focus:border-purple-500/70 transition duration-300 appearance-none"
                >
                  <option className="bg-black text-white" value="">Sélectionnez un budget</option>
                  <option className="bg-black text-white" value="Moins de 500">Moins de 500$</option>
                  <option className="bg-black text-white" value="500-1000">500$ - 1 000$</option>
                  <option className="bg-black text-white" value="1000-5000">1 000$ - 5 000$</option>
                  <option className="bg-black text-white" value="5000-10000">5 000$ - 10 000$</option>
                  <option className="bg-black text-white" value="10000+">10 000$ +</option>
                </select>
                {errors.budget && <p className="text-sm text-red-500 mt-1">{errors.budget}</p>}
              </div>

              <Button type="submit" className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white rounded-xl py-6`} disabled={loading}>
                {loading ? "Loading..." : "Envoyer le message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

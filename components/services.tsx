"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bot, LineChart, Database } from "lucide-react"

const services = [
  {
    title: "Création d'Agents IA",
    description:
      "Chatbots, systèmes CRM IA, automatisation des flux de travail pour optimiser vos opérations quotidiennes.",
    icon: Bot,
    color: "from-purple-500 to-blue-500",
    delay: 0.2,
  },
  {
    title: "Audit & Stratégie IA",
    description: "Évaluation complète et stratégie d'implémentation IA pour les petites et moyennes entreprises.",
    icon: LineChart,
    color: "from-blue-500 to-cyan-400",
    delay: 0.4,
  },
  {
    title: "Tableaux de Bord IA Personnalisés",
    description:
      "Visualisations de données interactives et tableaux de bord pour une automatisation basée sur les données.",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    delay: 0.6,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des solutions d'IA de pointe pour transformer votre entreprise et stimuler votre croissance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              {/* <div className="mt-6 flex items-center text-purple-400 font-medium">
                <span>En savoir plus</span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

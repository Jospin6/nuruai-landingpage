"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Starter",
    price: "99€",
    period: "/mois",
    description: "Idéal pour les petites entreprises qui débutent avec l'IA",
    features: [
      "1 automatisation simple",
      "Support par email",
      "Mises à jour mensuelles",
      "Tableau de bord basique",
      "1 utilisateur",
    ],
    cta: "Commencer",
    color: "from-purple-600 to-blue-600",
    delay: 0.2,
    popular: false,
  },
  {
    name: "Pro",
    price: "149€",
    period: "/mois",
    description: "Pour les entreprises qui cherchent à optimiser leurs processus",
    features: [
      "Automatisation personnalisée",
      "Tableau de bord personnalisé",
      "Support prioritaire",
      "Mises à jour hebdomadaires",
      "5 utilisateurs",
    ],
    cta: "Commencer",
    color: "from-blue-600 to-purple-600",
    delay: 0.4,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    period: "",
    description: "Solution complète pour les grandes entreprises",
    features: [
      "Suite IA complète",
      "Support dédié 24/7",
      "Intégrations personnalisées",
      "Déploiement sur site disponible",
      "Utilisateurs illimités",
    ],
    cta: "Contacter",
    color: "from-purple-600 to-pink-600",
    delay: 0.6,
    popular: false,
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    // <section id="pricing" className="py-20 relative overflow-hidden">
    //   {/* Background elements */}
    //   <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    //     <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl" />
    //     <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl" />
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     <motion.div
    //       ref={ref}
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : { }}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-16"
    //     >
    //       <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
    //         Tarifs Transparents
    //       </h2>
    //       <p className="text-xl text-gray-300 max-w-3xl mx-auto">
    //         Choisissez le plan qui correspond le mieux aux besoins de votre entreprise
    //       </p>
    //     </motion.div>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {pricingPlans.map((plan, index) => (
    //         <motion.div
    //           key={index}
    //           initial={{ opacity: 0, y: 30 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : {  }}
    //           transition={{ duration: 0.6, delay: plan.delay }}
    //           className={`relative bg-black/40 backdrop-blur-lg border ${
    //             plan.popular ? "border-purple-500/50" : "border-white/10"
    //           } rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group ${
    //             plan.popular ? "md:-mt-4 md:mb-4" : ""
    //           }`}
    //         >
    //           {plan.popular && (
    //             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
    //               Populaire
    //             </div>
    //           )}
    //           <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
    //           <div className="flex items-end mb-6">
    //             <span className="text-4xl font-bold text-white">{plan.price}</span>
    //             <span className="text-gray-400 ml-1">{plan.period}</span>
    //           </div>
    //           <p className="text-gray-300 mb-6">{plan.description}</p>
    //           <ul className="space-y-3 mb-8">
    //             {plan.features.map((feature, i) => (
    //               <li key={i} className="flex items-start">
    //                 <div
    //                   className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-1`}
    //                 >
    //                   <Check size={12} className="text-white" />
    //                 </div>
    //                 <span className="ml-3 text-gray-300">{feature}</span>
    //               </li>
    //             ))}
    //           </ul>
    //           <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white rounded-xl py-6`}>
    //             {plan.cta}
    //           </Button>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section id="whyuse" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Pourquoi nous choisir
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez pourquoi de plus en plus d’entreprises font confiance à <strong>nuruAI</strong> pour automatiser leurs workflows intelligemment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Automatisation intelligente",
              description:
                "nuruAI utilise les dernières avancées en intelligence artificielle pour automatiser vos processus métier, vous faisant gagner un temps précieux sans compromettre la qualité.",
            },
            {
              title: "Solutions personnalisées",
              description:
                "Nous adaptons nos outils à vos besoins spécifiques. Peu importe votre secteur, nos solutions sur mesure s’intègrent facilement à vos systèmes existants.",
            },
            {
              title: "Support dédié et expertise IA",
              description:
                "Recevez un accompagnement clair à chaque étape. Notre équipe maîtrise l’IA et vous aide à transformer vos idées en solutions concrètes.",
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 text-white group hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <details className="text-gray-300 cursor-pointer group-open:mt-2">
                <summary className="cursor-pointer text-purple-400 hover:underline text-sm">En savoir plus</summary>
                <p className="mt-3 text-sm">{reason.description}</p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  )
}

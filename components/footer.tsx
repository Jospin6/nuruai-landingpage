"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Cpu } from "lucide-react"
import emailjs from '@emailjs/browser'
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubscribe = async () => {
    setError('')
    setSuccess('')
    console.log(email)

    if (!email || !email.includes('@')) {
      setError("Entrez un email valide")
      return
    }

    try {
      const result = await emailjs.send(
        'service_jqloo7b',
        'template_6tg25l4',
        { 
          email: email,
        },
        'D1AqMBUddqJ1836a6'
      )
      console.log(result.text)
      setSuccess("Merci ! Vous recevrez nos actus IA très bientôt.")
      setEmail('')
    } catch (err) {
      console.log(err)
      setError("Une erreur est survenue. Réessayez plus tard.")
    }
  }

  return (
    <footer className="pt-20 pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold text-white flex items-center mb-6">
              <span className="text-purple-500">Nuru</span>
              <span className="text-blue-400">AI</span>
            </a>
            <p className="text-gray-300 mb-6">
              Solutions d'IA innovantes pour automatiser et transformer votre entreprise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Création d'Agents IA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Audit & Stratégie IA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tableaux de Bord IA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Intégration IA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">Abonnez-vous pour recevoir les dernières actualités sur l'IA</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/60 border-white/10 text-white" />
              <Button onClick={handleSubscribe} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} NuruAI. Tous droits réservés.</p>
          <div className="flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
              className="mr-2"
            >
              <Cpu size={18} className="text-purple-500" />
            </motion.div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

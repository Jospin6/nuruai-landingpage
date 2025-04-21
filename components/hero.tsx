"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
// import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import * as THREE from "three"
import Link from "next/link"

function AIModel() {
  // const group = useRef()

  // useFrame((state) => {
  //   if (group.current) {
  //     group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05)
  //     group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05)
  //   }
  // })

  return (
    <group >
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial color="#4c00b0" emissive="#310080" roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.2, 16, 100]} />
          <meshStandardMaterial color="#00a3ff" emissive="#0077ff" roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.2, 16, 100]} />
          <meshStandardMaterial color="#ff00aa" emissive="#ff0066" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {/* <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AIModel />
          <Environment preset="night" />
        </Canvas> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                Automatisez Tout avec l'IA. Sans Effort.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transformez votre entreprise avec des solutions d'IA personnalisées qui automatisent vos processus et
              stimulent votre croissance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href={"#contact"}>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg">
              Démarrez votre automatisation dès maintenant
              </Button>
            </Link>

            <Link href={"#services"}>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-950/30 rounded-full px-8 py-6 text-lg"
              >
                Découvrir Nos Services
              </Button>
            </Link>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

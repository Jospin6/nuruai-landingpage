import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import WhyUs from "@/components/whyUs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}

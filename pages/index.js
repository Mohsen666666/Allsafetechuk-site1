import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Mail, Phone, ShieldCheck, Cpu, Zap } from "lucide-react"; import Image from "next/image";

export default function HomePage() { return ( <main className="min-h-screen bg-white text-gray-800"> <header className="bg-gradient-to-r from-blue-600 via-green-500 to-red-500 text-white py-6 px-4 shadow-md"> <div className="max-w-6xl mx-auto flex justify-between items-center"> <div className="flex items-center gap-3"> <Image src="/logo-full-shield.png" alt="AllSafeTechUK Logo" width={48} height={48} /> <h1 className="text-3xl font-bold">AllSafeTechUK</h1> </div> <nav className="space-x-6 text-lg"> <a href="#services" className="hover:underline">Services</a> <a href="#about" className="hover:underline">About</a> <a href="#contact" className="hover:underline">Contact</a> </nav> </div> </header>

<section className="text-center py-20 bg-gray-50">
    <Image src="/logo-altuk.png" alt="ALTUK Logo" width={80} height={80} className="mx-auto mb-6" />
    <h2 className="text-4xl font-bold mb-4 text-blue-700">Smart. Secure. Connected.</h2>
    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
      AllSafeTechUK delivers smart security systems, networking solutions, and electrical infrastructure tailored for homes and businesses across the UK.
    </p>
    <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">Request a Quote</Button>
  </section>

  <section id="services" className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card>
      <CardContent className="text-center py-6">
        <ShieldCheck className="mx-auto text-red-500" size={36} />
        <h3 className="text-xl font-semibold mt-4">Security Systems</h3>
        <p className="text-sm mt-2 text-gray-600">Advanced CCTV, alarm, and access control installations that protect what matters most.</p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="text-center py-6">
        <Cpu className="mx-auto text-green-500" size={36} />
        <h3 className="text-xl font-semibold mt-4">IT & Networking</h3>
        <p className="text-sm mt-2 text-gray-600">Structured cabling and network setups for seamless business operations and smart homes.</p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="text-center py-6">
        <Zap className="mx-auto text-blue-500" size={36} />
        <h3 className="text-xl font-semibold mt-4">Electrical Installations</h3>
        <p className="text-sm mt-2 text-gray-600">Certified electrical work for residential and commercial spaces — safe, efficient, and modern.</p>
      </CardContent>
    </Card>
  </section>

  <section id="about" className="bg-gray-100 py-16 px-4 text-center">
    <h3 className="text-3xl font-bold mb-4">About Us</h3>
    <p className="max-w-3xl mx-auto text-lg text-gray-700">
      At AllSafeTechUK, we combine years of experience with the latest technology to deliver reliable and smart safety and tech infrastructure solutions. We take pride in protecting homes and businesses through innovation and service.
    </p>
  </section>

  <section id="contact" className="py-16 px-4 bg-white">
    <div className="max-w-xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-2 justify-center text-gray-700">
          <Mail /> info@allsafetechuk.com
        </div>
        <div className="flex items-center gap-2 justify-center text-gray-700">
          <Phone /> +44 7123 456789
        </div>
      </div>
      <form className="mt-8 space-y-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Input placeholder="Your Message" className="h-24" />
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">Send Message</Button>
      </form>
    </div>
  </section>

  <footer className="text-center py-6 text-sm bg-gray-100 text-gray-500">
    <Image src="/logo-altuk.png" alt="ALTUK Mini Logo" width={36} height={36} className="mx-auto mb-2" />
    &copy; {new Date().getFullYear()} AllSafeTechUK. All rights reserved.
  </footer>
</main>

); }


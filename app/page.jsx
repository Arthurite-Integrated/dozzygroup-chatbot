"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube, MapPin, CheckCircle } from 'lucide-react'
import Logo from '@/app/dozzygroup-logo.png'
import Hero from '@/public/hero.jpg'
import OilStorage from '@/public/OilStorage.png'
import OilPowerFlo from '@/public/OilPowerFlo.webp'
import Ship from '@/public/Ship.webp'
import Power from '@/public/Power.webp'
import Dozzy2 from '@/public/dozzy-logo-2.png'
import Guttrof from '@/public/guttrof.png'
import Specialty from '@/public/speciality.png'
import TempoGate from '@/public/tempogate.png'
import Ugo from '@/public/ugo.png'




export default function Home() {
  return (
  
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#282834] text-white py-2 px-4 flex justify-end items-center">
        <div className="container mx-auto flex justify-end items-center">
          <div className="flex items-center">
            <span className="mr-4 text-sm flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-yellow-400" />
              info@dozzygroup.com
            </span>
            <div className="flex space-x-3">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Dozzy Group Logo" width={150} height={60} className="h-16 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              Home
            </Link>
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              About
            </Link>
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              Expertise
            </Link>
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              Our Companies
            </Link>
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              CSR
            </Link>
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              Health And Safety
            </Link>
            <Link href="/" className="text-gray-800 hover:text-[#0088cc] font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image src={Hero} alt="Industrial shipping yard at night" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-semibold text-white max-w-4xl leading-tight">
            Redefining the Future
            <br />
            through Innovation and
            <br />
            Creativity
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/read-more"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition"
            >
              Read More
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#5bc0de] text-white font-medium rounded hover:bg-[#4babc9] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          <button className="w-3 h-3 rounded-full bg-white"></button>
          <button className="w-3 h-3 rounded-full bg-white/50"></button>
          <button className="w-3 h-3 rounded-full bg-white/50"></button>
        </div>
      </section>

      {/* Blue Banner */}
      <section className="bg-[#5bc0de] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="text-white text-xl md:text-2xl font-medium">
            Welcome to the future of limitless possibilities
          </h2>
          <Link
            href="/read-more"
            className="px-6 py-3 bg-[#282834] text-white font-medium rounded hover:bg-gray-800 transition"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 text-center scroll-animation duration-1000">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold mb-8">
            We exist to help meet the needs of a rapidly changing Africa.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our core dealings began and still lie in the importation of products for sale from Europe and Asia into Nigeria.
            However, Dozzy Group has diversified successfully into different strains of businesses. These include real estate,
            hospitality, manufacturing and oil and gas services.
          </p>
        </div>
      </section>

       {/* Backbone Section */}
       <section className="py-32 bg-cover bg-center relative scroll-animation  duration-1000" style={{ backgroundImage: "url('/worker.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-semibold text-white mb-8 max-w-4xl mx-auto">
            We are the backbone of the development-focused industry with major operations in Africa.
          </h2>
          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-[#5bc0de] text-white font-medium rounded hover:bg-[#4babc9] transition"
          >
            Read More
          </Link>
        </div>
      </section>


      {/* Dozzy Oil and Gas Section */}
      <section className="py-16 scroll-animation duration-1000">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#4babc9] mb-4">
                Dozzy
                <br />
                Oil and Gas
              </h2>
              <div className="w-12 h-1 mb-6"></div>
              <p className="text-gray-700 mb-6">
                Since its incorporation in 1994, Dozzy Oil and Gas Ltd has followed a consistent
                and well-thought out plan, enabling us strategically place ourselves in a position to
                lead the downstream sector of the country&apos;s oil and gas industry.
              </p>
              <Link
                href="/oil-and-gas"
                className="inline-block px-6 py-3 bg-[#282834] text-white font-medium rounded hover:bg-gray-800 transition"
              >
                Read More
              </Link>
            </div>
            <div>
              <Image 
                src={OilStorage}
                alt="Oil storage tanks" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dozzy Powerflo Section */}
      <section className="py-16 bg-gray-100 scroll-animation duration-1000">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image 
                src={OilPowerFlo}
                alt="Oil pouring" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-semibold text-[#4babc9] mb-4">
                Dozzy Powerflo
              </h2>
              <div className="w-12 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-6">
                A key ancillary component to Dozzy Group service is the production and supply of
                lubricants to consumers across the globe. Our offering includes a range of lubricants
                through retail, wholesale and industrial market channels. In line with quality
                assurance, our selected distributors include partners in key locations to provide the
                full range of customer requirements.
              </p>
              <Link
                href="/powerflo"
                className="inline-block px-6 py-3 bg-[#282834] text-white font-medium rounded hover:bg-gray-800 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dozztephan Section */}
      <section className="py-16 scroll-animation duration-1000">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#4babc9] mb-4">
                Dozztephan
              </h2>
              <div className="w-12 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-6">
                Dozztephan Industries Ltd was incorporated as a limited liability company in
                October 2008. However operations started in 2011. Prior to the ban on importation
                of packaged ready-to-drink juice into the country by the Federal Government in
                2002, PIKO juice was imported by Dozzy Nigeria from Junet Industries, Lebanon.
              </p>
              <Link
                href="/dozztephan"
                className="inline-block px-6 py-3 bg-[#282834] text-white font-medium rounded hover:bg-gray-800 transition"
              >
                Read More
              </Link>
            </div>
            <div>
              <Image 
                src={Ship}
                alt="Juice production line" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dozzy Integrated Power Section */}
      <section className="py-16 bg-gray-100 scroll-animation duration-1000">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image 
                src={Power}
                alt="Power transmission lines" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-semibold text-[#4babc9] mb-4">
                Dozzy Integrated Power
              </h2>
              <div className="w-12 h-1 bg-black mb-6"></div>
              <p className="text-gray-700 mb-6">
                In March 2014, Dozzy Integrated Power Limited emerged as the Preferred Bidder for
                the takeover of the Federal Government of Nigeria&apos;s stake in the 380MW Egbema
                Power generating plant at the price USD415M (Four Hundred and Fifteen Million US
                Dollar).
              </p>
              <Link
                href="/integrated-power"
                className="inline-block px-6 py-3 bg-[#282834] text-white font-medium rounded hover:bg-gray-800 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Facts and Figures Section */}
      <section className="py-16 bg-gray-800 text-white relative scroll-animation duration-1000">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(/figures.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-8">
            <CheckCircle className="w-16 h-16 text-yellow-400 mr-4" />
            <div>
              <h2 className="text-4xl font-semibold text-[#5bc0de]">
                Dozzy in numbers,
              </h2>
              <h3 className="text-4xl font-semibold">Facts And Figures.</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-4">200,000mT</h3>
              <p className="text-sm">metric tons, combined capacity of our oil storage facility</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-4">3,600mT</h3>
              <p className="text-sm">metric tons of biscuits per annum, produced by plant at max capacity</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-4">1980s</h3>
              <p className="text-sm">Started as a trading company, Dozzy Group subsidiaries added as it grew</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-4">300+</h3>
              <p className="text-sm">Employees of culturally diverse backgrounds from around the world</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-4">500,000+</h3>
              <p className="text-sm">Plant capacity for bottling LPG cylinders per annum</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-semibold mb-4">100%</h3>
              <p className="text-sm">committed to statement of principles. Good business ethics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16 bg-white scroll-animation  duration-1000">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src={Dozzy2} alt="Dozzy Logo" width={150} height={80} className="h-20 w-auto" />
            <Image src={Specialty} alt="Specialty Oil Logo" width={150} height={80} className="h-20 w-auto" />
            <Image src={Guttrof} alt="Guttrof Logo" width={150} height={80} className="h-20 w-auto" />
            <Image src={TempoGate} alt="Tempogate Logo" width={150} height={80} className="h-20 w-auto" />
            <Image src={Ugo} alt="UGO Hannah Logo" width={150} height={80} className="h-20 w-auto" />
          </div>
        </div>
      </section>

      {/* Mission and Vision Grid Section */}
      <section className="py-16 scroll-animation duration-1000">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-2 bg-cover bg-center h-80 relative">
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="text-xl font-semibold mb-2 relative z-10 pt-32 p-6 text-white">
            Dozzy aims to be a leading diversified international contractor in the Middle East and Africa.
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-semibold mb-2">Mission and Vision</h3>
            <Link href="/mission" className="text-white hover:text-[#5bc0de]">Read More</Link>
          </div>
        </div>
            
            <div className="bg-cover bg-center h-80 relative" style={{ backgroundImage: `url(/Chairman.png)` }}>
            <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">From the Chairman's Desk</h3>
                <Link href="/mission" className="text-white hover:text-[#5bc0de]">Read More</Link>
              </div>
            </div>
            
            <div className="bg-cover bg-center h-80 relative" style={{ backgroundImage: `url(/arrow.png)` }}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">Social Responsibility</h3>
                <Link href="/csr" className="text-white hover:text-[#5bc0de]">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Call Back Section */}
      <section className="py-16 bg-[#282834] text-white scroll-animation  duration-1000">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-yellow-400 mb-4">Request a call back.</h2>
          <p className="mb-8">
            Would you like to speak to us? Just submit your details and we&apos;ll be in 
            touch shortly. You can also email us if you would prefer.
          </p>
          
          <form className="max-w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#5bc0de]"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#5bc0de]"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#5bc0de]"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#5bc0de]"
              />
            </div>
            <textarea 
              placeholder="Your message" 
              rows={4}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#5bc0de] mb-4"
            ></textarea>
            <button 
              type="submit"
              className="px-6 py-3 bg-[#5bc0de] text-white font-medium rounded hover:bg-[#4babc9] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#282834] text-white pt-16 pb-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">A bit about Dozzy Group</h3>
              <p className="text-gray-400 mb-4">
                Our core dealings began and still lie in the importation of
                products for sale from Europe and Asia into Nigeria. However,
                Dozzy Group has diversified successfully into different strains of
                businesses. These include real estate, hospitality, manufacturing
                and oil and gas services. As a group, our primary aim is to
                enhance production of the assets we operate and maximize
                recovery factors.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-2 bg-[#5bc0de] text-white font-medium rounded hover:bg-[#4babc9] transition"
              >
                Read More
              </Link>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-[#5bc0de]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#5bc0de]">About</Link></li>
                <li><Link href="/expertise" className="hover:text-[#5bc0de]">Expertise</Link></li>
                <li><Link href="/companies" className="hover:text-[#5bc0de]">Our companies</Link></li>
                <li><Link href="/csr" className="hover:text-[#5bc0de]">CSR</Link></li>
                <li><Link href="/foundation" className="hover:text-[#5bc0de]">Dozzy Foundation</Link></li>
                <li><Link href="/health-safety" className="hover:text-[#5bc0de]">Health and Safety</Link></li>
                <li><Link href="/contact" className="hover:text-[#5bc0de]">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-4">
                In realization that business is not all about profit making,
              </p>
              <p className="text-[#5bc0de] font-semibold mb-4">info@dozzygroup.com</p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-[#5bc0de] text-white font-medium rounded hover:bg-[#4babc9] transition mb-6"
              >
                Get In Touch
              </Link>
              
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-[#5bc0de]">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white hover:text-[#5bc0de]">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white hover:text-[#5bc0de]">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white hover:text-[#5bc0de]">
                  <MapPin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-sm text-gray-400">
            <p>Copyright © 2025 Dozzy Group. All right reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

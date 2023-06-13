"use client"; // This is a client component 👈🏽

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaHamburger } from 'react-icons/fa';
import { AiFillBehanceSquare, AiFillDribbbleSquare, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



// Component for Header
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 bg-black py-4 scroll-smooth">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href='/'><Image src="/logo.png" alt="Logo" width={75} height={75} /></Link>
        <div className="hidden md:block">
          <Link href="#projects" className="text-white hover:text-[#ccc] px-4">Projects</Link>
          <Link href="#about" className="text-white hover:text-[#ccc] px-4">About Me</Link>
          <Link href="#contact" className="text-white hover:text-[#ccc] px-4">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black text-white p-4">
            <Link href="#projects" className="block py-2" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#about" className="block py-2" onClick={() => setIsOpen(false)}>About Me</Link>
            <Link href="#contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
};

// Component for Hero Section
const Hero = () => (
  <motion.div className=" mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-12 gradient-bg min-h-[100vh]">
    <motion.div className="flex-1 w-[90%] mx-auto md:w-full" {...headContainerAnimation}>
      <h2 className="text-3xl lg:text-5xl text-black mb-6 font-bold" {...headTextAnimation}>Hi, I'm Luca!</h2>
      <p className="text-xl text-black mb-6" {...headContentAnimation}>I'm a front-end developer and UX/UI designer, currently working at <span className='italic'>Luxury Presence.</span></p>
      <motion.div className='flex flex-wrap justify-start items-center gap-2'>
        <a href="#projects" className="button-1 text-black">Discover My Projects</a>
        <a href="#contact" className="button-1 text-black">Reach Me Out</a>
      </motion.div>
    </motion.div>
    <motion.div className="flex-1 w-full" {...headContentAnimation}>
      <div className='w-5/6 hidden md:block h-screen left-hero'></div>
    </motion.div>
  </motion.div>
)

// Component for Projects Section
const Projects = () => (
  <div className="container mx-auto py-12 other-bg" id='projects'>
    <h2 className="text-4xl font-medium text-black mb-6 text-center">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      {/* Project 1 */}
      <a href="https://librecripto.com" target="_blank" rel="noopener noreferrer" className="group block">
        <Image src="/project-1.jfif" alt="Project 1" width={1920} height={1080} className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] rounded md:grayscale-[70%] md:group-hover:grayscale-0 transition-all ease-in-out' />
        <div className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] mt-4 border-t border-black'>
          <p className='text-xs text-black mt-2'>2021-2023</p>
          <h3 className="text-2xl text-black font-bold ">LibreCripto</h3>
          <p className='text-sm text-black'>A website created with the purpose of helping people to trade their criptocurrencies online. I was responsible from the initial design to the final development.</p>
        </div>
      </a>
      {/* Project 2 */}
      <a href="/Case-Study-Petly.pdf" target="_blank" rel="noopener noreferrer" className="group block">
        <Image src="/project-2.jpg" alt="Project 2" width={1920} height={1080} className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] rounded md:grayscale-[70%] md:group-hover:grayscale-0 transition-all ease-in-out' />
        <div className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] mt-4 border-t border-black'>
          <p className='text-xs text-black mt-2'>2023</p>
          <h3 className="text-2xl text-black font-bold">Petly</h3>
          <p className='text-sm text-black'>Third and final project from Google UX course. It's a mobile app and a responsive website designed from scratch to refined mockups for me using Figma and going over all the UX design process.</p>
        </div>
      </a>
      {/* Project 3 */}
      <a href="/Case-Study-Find-A-Rent.pdf" target="_blank" rel="noopener noreferrer" className="group block">
        <Image src="/project-3.jpg" alt="Project 3" width={1920} height={1080} className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] rounded md:grayscale-[70%] md:group-hover:grayscale-0 transition-all ease-in-out' />
        <div className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] mt-4 border-t border-black'>
          <p className='text-xs text-black mt-2'>2023</p>
          <h3 className="text-2xl text-black font-bold">Find-A-Rent</h3>
          <p className='text-sm text-black'>Second project from Google UX course. It's a responsive website designed from scratch to refined mockups for me using Adobe XD and going over all the UX design process.</p>
        </div>
      </a>
      {/* Project 4 */}
      <a href="/Case-Study-Steakhouse-App.pdf" target="_blank" rel="noopener noreferrer"  className="group block">
        <Image src="/project-4.jpg" alt="Project 4" width={1920} height={1080} className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] rounded md:grayscale-[70%] md:group-hover:grayscale-0 transition-all ease-in-out' />
        <div className='max-w-[90%] md:w-full mx-auto md:mx-[inherit] mt-4 border-t border-black'>
          <p className='text-xs text-black mt-2'>2022</p>
          <h3 className="text-2xl text-black font-bold">The Steakhouse App</h3>
          <p className='text-sm text-black'>First project from Google UX course. It's a mobile app designed from scratch to refined mockups for me using Figma and going over all the UX design process.</p>
        </div>
      </a>
      {/* Other projects */}
    </div>
  </div>
)

// Component for About Section
const About = () => (
  <div className=" bg-black" id="about">
    <div className='container mx-auto py-12'>
    <h2 className="text-4xl text-center font-medium text-white mb-6">About Me</h2>
    <div className='flex flex-col md:flex-row mx-auto max-w-[80%] items-center justify-between gap-10 mt-2'>
    <Image src="/about-pic3.jpg" alt="Mine pic" width={1920} height={1080} className='max-w-[250px] md:w-full rounded' />
    <div className='flex flex-wrap gap-6'>
      <p className='max-w-[90%] md:max-w-full text-center md:text-start'>
      I've loved building websites since my childhood. It all started when I was playing Club Penguin, an online game for which I built a fan blog in 2012.
      Back on those times, website design was not as prevalent as it is today but this experience definitely kindled my interest in the field.
      As time progressed, I've grown from learning the basics of Adobe Photoshop, HTML, and CSS to delving deep into JavaScript and its powerful frameworks like ReactJS and NextJS. 
      I have also familiarized myself with design software such as Figma and Adobe XD.
      </p>
      <p className='max-w-[90%] md:max-w-full text-center md:text-start'>
      While I possess knowledge of backend languages like PHP, my real passion is on the front-end.
      I thoroughly enjoy crafting visually appealing interfaces that enhance user experience, ensuring every project not only meets its intended objectives but is also a joy to interact with.
      Maintaining the same spirit of enjoyment and curiosity I had as a child, I strive to blend art and technology to build engaging digital experiences. 
      After all, loving what you do is key to creating exceptional work, and that's my ultimate aim in this journey.
      </p>
    </div>
    <div className='max-w-[350px] rounded'> 
    <Image src="/about-pic-secondary.jpg" alt="Blog" width={1920} height={1080} className='rounded' />
    <p className='text-xs mt-2 italic'>My first ever created website when I was a kid, on 2012</p>
    </div>
    </div>
    </div>
  </div>
)

// Component for Contact Section
const Contact = () => (
  <div className=" bg-black  " id="contact">
    <div className='container mx-auto py-12 border-t border-white'>
    <h2 className="text-4xl text-center font-medium text-white mb-6 ">Let's Connect!</h2>
    <div className='flex flex-col flex-wrap items-center gap-4'>
      <div className='flex flex-wrap justify-center items-center gap-2'>
        <a href='/CV-Luca-Lago.pdf' download="CV-Luca-Lago" target="_blank" rel="noopener noreferrer" className="button-2 text-white">Download My Resume</a>
        <a href="mailto:ll.lucalago@gmail.com" className="button-2 text-white">Send Me an Email</a>
      </div>
      <div className="w-full md:w-1/2 flex justify-center gap-4">
        <a href='https://www.linkedin.com/in/ll-luca-lago/' target='_blank' className='text-white hover:text-[#ccc] transition-colors ease-in-out text-4xl'><FaLinkedin /></a>
        <a href='https://github.com/lkl03' target='_blank' className='text-white hover:text-[#ccc] transition-colors ease-in-out text-4xl'><FaGithub /></a>
        <a href='https://dribbble.com/LucaLago_' target='_blank' className='text-white hover:text-[#ccc] transition-colors ease-in-out text-4xl'><AiFillDribbbleSquare /></a>
      </div>
    </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <AnimatePresence>
    <div>
      <Head>
        <title>Your Name - Portfolio</title>
      </Head>
      <Header />
      <main className=" bg-white">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
    </AnimatePresence>
  )
}
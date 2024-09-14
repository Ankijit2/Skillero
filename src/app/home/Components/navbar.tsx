'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoPersonSharp } from "react-icons/io5";
import Link from 'next/link'

const menuItems = ['HOME', 'ABOUT US', 'JOBS', 'COURSES', 'CONTACT US']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      width: 0,
      x: '100%',
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: '100%',
      width: '16rem', // 256px
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  }

  return (
    <nav className=" p-4 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-primary text-2xl font-bold">
          SKILLERO
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center ">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-secondary transition-colors duration-300 relative group"
              >
                {item}
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center space-x-4 z-50">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <IoPersonSharp className="text-primary w-6 h-6 hover:text-primary transition-colors duration-300" />
          </motion.div>
          
          <div className="md:hidden ">
            <motion.button 
              onClick={toggleMenu} 
              aria-label="Toggle menu" 
              className="relative w-8 h-8 bg-[#14248A] rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="absolute w-4 h-0.5 bg-white"
                variants={topLineVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                style={{ top: "calc(50% - 6px)" }}
              ></motion.span>
              <motion.span
                className="absolute w-4 h-0.5 bg-white"
                variants={middleLineVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                className="absolute w-4 h-0.5 bg-white"
                variants={bottomLineVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                style={{ bottom: "calc(50% - 7px)" }}
              ></motion.span>
            </motion.button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-64 bg-[#F9F5FF] shadow-lg z-40 md:hidden overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-4 mt-16">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[#14248A] hover:text-blue-700 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
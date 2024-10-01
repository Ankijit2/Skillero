import React,{useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar,NavbarBrand,NavbarContent,NavbarItem,Link,Button } from '@nextui-org/react'

import Image from 'next/image'

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.1, y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }
      }
  return (
    <>
    <Navbar maxWidth="full" className="bg-purple-600 text-white">
    <NavbarBrand>
      <Image src="/placeholder.svg?height=40&width=40" alt="Skillero Logo" width={40} height={40} />
      <p className="font-bold text-inherit ml-2">Skillero</p>
    </NavbarBrand>
    <NavbarContent className="hidden lg:flex gap-4" justify="center">
      <NavbarItem>
        <motion.div variants={menuItemVariants} whileHover="hover">
          <Link href="#" className="text-white hover:text-indigo-200 transition-colors">
            Home
          </Link>
        </motion.div>
      </NavbarItem>
      <NavbarItem>
        <motion.div variants={menuItemVariants} whileHover="hover">
          <Link href="#" className="text-white hover:text-indigo-200 transition-colors">
            Courses
          </Link>
        </motion.div>
      </NavbarItem>
      <NavbarItem>
        <motion.div variants={menuItemVariants} whileHover="hover">
          <Link href="#" className="text-white hover:text-indigo-200 transition-colors">
            Jobs
          </Link>
        </motion.div>
      </NavbarItem>
      <NavbarItem>
        <motion.div variants={menuItemVariants} whileHover="hover">
          <Link href="#" className="text-white hover:text-indigo-200 transition-colors">
            About
          </Link>
        </motion.div>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Button as={Link} href="#" className="bg-white text-purple-600 hover:bg-slate-200 transition-colors">
          Login
        </Button>
      </NavbarItem>
      <NavbarItem className="lg:hidden">
        <Button isIconOnly variant="light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </motion.div>
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>

  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-purple-600 text-white z-50 overflow-y-auto"
      >
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-end">
            <Button isIconOnly variant="light" onClick={() => setIsMenuOpen(false)}>
              <motion.div
                animate={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-0.5 bg-white rotate-45 translate-y-0.5" />
                <div className="w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5" />
              </motion.div>
            </Button>
          </div>
          <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
            <Link href="#" className="text-lg text-white hover:text-indigo-200 transition-colors">Home</Link>
          </motion.div>
          <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
            <Link href="#" className="text-lg text-white hover:text-indigo-200 transition-colors">Courses</Link>
          </motion.div>
          <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
            <Link href="#" className="text-lg text-white hover:text-indigo-200 transition-colors">Jobs</Link>
          </motion.div>
          <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
            <Link href="#" className="text-lg text-white hover:text-indigo-200 transition-colors">About</Link>
          </motion.div>
          <Button href="#" className="bg-white text-purple-600 hover:bg-gray-100 transition-colors">
            Login
          </Button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
  </>
  )
}

export default Menu
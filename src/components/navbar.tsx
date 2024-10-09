"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

import Image from 'next/image';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  };
  return (
    <>
      <Navbar maxWidth='full' className='bg-purple-600 text-white'>
        <NavbarBrand>
          <Image
            src='/logo.svg'
            alt='Skillero Logo'
            width={40}
            height={40}
          />
          <p className='ml-2 font-bold text-inherit'>Skillero</p>
        </NavbarBrand>
        <NavbarContent className='hidden gap-4 lg:flex' justify='center'>
          <NavbarItem>
            <motion.div variants={menuItemVariants} whileHover='hover'>
              <Link
                href='#'
                className='text-white transition-colors hover:text-indigo-200'
              >
                Home
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div variants={menuItemVariants} whileHover='hover'>
              <Link
                href='#'
                className='text-white transition-colors hover:text-indigo-200'
              >
                Courses
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div variants={menuItemVariants} whileHover='hover'>
              <Link
                href='#'
                className='text-white transition-colors hover:text-indigo-200'
              >
                Jobs
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div variants={menuItemVariants} whileHover='hover'>
              <Link
                href='#'
                className='text-white transition-colors hover:text-indigo-200'
              >
                About
              </Link>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Button
              as={Link}
              href='#'
              className='bg-white text-purple-600 transition-colors hover:bg-slate-200'
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem className='lg:hidden'>
            <Button
              isIconOnly
              variant='light'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
                />
                <div
                  className={`my-1 h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
                />
                <div
                  className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
                />
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
            className='fixed bottom-0 right-0 top-0 z-50 w-full overflow-y-auto bg-purple-600 text-white sm:w-80'
          >
            <div className='flex flex-col space-y-4 p-4'>
              <div className='flex justify-end'>
                <Button
                  isIconOnly
                  variant='light'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.div
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className='h-0.5 w-6 translate-y-0.5 rotate-45 bg-white' />
                    <div className='h-0.5 w-6 -translate-y-0.5 -rotate-45 bg-white' />
                  </motion.div>
                </Button>
              </div>
              <motion.div
                variants={menuItemVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <Link
                  href='#'
                  className='text-lg text-white transition-colors hover:text-indigo-200'
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                variants={menuItemVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <Link
                  href='#'
                  className='text-lg text-white transition-colors hover:text-indigo-200'
                >
                  Courses
                </Link>
              </motion.div>
              <motion.div
                variants={menuItemVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <Link
                  href='#'
                  className='text-lg text-white transition-colors hover:text-indigo-200'
                >
                  Jobs
                </Link>
              </motion.div>
              <motion.div
                variants={menuItemVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
              >
                <Link
                  href='#'
                  className='text-lg text-white transition-colors hover:text-indigo-200'
                >
                  About
                </Link>
              </motion.div>
              <Button
                href='#'
                className='bg-white text-purple-600 transition-colors hover:bg-gray-100'
              >
                Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;

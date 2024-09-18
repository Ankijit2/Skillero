'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, CardFooter, Image, Tabs, Tab } from "@nextui-org/react"
import { FaSearch, FaGraduationCap, FaBriefcase, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

export default function SkilleroLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const courses = [
    { name: "Web Development Fundamentals", image: "/placeholder.svg?height=200&width=300", price: 49.99 },
    { name: "Data Science Essentials", image: "/placeholder.svg?height=200&width=300", price: 59.99 },
    { name: "Digital Marketing Mastery", image: "/placeholder.svg?height=200&width=300", price: 39.99 },
    { name: "UX/UI Design Principles", image: "/placeholder.svg?height=200&width=300", price: 54.99 },
    { name: "Machine Learning Basics", image: "/placeholder.svg?height=200&width=300", price: 69.99 },
  ]

  const jobs = [
    { title: "Frontend Developer", company: "TechCorp", location: "Remote", type: "Full-time", image: "/placeholder.svg?height=200&width=300" },
    { title: "Data Analyst", company: "DataInsights", location: "New York, NY", type: "Contract", image: "/placeholder.svg?height=200&width=300" },
    { title: "Digital Marketing Specialist", company: "MarketPro", location: "San Francisco, CA", type: "Part-time", image: "/placeholder.svg?height=200&width=300" },
    { title: "UX Designer", company: "DesignHub", location: "London, UK", type: "Full-time", image: "/placeholder.svg?height=200&width=300" },
    { title: "Machine Learning Engineer", company: "AI Solutions", location: "Berlin, Germany", type: "Full-time", image: "/placeholder.svg?height=200&width=300" },
  ]

  const reviews = [
    { name: "John Doe", company: "Tech Innovators", text: "Skillero transformed my career path. The courses were practical and the job opportunities were invaluable." },
    { name: "Jane Smith", company: "Data Dynamics", text: "Thanks to Skillero, I landed my dream job in data science. The personalized learning approach made all the difference." },
    { name: "Alex Johnson", company: "Creative Solutions", text: "The UX/UI design course on Skillero was a game-changer. I'm now leading design projects at a top tech firm." },
    { name: "Emily Brown", company: "AI Frontiers", text: "Skillero's machine learning course and job placement services helped me transition into AI. Highly recommended!" },
    { name: "Michael Lee", company: "Digital Marketing Pro", text: "The digital marketing course was comprehensive and up-to-date. It gave me the skills to excel in my new role." }
  ]

  const visionSlides = [
    { image: "/placeholder.svg?height=400&width=800", slogan: "Empowering Careers, Transforming Lives", buttonText: "Join Us" },
    { image: "/placeholder.svg?height=400&width=800", slogan: "Learn Today, Lead Tomorrow", buttonText: "Explore Courses" },
    { image: "/placeholder.svg?height=400&width=800", slogan: "Building a Skilled Workforce", buttonText: "Partner With Us" },
  ]

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }
  }

  const cardVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-white">
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

      <main className="w-full">
        {/* Hero Section */}
        <section 
          className="text-center py-20 bg-cover bg-center w-full"
          style={{ backgroundImage: `url("/placeholder.svg?height=600&width=1200")` }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Learn Skills, Land Jobs</h1>
            <p className="text-xl mb-8 text-white">Boost your career with our courses and job opportunities</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors">
              Explore Courses
            </Button>
          </div>
        </section>

        {/* Popular Section with Tabs */}
        <section className="py-16 bg-gray-50 w-full">
          <div className="container mx-auto px-4 lg:w-4/5">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Popular</h2>
            <Tabs aria-label="Popular content" className="flex justify-center mb-8">
              <Tab key="courses" title="Courses">
                <Carousel className="w-full">
                  <CarouselContent>
                    {courses.map((course, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <motion.div variants={cardVariants} whileHover="hover">
                            <Card shadow="sm" className="max-w-[300px] mx-auto">
                              <CardBody className="p-0">
                                <Image
                                  src={course.image}
                                  alt={course.name}
                                  width={300}
                                  height={200}
                                  className="w-full object-cover h-[200px]"
                                />
                              </CardBody>
                              <CardFooter className="text-small justify-between">
                                <b>{course.name}</b>
                                <p className="text-default-500">${course.price}</p>
                              </CardFooter>
                              <Button className="m-2 bg-purple-600 text-white hover:bg-purple-700">Add to Cart</Button>
                            </Card>
                          </motion.div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </Tab>
              <Tab key="jobs" title="Jobs">
                <Carousel className="w-full">
                  <CarouselContent>
                    {jobs.map((job, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <motion.div variants={cardVariants} whileHover="hover">
                            <Card shadow="sm" className="max-w-[300px] mx-auto">
                              <CardBody className="p-0">
                                <Image
                                  src={job.image}
                                  alt={job.title}
                                  width={300}
                                  height={200}
                                  className="w-full object-cover h-[200px]"
                                />
                              </CardBody>
                              <CardFooter className="text-small flex-col items-start">
                                <b>{job.title}</b>
                                <p className="text-default-500">{job.company}</p>
                                <p className="text-default-500">{job.location}</p>
                                <p className="text-default-500">{job.type}</p>
                              </CardFooter>
                              <Button className="m-2 bg-indigo-600 text-white hover:bg-indigo-700">Apply Now</Button>
                            </Card>
                          </motion.div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </Tab>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Skillero?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGraduationCap className="text-4xl mb-4 text-purple-600 mx-auto" />
                <h3 className="font-bold mb-2 text-center text-gray-800">Expert-Led Courses</h3>
                <p className="text-center text-gray-600">Learn from industry professionals and gain practical skills</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaBriefcase className="text-4xl mb-4 text-purple-600 mx-auto" />
                <h3 className="font-bold mb-2 text-center text-gray-800">Job Opportunities</h3>
                <p className="text-center text-gray-600">Access exclusive job listings from top companies</p>
              </motion.div>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaSearch className="text-4xl mb-4 text-purple-600 mx-auto" />
                <h3 className="font-bold mb-2 text-center text-gray-800">Personalized Learning</h3>
                <p className="text-center text-gray-600">Tailored course recommendations based on your goals</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-gray-50 w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Success Stories</h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto"
                >
                  <p className="mb-4 text-gray-600 text-lg">{reviews[currentReview].text}</p>
                  <p className="font-bold text-black">{reviews[currentReview].name}</p>
                  <p className="text-sm text-purple-600">{reviews[currentReview].company}</p>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                aria-label="Previous review"
              >
                <FaChevronLeft className="text-purple-600" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                aria-label="Next review"
              >
                <FaChevronRight className="text-purple-600" />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === currentReview ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-16 px-16 w-full">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Vision</h2>
          <Carousel className="w-full">
            <CarouselContent>
              {visionSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">{slide.slogan}</h3>
                      <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Skillero</h3>
              <p>Empowering careers through education</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul>
                <motion.li whileHover={{ scale: 1.1, x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1, x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">Courses</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1, x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">Jobs</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1, x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">About</Link>
                </motion.li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p>Email: info@skillero.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">Facebook</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">Twitter</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href="#" className="text-white hover:text-indigo-200 transition-colors">LinkedIn</Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Skillero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
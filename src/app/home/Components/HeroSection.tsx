'use client'

import React from 'react'
import { Inknut_Antiqua } from "next/font/google"
import { CldImage } from 'next-cloudinary'
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import { motion } from 'framer-motion'
import { FaBook, FaUsers, FaCertificate, FaLaptop } from 'react-icons/fa'

const inknutAntiqua = Inknut_Antiqua({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function HeroSection() {
  return (
    <motion.div 
      className="mt-32 flex justify-evenly flex-col md:flex-row items-center"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.div variants={fadeIn}>
        <CldImage
          src="https://res.cloudinary.com/dv6afswbt/image/upload/v1726233128/hero-section-skillero_bll7u7.svg"
          alt="hero"
          width={696}
          height={486}
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 55vw, (max-width: 1239px) 40vw, 696px"
        />
      </motion.div>
      <motion.div
        className={`${inknutAntiqua.className} mt-16 md:mt-0 text-center md:text-left`}
        variants={fadeIn}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl leading-loose text-secondary">
          Learn Today, Lead Tomorrow <br/>Courses to Elevate, Jobs to Empower!
        </p>
        <div className="flex gap-6 mt-10 justify-center md:justify-start">
          <Button color="primary" className="rounded-full">
            Explore courses
          </Button>
          <Button color="primary" variant="bordered" className="rounded-full">
            Search Jobs
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function FeaturesSection() {
  const features = [
    { icon: FaBook, title: "Diverse Courses", description: "Wide range of subjects to choose from" },
    { icon: FaUsers, title: "Expert Instructors", description: "Learn from industry professionals" },
    { icon: FaCertificate, title: "Certifications", description: "Earn recognized certificates" },
    { icon: FaLaptop, title: "Flexible Learning", description: "Study at your own pace, anywhere" },
  ]

  return (
    <motion.div 
      className="mt-32 px-4 md:px-0"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.h2 
        className={`${inknutAntiqua.className} text-3xl md:text-4xl font-bold text-center mb-12`}
        variants={fadeIn}
      >
        Why Choose Us
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full">
              <CardBody className="text-center">
                <feature.icon className="text-5xl mb-4 mx-auto text-primary" />
                <h3 className={`${inknutAntiqua.className} text-xl font-semibold mb-2`}>{feature.title}</h3>
                <p>{feature.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function PopularCoursesSection() {
  const courses = [
    { title: "Web Development Bootcamp", students: 10000, rating: 4.8 },
    { title: "Data Science Fundamentals", students: 8500, rating: 4.7 },
    { title: "Digital Marketing Mastery", students: 7200, rating: 4.6 },
    { title: "UX/UI Design Essentials", students: 6800, rating: 4.9 },
  ]

  return (
    <motion.div 
      className="mt-32 px-4 md:px-0"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.h2 
        className={`${inknutAntiqua.className} text-3xl md:text-4xl font-bold text-center mb-12`}
        variants={fadeIn}
      >
        Popular Courses
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full">
              <CardBody>
                <h3 className={`${inknutAntiqua.className} text-xl font-semibold mb-2`}>{course.title}</h3>
                <p>{course.students.toLocaleString()} students</p>
                <p>Rating: {course.rating}/5</p>
              </CardBody>
              <CardFooter>
                <Button color="primary" className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function TestimonialsSection() {
  const testimonials = [
    { name: "John Doe", role: "Software Developer", quote: "This platform transformed my career. The courses are top-notch and the job search feature is invaluable." },
    { name: "Jane Smith", role: "Data Analyst", quote: "I've tried many online learning platforms, but this one stands out. The quality of instruction is unmatched." },
  ]

  return (
    <motion.div 
      className="mt-32 px-4 md:px-0"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <motion.h2 
        className={`${inknutAntiqua.className} text-3xl md:text-4xl font-bold text-center mb-12`}
        variants={fadeIn}
      >
        What Our Students Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full">
              <CardBody>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function CTASection() {
  return (
    <motion.div 
      className="mt-32 mb-16 px-4 md:px-0"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <Card className="bg-primary text-white">
        <CardBody className="text-center py-12">
          <h2 className={`${inknutAntiqua.className} text-3xl md:text-4xl font-bold mb-6`}>
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mb-8 text-lg">Join thousands of students and advance your career today!</p>
          <Button color="secondary" size="lg" className="rounded-full">
            Get Started Now
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  )
}

function LMSLandingPage() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default LMSLandingPage
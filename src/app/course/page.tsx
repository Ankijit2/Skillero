'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, Tab, Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react"
import { FiBook, FiEdit, FiDollarSign, FiClock, FiStar, FiPlus } from 'react-icons/fi'
import CourseForm from './components/course-modal'

const purchasedCourses = [
  { id: 1, name: "Advanced Web Development", price: 59.99, cover: "/placeholder.svg?height=200&width=300", rating: 4.8, duration: "20 hours" },
  { id: 2, name: "Data Science Fundamentals", price: 49.99, cover: "/placeholder.svg?height=200&width=300", rating: 4.7, duration: "15 hours" },
  { id: 3, name: "Mobile App Development with React Native", price: 69.99, cover: "/placeholder.svg?height=200&width=300", rating: 4.9, duration: "25 hours" },
]

const createdCourses = [
  { id: 1, name: "Introduction to JavaScript", price: 39.99, cover: "/placeholder.svg?height=200&width=300", students: 1500, revenue: 59985 },
  { id: 2, name: "UI/UX Design Principles", price: 54.99, cover: "/placeholder.svg?height=200&width=300", students: 980, revenue: 53890.20 },
]

export default function SkilleroCoursePageA() {
  const [selectedTab, setSelectedTab] = useState("purchased")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const handleCreateCourse = () => {
    // Implement course creation logic here
    console.log("Create new course")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Courses</h1>
        <CourseForm/>
      </div>
      
      <Tabs 
        aria-label="Course tabs" 
        selectedKey={selectedTab} 
        onSelectionChange={setSelectedTab as any}
        className="flex justify-center mb-8"
      >
        <Tab key="purchased" title={
          <div className="flex items-center space-x-2">
            <FiBook />
            <span>Purchased Courses</span>
          </div>
        }/>
        <Tab key="created" title={
          <div className="flex items-center space-x-2">
            <FiEdit />
            <span>Created Courses</span>
          </div>
        }/>
      </Tabs>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {selectedTab === "purchased" ? (
            purchasedCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <Card className="h-full">
                  <CardBody className="p-0">
                    <Image
                      src={course.cover}
                      alt={course.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <FiStar className="text-yellow-400 mr-1" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <FiClock className="mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">${course.price}</span>
                    <Button color="primary">Continue Learning</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            createdCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <Card className="h-full">
                  <CardBody className="p-0">
                    <Image
                      src={course.cover}
                      alt={course.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <FiBook className="mr-1" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center">
                          <FiDollarSign className="mr-1" />
                          <span>${course.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">${course.price}</span>
                    <Button color="secondary">Edit Course</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
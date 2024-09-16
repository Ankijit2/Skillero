'use client'

import React, { useState, useEffect } from 'react'
import { Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { Card, CardBody, CardFooter } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { Chip } from "@nextui-org/react"
import { Avatar } from "@nextui-org/react"
import { Progress } from "@nextui-org/react"
import { FaSearch, FaStar, FaUserGraduate, FaClock, FaFilter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const courseCategories = ["All", "Web Development", "Data Science", "Mobile Development", "Machine Learning", "DevOps"]

const allCourses = [
  { id: 1, title: "Advanced React Patterns", instructor: "Jane Doe", rating: 4.8, students: 1234, duration: "10h 30m", image: "/placeholder.svg?height=100&width=100", category: "Web Development", progress: 65 },
  { id: 2, title: "Python for Data Science", instructor: "John Smith", rating: 4.7, students: 2345, duration: "15h 45m", image: "/placeholder.svg?height=100&width=100", category: "Data Science", progress: 30 },
  { id: 3, title: "iOS App Development with Swift", instructor: "Emily Johnson", rating: 4.9, students: 987, duration: "12h 15m", image: "/placeholder.svg?height=100&width=100", category: "Mobile Development", progress: 80 },
  { id: 4, title: "Machine Learning Fundamentals", instructor: "Michael Brown", rating: 4.6, students: 3456, duration: "20h 30m", image: "/placeholder.svg?height=100&width=100", category: "Machine Learning", progress: 45 },
  { id: 5, title: "Docker and Kubernetes Essentials", instructor: "Sarah Wilson", rating: 4.8, students: 1789, duration: "18h 15m", image: "/placeholder.svg?height=100&width=100", category: "DevOps", progress: 20 },
]

export default function ModernCourseSearchPage() {
  const [searchValue, setSearchValue] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(new Set(["All"]))
  const [filteredCourses, setFilteredCourses] = useState(allCourses)

  useEffect(() => {
    const category = Array.from(selectedCategory)[0] as string
    const filtered = allCourses.filter(course => 
      (course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
       course.instructor.toLowerCase().includes(searchValue.toLowerCase())) &&
      (category === "All" || course.category === category)
    )
    setFilteredCourses(filtered)
  }, [searchValue, selectedCategory])

  const handleSelectionChange = (keys: any) => {
    setSelectedCategory(keys)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 sm:p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
      >
        Discover Your Next Course
      </motion.h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <Input
          className="max-w-full sm:max-w-md"
          placeholder="Search courses or instructors..."
          value={searchValue}
          onValueChange={setSearchValue}
          startContent={<FaSearch className="text-default-400" />}
          size="lg"
        />
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="flat" 
              startContent={<FaFilter />}
              size="lg"
            >
              {Array.from(selectedCategory)[0]}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Course categories"
            selectionMode="single"
            selectedKeys={selectedCategory}
            onSelectionChange={handleSelectionChange}
          >
            {courseCategories.map((category) => (
              <DropdownItem key={category}>{category}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          {filteredCourses.length > 0 ? `Found ${filteredCourses.length} courses` : "No courses found"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="w-full hover:shadow-lg transition-shadow duration-300">
                <CardBody className="p-4">
                  <div className="flex items-center mb-4">
                    <Avatar src={course.image} className="w-16 h-16 mr-4" alt={course.title} />
                    <div>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-default-500">{course.instructor}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUserGraduate className="text-default-400 mr-1" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-default-400 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Chip size="sm" variant="flat" color="primary">
                    {course.category}
                  </Chip>
                  <div className="mt-4">
                    <p className="text-sm text-default-500 mb-1">Course Progress</p>
                    <Progress value={course.progress} className="h-2" color="success" />
                  </div>
                </CardBody>
                <CardFooter>
                  <Button color="primary" fullWidth>
                    Continue Learning
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
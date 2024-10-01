'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input, Card, CardBody, CardFooter, Button, Avatar, Chip } from "@nextui-org/react"
import { FiSearch, FiStar, FiShoppingCart } from 'react-icons/fi'

const popularCourses = [
  {
    id: 1,
    name: "Advanced Web Development",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    description: "Master modern web technologies and frameworks",
    author: "Jane Doe",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    price: 59.99
  },
  {
    id: 2,
    name: "Data Science Fundamentals",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    description: "Learn the basics of data analysis and machine learning",
    author: "John Smith",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    price: 49.99
  },
  {
    id: 3,
    name: "Mobile App Development with React Native",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    description: "Build cross-platform mobile apps with React Native",
    author: "Alice Johnson",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    price: 69.99
  },
  {
    id: 4,
    name: "UX/UI Design Masterclass",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    description: "Create stunning user interfaces and experiences",
    author: "Bob Wilson",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    price: 54.99
  },
  {
    id: 5,
    name: "Python for Artificial Intelligence",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    description: "Dive into AI and machine learning with Python",
    author: "Eva Brown",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    price: 79.99
  },
  {
    id: 6,
    name: "Blockchain Development",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    description: "Build decentralized applications and smart contracts",
    author: "Chris Lee",
    authorAvatar: "/placeholder.svg?height=50&width=50",
    price: 64.99
  }
]

export default function CourseSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [courses, setCourses] = useState(popularCourses)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setCourses(popularCourses)
    } else {
      const filteredCourses = popularCourses.filter(course =>
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase())
      )
      setCourses(filteredCourses)
    }
  }

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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Courses</h1>
          <Input
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            startContent={<FiSearch className="text-gray-400" />}
            className="max-w-md"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <Card className="h-full">
                <CardBody className="p-0">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                    <p className="text-gray-600 mb-2">{course.description}</p>
                    <div className="flex items-center mb-2">
                      <Avatar src={course.authorAvatar} size="sm" className="mr-2" />
                      <span className="text-sm text-gray-600">{course.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FiStar className="text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between items-center">
                  <Chip color="primary" variant="flat">${course.price}</Chip>
                  <Button
                    color="primary"
                    endContent={<FiShoppingCart />}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {courses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-xl text-gray-600">No courses found. Try a different search term.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
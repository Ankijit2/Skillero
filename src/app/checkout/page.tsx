'use client'

import React from 'react'
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react"
import { FaTrash, FaShoppingCart, FaClock, FaBook } from 'react-icons/fa'

interface Course {
  id: string
  title: string
  price: number
  image: string
  duration: string
  lessons: number
}

export default function Component() {
  const [courses, setCourses] = React.useState<Course[]>([
    { id: '1', title: 'React Fundamentals', price: 99.99, image: '/placeholder.svg?height=100&width=150', duration: '10h 30m', lessons: 42 },
    { id: '2', title: 'Advanced TypeScript', price: 129.99, image: '/placeholder.svg?height=100&width=150', duration: '8h 45m', lessons: 36 },
    { id: '3', title: 'Next.js Mastery', price: 149.99, image: '/placeholder.svg?height=100&width=150', duration: '12h 15m', lessons: 54 },
  ])

  const deleteCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id))
  }

  const totalPrice = courses.reduce((sum, course) => sum + course.price, 0)

  const checkout = () => {
    alert('Proceeding to checkout...')
    // Implement actual checkout logic here
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="flex-grow">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Your Learning Cart</h1>
        <div className="grid gap-4">
          {courses.map(course => (
            <Card key={course.id} className="w-full shadow-lg">
              <CardBody className="flex flex-col sm:flex-row p-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full sm:w-[100px] h-[100px] mb-4 sm:mb-0"
                />
                <div className="sm:ml-4 flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 sm:mb-1">{course.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mb-2 sm:mb-0">
                    <span className="flex items-center mb-1 sm:mb-0">
                      <FaClock className="mr-1" /> {course.duration}
                    </span>
                    <span className="flex items-center sm:ml-4">
                      <FaBook className="mr-1" /> {course.lessons} lessons
                    </span>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-between mt-4 sm:mt-0 sm:ml-4">
                  <p className="text-lg font-bold text-gray-800 order-1 sm:order-2">${course.price.toFixed(2)}</p>
                  <Button
                    isIconOnly
                    color="danger"
                    aria-label={`Remove ${course.title} from cart`}
                    size="sm"
                    onClick={() => deleteCourse(course.id)}
                    className="order-2 sm:order-1 mb-0 sm:mb-2"
                  >
                    <FaTrash />
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        {courses.length === 0 && (
          <Card className="w-full shadow-lg">
            <CardBody>
              <p className="text-center text-gray-600 text-lg">
                Your cart is empty. Start adding courses to begin your learning journey!
              </p>
            </CardBody>
          </Card>
        )}
      </div>
      <div className="w-full lg:w-80 mt-6 lg:mt-0">
        <Card className="sticky top-6 shadow-lg">
          <CardBody>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Courses:</span>
              <span className="font-semibold">{courses.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <Button
              color="primary"
              size="lg"
              onClick={checkout}
              disabled={courses.length === 0}
              className="w-full"
            >
              <FaShoppingCart className="mr-2" /> Checkout
            </Button>
          </CardBody>
          <CardFooter>
            <p className="text-xs text-gray-500 text-center w-full">
              30-Day Money-Back Guarantee
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
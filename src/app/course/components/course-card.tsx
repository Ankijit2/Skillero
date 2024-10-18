 import React from 'react'
 import { FiStar, FiClock } from 'react-icons/fi'
 import { Card, CardBody, CardFooter, Button } from '@nextui-org/react'
 import Image from 'next/image'
 

 interface CoursecardProps {
   name: string
   description: string
   cover: string
   rating: number
   price:number
   duration: string

 }
 function Coursecard(course: CoursecardProps) {
   return (
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
   )
 }
 
 export default Coursecard
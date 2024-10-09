'use client';

import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react';
import { FaTrash, FaShoppingCart, FaClock, FaBook } from 'react-icons/fa';

interface Course {
  id: string;
  title: string;
  price: number;
  image: string;
  duration: string;
  lessons: number;
}

export default function Component() {
  const [courses, setCourses] = React.useState<Course[]>([
    {
      id: '1',
      title: 'React Fundamentals',
      price: 99.99,
      image: '/placeholder.svg?height=100&width=150',
      duration: '10h 30m',
      lessons: 42,
    },
    {
      id: '2',
      title: 'Advanced TypeScript',
      price: 129.99,
      image: '/placeholder.svg?height=100&width=150',
      duration: '8h 45m',
      lessons: 36,
    },
    {
      id: '3',
      title: 'Next.js Mastery',
      price: 149.99,
      image: '/placeholder.svg?height=100&width=150',
      duration: '12h 15m',
      lessons: 54,
    },
  ]);

  const deleteCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);

  const checkout = () => {
    alert('Proceeding to checkout...');
    // Implement actual checkout logic here
  };

  return (
    <div className='flex min-h-screen flex-col gap-6 bg-gradient-to-br from-purple-100 to-pink-100 p-4 sm:p-6 lg:flex-row'>
      <div className='flex-grow'>
        <h1 className='mb-4 text-xl font-bold text-gray-800 sm:mb-6 sm:text-2xl'>
          Your Learning Cart
        </h1>
        <div className='grid gap-4'>
          {courses.map((course) => (
            <Card key={course.id} className='w-full shadow-lg'>
              <CardBody className='flex flex-col p-4 sm:flex-row'>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={100}
                  height={100}
                  className='mb-4 h-[100px] w-full rounded-lg object-cover sm:mb-0 sm:w-[100px]'
                />
                <div className='flex-grow sm:ml-4'>
                  <h3 className='mb-2 text-lg font-semibold text-gray-800 sm:mb-1'>
                    {course.title}
                  </h3>
                  <div className='mb-2 flex flex-col text-sm text-gray-600 sm:mb-0 sm:flex-row sm:items-center'>
                    <span className='mb-1 flex items-center sm:mb-0'>
                      <FaClock className='mr-1' /> {course.duration}
                    </span>
                    <span className='flex items-center sm:ml-4'>
                      <FaBook className='mr-1' /> {course.lessons} lessons
                    </span>
                  </div>
                </div>
                <div className='mt-4 flex flex-row items-center justify-between sm:ml-4 sm:mt-0 sm:flex-col sm:items-end sm:justify-between'>
                  <p className='order-1 text-lg font-bold text-gray-800 sm:order-2'>
                    ${course.price.toFixed(2)}
                  </p>
                  <Button
                    isIconOnly
                    color='danger'
                    aria-label={`Remove ${course.title} from cart`}
                    size='sm'
                    onClick={() => deleteCourse(course.id)}
                    className='order-2 mb-0 sm:order-1 sm:mb-2'
                  >
                    <FaTrash />
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        {courses.length === 0 && (
          <Card className='w-full shadow-lg'>
            <CardBody>
              <p className='text-center text-lg text-gray-600'>
                Your cart is empty. Start adding courses to begin your learning
                journey!
              </p>
            </CardBody>
          </Card>
        )}
      </div>
      <div className='mt-6 w-full lg:mt-0 lg:w-80'>
        <Card className='sticky top-6 shadow-lg'>
          <CardBody>
            <h2 className='mb-4 text-xl font-bold text-gray-800'>
              Cart Summary
            </h2>
            <div className='mb-2 flex justify-between'>
              <span className='text-gray-600'>Total Courses:</span>
              <span className='font-semibold'>{courses.length}</span>
            </div>
            <div className='mb-4 flex justify-between'>
              <span className='text-gray-600'>Total Price:</span>
              <span className='text-xl font-bold'>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Button
              color='primary'
              size='lg'
              onClick={checkout}
              disabled={courses.length === 0}
              className='w-full'
            >
              <FaShoppingCart className='mr-2' /> Checkout
            </Button>
          </CardBody>
          <CardFooter>
            <p className='w-full text-center text-xs text-gray-500'>
              30-Day Money-Back Guarantee
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, CardHeader, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { FiEdit, FiTrash2, FiEye, FiEyeOff, FiPlus, FiMoreVertical } from 'react-icons/fi'

const initialCourse = {
  id: '1',
  title: 'Introduction to React',
  description: 'Learn the basics of React and build your first app.',
  coverPhoto: '/placeholder.svg?height=200&width=400',
  published: false,
  sections: [
    { id: 's1', title: 'Getting Started', videos: [{ id: 'v1', title: 'Setting up your environment' }] },
    { id: 's2', title: 'Components', videos: [{ id: 'v2', title: 'Functional Components' }] },
  ]
}

export default function CourseManagement() {
  const [course, setCourse] = useState(initialCourse)

  const handlePublish = () => {
    setCourse({ ...course, published: !course.published })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      <Navbar isBordered className="bg-background/60 backdrop-blur-md">
        <NavbarBrand>
          <p className="font-bold text-inherit">Skillero</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Courses
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="container mx-auto px-4 py-8">
        <Card className="bg-background/60 backdrop-blur-md shadow-lg">
          <CardHeader className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <div className="flex gap-2">
              <Button isIconOnly color="primary" aria-label="Edit" onClick={() => console.log('Edit')}>
                <FiEdit />
              </Button>
              <Button isIconOnly color={course.published ? "warning" : "success"} aria-label="Publish" onClick={handlePublish}>
                {course.published ? <FiEyeOff /> : <FiEye />}
              </Button>
              <Button isIconOnly color="danger" aria-label="Delete" onClick={() => console.log('Delete')}>
                <FiTrash2 />
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p className="mb-4">{course.description}</p>
            <img src={course.coverPhoto} alt="Course cover" className="w-full h-48 object-cover rounded-lg mb-4" />
            
            {course.sections.map((section) => (
              <Card key={section.id} className="mb-4">
                <CardHeader className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly variant="light">
                        <FiMoreVertical />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Section actions">
                      <DropdownItem startContent={<FiEdit />}>Edit</DropdownItem>
                      <DropdownItem startContent={<FiTrash2 />} className="text-danger" color="danger">Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </CardHeader>
                <CardBody>
                  {section.videos.map((video) => (
                    <div key={video.id} className="flex justify-between items-center p-2 bg-content2 rounded mb-2">
                      <span>{video.title}</span>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button isIconOnly size="sm" variant="light">
                            <FiMoreVertical />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Video actions">
                          <DropdownItem startContent={<FiEdit />}>Edit</DropdownItem>
                          <DropdownItem startContent={<FiTrash2 />} className="text-danger" color="danger">Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  ))}
                  <Button size="sm" color="primary" startContent={<FiPlus />} className="mt-2">
                    Add Video
                  </Button>
                </CardBody>
              </Card>
            ))}

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Button color="primary" className="w-full" startContent={<FiPlus />}>
                Add New Section
              </Button>
            </motion.div>
          </CardBody>
        </Card>
      </main>
    </div>
  )
}
'use client'

import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Tabs, Tab } from "@nextui-org/tabs"
import { Progress } from "@nextui-org/progress"
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { Avatar } from "@nextui-org/avatar"
import { FaPlayCircle, FaLock, FaCheckCircle } from 'react-icons/fa'
import { MdOndemandVideo } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const otherVideos = [
  { id: 1, title: "Introduction to React Basics", duration: "10:30", isCompleted: true },
  { id: 2, title: "Components and Props", duration: "15:45", isCompleted: true },
  { id: 3, title: "State and Lifecycle", duration: "20:15", isCompleted: false },
  { id: 4, title: "Handling Events in React", duration: "12:50", isCompleted: false },
  { id: 5, title: "Introduction to Hooks", duration: "18:30", isCompleted: false },
]

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardBody className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Course Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardBody>
            </Card>
            <h1 className="text-2xl font-bold mb-4">Components and Props in React</h1>
            <Tabs aria-label="Video Content" className="mb-6">
              <Tab key="description" title="Description">
                <Card>
                  <CardBody>
                    <p className="text-sm sm:text-base">
                      In this video, we dive deep into React components and props. You'll learn how to create
                      reusable components, pass data between them using props, and structure your React
                      applications effectively. By the end of this lesson, you'll have a solid understanding
                      of these fundamental React concepts.
                    </p>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="transcript" title="Transcript">
                <Card>
                  <CardBody>
                    <p className="text-sm sm:text-base">
                      [00:00] Welcome to our lesson on Components and Props in React.
                      [00:15] Let's start by understanding what a component is...
                      [00:30] Components are the building blocks of React applications...
                      [00:45] Now, let's discuss props and how they facilitate communication between components...
                      [01:00] Props allow us to pass data from parent components to child components...
                    </p>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="resources" title="Resources">
                <Card>
                  <CardBody>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      <li><a href="#" className="text-primary">React Documentation on Components and Props</a></li>
                      <li><a href="#" className="text-primary">Practice Exercises (PDF)</a></li>
                      <li><a href="#" className="text-primary">Sample Code Repository</a></li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
          <div className="lg:row-start-1">
            <Card className="mb-6">
              <CardHeader>
                <h2 className="text-lg font-semibold">Course Progress</h2>
              </CardHeader>
              <CardBody>
                <Progress value={40} className="mb-2" />
                <p className="text-sm text-default-500 mb-4">4 of 10 lessons completed</p>
                <Button color="primary" className="w-full" startContent={<FaPlayCircle size={18} />}>
                  Next Lesson
                </Button>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Course Content</h2>
              </CardHeader>
              <CardBody className="p-0">
                <Accordion>
                  <AccordionItem key="1" aria-label="Course Videos" title="Course Videos">
                    {otherVideos.map((video) => (
                      <div key={video.id} className="flex items-center justify-between py-2 px-4 border-b last:border-b-0">
                        <div className="flex items-center">
                          {video.isCompleted ? (
                            <FaCheckCircle size={18} className="text-success mr-2" />
                          ) : (
                            <FaLock size={18} className="text-default-400 mr-2" />
                          )}
                          <span className="text-sm">{video.title}</span>
                        </div>
                        <div className="flex items-center">
                          <IoMdTime size={16} className="text-default-400 mr-1" />
                          <span className="text-xs text-default-500">{video.duration}</span>
                        </div>
                      </div>
                    ))}
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-default-100 py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Avatar src="/placeholder.svg?height=40&width=40" className="w-10 h-10 mr-4" alt="Instructor" />
              <div>
                <h3 className="font-semibold">Jane Doe</h3>
                <p className="text-sm text-default-500">Course Instructor</p>
              </div>
            </div>
            <Button color="primary" variant="flat" startContent={<AiOutlineQuestionCircle size={18} />}>
              Ask a Question
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
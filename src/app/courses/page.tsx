'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Progress, Chip, Avatar, Divider, Button, Textarea } from "@nextui-org/react"
import { Play, CheckCircle, Lock, Clock, Users, Star, Award, ThumbsUp, MessageSquare } from 'lucide-react'

const courseDetails = {
  title: "Advanced Web Development Masterclass",
  description: "Master modern web development techniques, frameworks, and best practices",
  author: {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    title: "Senior Web Developer"
  },
  rating: 4.8,
  students: 15234,
  lastUpdated: "June 2023",
  language: "English",
  totalHours: 42,
  skillLevel: "Intermediate to Advanced",
  certificate: true,
  topics: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "GraphQL", "Responsive Design", "Web Performance"]
}

const courseSections = [
  {
    title: "Getting Started with Modern Web Development",
    videos: [
      { title: "Course Introduction and Overview", duration: "10:30", completed: true },
      { title: "Setting Up Your Development Environment", duration: "15:45", completed: true },
      { title: "Web Development in 2023: Trends and Technologies", duration: "20:15", completed: false },
    ]
  },
  {
    title: "Advanced HTML5 and CSS3 Techniques",
    videos: [
      { title: "Semantic HTML and Accessibility Best Practices", duration: "25:10", completed: false },
      { title: "CSS Grid and Flexbox Mastery", duration: "35:30", completed: false },
      { title: "CSS Animations and Transitions", duration: "28:45", completed: false },
    ]
  },
  {
    title: "JavaScript Deep Dive",
    videos: [
      { title: "ES6+ Features and Syntax", duration: "40:20", completed: false },
      { title: "Asynchronous JavaScript: Promises and Async/Await", duration: "45:15", completed: false },
      { title: "Functional Programming in JavaScript", duration: "38:30", completed: false },
    ]
  },
  {
    title: "React Framework Mastery",
    videos: [
      { title: "React Hooks In-Depth", duration: "50:00", locked: true },
      { title: "State Management with Redux and Context API", duration: "55:30", locked: true },
      { title: "Building Scalable React Applications", duration: "60:15", locked: true },
    ]
  },
  {
    title: "Backend Development with Node.js",
    videos: [
      { title: "RESTful API Design and Implementation", duration: "45:20", locked: true },
      { title: "Authentication and Authorization Strategies", duration: "40:10", locked: true },
      { title: "Database Integration: SQL and NoSQL", duration: "50:45", locked: true },
    ]
  },
]
const comments = [
  {
    id: 1,
    user: {
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    text: "This course is amazing! I've learned so much about modern web development techniques.",
    likes: 15,
    replies: 3,
    date: "2 days ago"
  },
  {
    id: 2,
    user: {
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    text: "The instructor explains complex concepts in a very understandable way. Highly recommended!",
    likes: 8,
    replies: 1,
    date: "1 week ago"
  },
  {
    id: 3,
    user: {
      name: "Charlie Brown",
      avatar: "/placeholder.svg?height=50&width=50"
    },
    text: "I'm halfway through the course and already feeling more confident in my web dev skills.",
    likes: 12,
    replies: 2,
    date: "3 days ago"
  }
]

export default function SelectedCourse() {
  const [expandedSection, setExpandedSection] = useState(0)

  const [newComment, setNewComment] = useState("")
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the comment to your backend
    console.log("Submitted comment:", newComment)
    setNewComment("")
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
            >
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{courseDetails.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{courseDetails.description}</p>
            </motion.div>
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
           

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardBody>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Progress</h2>
                  <Progress
                    size="md"
                    radius="sm"
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-purple-500 to-indigo-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                    value={33}
                    showValueLabel={true}
                  />
                </CardBody>
              </Card>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {courseSections.map((section, sectionIndex) => (
                <motion.div key={sectionIndex} variants={itemVariants} className="mb-6">
                  <Card>
                    <CardBody>
                      <motion.div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setExpandedSection(expandedSection === sectionIndex ? -1 : sectionIndex)}
                      >
                        <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                        <motion.div
                          animate={{ rotate: expandedSection === sectionIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedSection === sectionIndex ? 'auto' : 0, opacity: expandedSection === sectionIndex ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {section.videos.map((video, videoIndex) => (
                          <motion.div
                            key={videoIndex}
                            className="flex items-center justify-between py-3 border-b last:border-b-0"
                            variants={itemVariants}
                          >
                            <div className="flex items-center">
                              {video.completed ? (
                                <CheckCircle className="text-green-500 mr-2" />
                              ) : video.locked ? (
                                <Lock className="text-gray-400 mr-2" />
                              ) : (
                                <Play className="text-purple-600 mr-2" />
                              )}
                              <span className={`${video.locked ? 'text-gray-400' : 'text-gray-700'}`}>{video.title}</span>
                            </div>
                            <span className="text-gray-500">{video.duration}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Course Comments</h2>
              <Card>
                <CardBody>
                  <form onSubmit={handleCommentSubmit} className="mb-6">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="mb-4"
                    />
                    <Button type="submit" color="primary">
                      Post Comment
                    </Button>
                  </form>
                  <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    {comments.map((comment) => (
                      <motion.div key={comment.id} variants={itemVariants} className="mb-6">
                        <div className="flex items-start space-x-4">
                          <Avatar src={comment.user.avatar} size="lg" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-800">{comment.user.name}</h3>
                              <span className="text-sm text-gray-500">{comment.date}</span>
                            </div>
                            <p className="text-gray-600 mt-1">{comment.text}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <Button
                                size="sm"
                                variant="light"
                                startContent={<ThumbsUp size={16} />}
                              >
                                {comment.likes}
                              </Button>
                              <Button
                                size="sm"
                                variant="light"
                                startContent={<MessageSquare size={16} />}
                              >
                                {comment.replies}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          </div>

          {/* Side Panel */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardBody>
                  <div className="mb-6">
                    <img src="/placeholder.svg?height=200&width=400" alt="Course Cover" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <div className="flex items-center mb-2">
                      <Avatar src={courseDetails.author.avatar} size="lg" className="mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-800">{courseDetails.author.name}</h3>
                        <p className="text-sm text-gray-600">{courseDetails.author.title}</p>
                      </div>
                    </div>
                  </div>
                  <Divider className="my-4" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="text-yellow-400 mr-2" />
                        <span className="font-semibold">{courseDetails.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="text-gray-400 mr-2" />
                        <span>{courseDetails.students.toLocaleString()} students</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-gray-400 mr-2" />
                      <span>{courseDetails.totalHours} total hours</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Last updated: {courseDetails.lastUpdated}</p>
                      <p className="text-sm text-gray-600">Language: {courseDetails.language}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Skill level</p>
                      <p className="text-sm text-gray-600">{courseDetails.skillLevel}</p>
                    </div>
                    {courseDetails.certificate && (
                      <div className="flex items-center">
                        <Award className="text-purple-600 mr-2" />
                        <span className="text-sm">Certificate of completion</span>
                      </div>
                    )}
                  </div>
                  <Divider className="my-4" />
                  <div>
                    <h4 className="font-semibold mb-2">Topics covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {courseDetails.topics.map((topic, index) => (
                        <Chip key={index} color="primary" variant="flat">{topic}</Chip>
                      ))}
                    </div>
                  </div>
                  <Button className='bg-gradient-to-r from-purple-500 to-indigo-500 mt-7 text-white'>Buy Course</Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>

















    
     
      











      </div>
    </div>
  )
}
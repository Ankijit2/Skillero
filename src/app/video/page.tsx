'use client'

import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Avatar, Button, Progress, Textarea } from "@nextui-org/react"
import { Play, Pause, SkipForward, Volume2, Maximize, ThumbsUp, MessageSquare, Share2, Send, CheckCircle } from 'lucide-react'

const courseVideos = [
  { id: 1, title: "Introduction to Web Development", duration: "10:30", completed: true },
  { id: 2, title: "HTML Basics", duration: "15:45", completed: true },
  { id: 3, title: "CSS Fundamentals", duration: "20:15", current: true },
  { id: 4, title: "JavaScript Essentials", duration: "25:10" },
  { id: 5, title: "Responsive Web Design", duration: "18:30" },
  { id: 6, title: "Introduction to React", duration: "30:00" },
  { id: 7, title: "State Management in React", duration: "22:45" },
  { id: 8, title: "Building a Full-Stack Application", duration: "45:00" },
  { id: 9, title: "Deployment and Hosting", duration: "15:20" },
  { id: 10, title: "Course Wrap-up and Next Steps", duration: "10:00" },
]

const comments = [
  { id: 1, user: "Alice", avatar: "/placeholder.svg?height=40&width=40", text: "Great explanation of CSS fundamentals!", timestamp: "2 days ago" },
  { id: 2, user: "Bob", avatar: "/placeholder.svg?height=40&width=40", text: "I'm loving this course so far. Can't wait for the React section!", timestamp: "1 day ago" },
  { id: 3, user: "Charlie", avatar: "/placeholder.svg?height=40&width=40", text: "Could you explain the box model in more detail?", timestamp: "5 hours ago" },
]

export default function CourseVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(courseVideos.find(video => video.current) || courseVideos[0])
  const [newComment, setNewComment] = useState("")

  const togglePlay = () => setIsPlaying(!isPlaying)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted comment:", newComment)
    setNewComment("")
  }
  const VideoCard = useCallback(({ video, isMobile = false }) => (
    <Card
      isPressable
      onPress={() => setCurrentVideo(video)}
      className={`w-full ${video.id === currentVideo.id ? 'border-l-4 border-blue-500' : ''}`}
    >
      <CardBody className="p-2">
        <div className="flex items-center space-x-3">
          <div className="relative w-24 h-16 flex-shrink-0">
            <img
              src="/placeholder.svg?height=80&width=120"
              alt={video.title}
              className="w-full h-full object-cover rounded"
            />
            {video.completed && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                <CheckCircle className="text-white" size={16} />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold truncate">{video.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{video.duration}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  ), [currentVideo])
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="lg:w-2/3 xl:w-3/4">
          {/* Video Player */}
          <div className="relative pt-[56.25%] bg-black mx-auto w-full ">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Video Placeholder"
                className="w-full h-full object-cover"
              />
              <Button
                isIconOnly
                className="absolute bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                size="lg"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </div>
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <Button isIconOnly variant="light" size="sm">
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </Button>
                  <Button isIconOnly variant="light" size="sm">
                    <SkipForward size={16} />
                  </Button>
                  <Button isIconOnly variant="light" size="sm">
                    <Volume2 size={16} />
                  </Button>
                  <span className="text-xs sm:text-sm">3:45 / 20:15</span>
                </div>
                <Button isIconOnly variant="light" size="sm">
                  <Maximize size={16} />
                </Button>
              </div>
              <Progress
                size="sm"
                radius="none"
                classNames={{
                  base: "max-w-full mt-2",
                  indicator: "bg-red-500",
                }}
                value={33}
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="p-4">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">{currentVideo.title}</h1>
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <Avatar src="/placeholder.svg?height=50&width=50" size="md" />
                <div>
                  <h2 className="font-semibold">Jane Doe</h2>
                  <p className="text-xs sm:text-sm text-gray-500">Web Development Instructor</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="flat" size="sm" startContent={<ThumbsUp size={16} />}>
                  Like
                </Button>
                <Button variant="flat" size="sm" startContent={<MessageSquare size={16} />}>
                  Comment
                </Button>
                <Button variant="flat" size="sm" startContent={<Share2 size={16} />}>
                  Share
                </Button>
              </div>
            </div>
            <Card>
              <CardBody>
                <p className="text-sm sm:text-base text-gray-700">
                  In this video, we dive deep into CSS fundamentals. You'll learn about selectors, 
                  the box model, layout techniques, and responsive design principles. By the end of 
                  this lesson, you'll have a solid foundation in CSS to style your web pages effectively.
                </p>
              </CardBody>
            </Card>

            {/* Course Videos (Mobile View) */}
            <div className="mt-6 lg:hidden">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Course Videos</h3>
              <div className="space-y-4">
                {courseVideos.map((video) => (
                  <VideoCard key={video.id} video={video} isMobile={true} />
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Comments</h3>
              <form onSubmit={handleCommentSubmit} className="mb-6">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-2"
                />
                <Button type="submit" color="primary" size="sm" endContent={<Send size={16} />}>
                  Post Comment
                </Button>
              </form>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <Avatar src={comment.avatar} size="sm" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm">{comment.user}</span>
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel (Desktop View) */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/4 p-4 bg-white overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Course Videos</h2>
          <div className="space-y-4 ">
            {courseVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
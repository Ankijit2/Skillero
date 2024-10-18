'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  Progress,
  Chip,
  Avatar,
  Divider,
  Button,
  Textarea,
  Accordion,
  AccordionItem
} from '@nextui-org/react';
import {
  Play,
  CheckCircle,
  Lock,
  Clock,
  Users,
  Star,
  Award,
  ThumbsUp,
  MessageSquare,
  PencilLine,
  Trash2

} from 'lucide-react';

const courseDetails = {
  title: 'Advanced Web Development Masterclass',
  description:
    'Master modern web development techniques, frameworks, and best practices',
  author: {
    name: 'Jane Doe',
    avatar: '/placeholder.svg?height=100&width=100',
    title: 'Senior Web Developer',
  },
  rating: 4.8,
  students: 15234,
  lastUpdated: 'June 2023',
  language: 'English',
  totalHours: 42,
  skillLevel: 'Intermediate to Advanced',
  certificate: true,
  topics: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'GraphQL',
    'Responsive Design',
    'Web Performance',
  ],
};

const courseSections = [
  {
    title: 'Getting Started with Modern Web Development',
    videos: [
      {
        title: 'Course Introduction and Overview',
        duration: '10:30',
        completed: true,
      },
      {
        title: 'Setting Up Your Development Environment',
        duration: '15:45',
        completed: true,
      },
      {
        title: 'Web Development in 2023: Trends and Technologies',
        duration: '20:15',
        completed: false,
      },
    ],
  },
  {
    title: 'Advanced HTML5 and CSS3 Techniques',
    videos: [
      {
        title: 'Semantic HTML and Accessibility Best Practices',
        duration: '25:10',
        completed: false,
      },
      {
        title: 'CSS Grid and Flexbox Mastery',
        duration: '35:30',
        completed: false,
      },
      {
        title: 'CSS Animations and Transitions',
        duration: '28:45',
        completed: false,
      },
    ],
  },
  {
    title: 'JavaScript Deep Dive',
    videos: [
      {
        title: 'ES6+ Features and Syntax',
        duration: '40:20',
        completed: false,
      },
      {
        title: 'Asynchronous JavaScript: Promises and Async/Await',
        duration: '45:15',
        completed: false,
      },
      {
        title: 'Functional Programming in JavaScript',
        duration: '38:30',
        completed: false,
      },
    ],
  },
  {
    title: 'React Framework Mastery',
    videos: [
      { title: 'React Hooks In-Depth', duration: '50:00', locked: true },
      {
        title: 'State Management with Redux and Context API',
        duration: '55:30',
        locked: true,
      },
      {
        title: 'Building Scalable React Applications',
        duration: '60:15',
        locked: true,
      },
    ],
  },
  {
    title: 'Backend Development with Node.js',
    videos: [
      {
        title: 'RESTful API Design and Implementation',
        duration: '45:20',
        locked: true,
      },
      {
        title: 'Authentication and Authorization Strategies',
        duration: '40:10',
        locked: true,
      },
      {
        title: 'Database Integration: SQL and NoSQL',
        duration: '50:45',
        locked: true,
      },
    ],
  },
];
const comments = [
  {
    id: 1,
    user: {
      name: 'Alice Johnson',
      avatar: '/placeholder.svg?height=50&width=50',
    },
    text: "This course is amazing! I've learned so much about modern web development techniques.",
    likes: 15,
    replies: 3,
    date: '2 days ago',
  },
  {
    id: 2,
    user: {
      name: 'Bob Smith',
      avatar: '/placeholder.svg?height=50&width=50',
    },
    text: 'The instructor explains complex concepts in a very understandable way. Highly recommended!',
    likes: 8,
    replies: 1,
    date: '1 week ago',
  },
  {
    id: 3,
    user: {
      name: 'Charlie Brown',
      avatar: '/placeholder.svg?height=50&width=50',
    },
    text: "I'm halfway through the course and already feeling more confident in my web dev skills.",
    likes: 12,
    replies: 2,
    date: '3 days ago',
  },
];

export default function SelectedCourse() {
  const [expandedSection, setExpandedSection] = useState(0);

  const [newComment, setNewComment] = useState('');
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the comment to your backend
    console.log('Submitted comment:', newComment);
    setNewComment('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
         
          className=' flex justify-between mb-6 gap-3'
        >
            <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='mb-4 text-4xl font-bold text-gray-800'>
            {courseDetails.title}
          </h1>
          <p className='mb-8 text-xl text-gray-600'>
            {courseDetails.description}
          </p>
        </motion.div>
          <Button className=''>Publish</Button>
        </motion.div>
        
        <div className='flex flex-col-reverse lg:flex-row lg:space-x-8'>
          {/* Main Content */}
          <div className='lg:w-2/3'>
          <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
            
          <Accordion variant='shadow'>
      {courseSections.map((section, sectionIndex) => (
        <AccordionItem
        
          key={sectionIndex}
          title={section.title}
            >
            {section.videos.map((video, videoIndex) => (
           
              <motion.div
                key={videoIndex}
                className="flex items-center justify-between border-b py-3 last:border-b-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                <div style={{ display: "flex", gap: "10px" }}>
                    {/* Pencil Button */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                        display: "inline-block",
                        padding: "8px",
                        borderRadius: "8px",
                        backgroundColor: "#f0f0f0",
                        cursor: "pointer",
                        }}
                    >
                        <PencilLine width={16} height={16} />
                    </motion.div>

                    {/* Trash Button */}
                    <motion.div
                        whileHover={{ scale: 1.1, backgroundColor: "#ff4d4d" }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                        display: "inline-block",
                        padding: "8px",
                        borderRadius: "8px",
                        backgroundColor: "#f0f0f0",
                        cursor: "pointer",
                        }}
                    >
                        <Trash2 width={16} height={16} />
                    </motion.div>
                    </div>
                 
                 
                  <span
                    
                  >
                    {video.title}
                  </span>
                </div>
                <span className="text-gray-500">{video.duration}</span>
              </motion.div>
              
             
            ))}
            <Button className='mt-7 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white'>Add videos</Button>
         
        </AccordionItem>
      ))}
    </Accordion>
    <Button className='mt-7 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white'>Add section</Button>
    </motion.div>
          </div>

          {/* Side Panel */}
          <div className='mt-8 lg:mt-0 lg:w-1/3'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>

                <CardBody>
                    
                    <div></div>
                  <div className='mb-6'>
                    <img
                      src='/placeholder.svg?height=200&width=400'
                      alt='Course Cover'
                      className='mb-4 h-48 w-full rounded-lg object-cover'
                    />
                    <div className='mb-2 flex items-center'>
                      <Avatar
                        src={courseDetails.author.avatar}
                        size='lg'
                        className='mr-4'
                      />
                      <div>
                        <h3 className='font-semibold text-gray-800'>
                          {courseDetails.author.name}
                        </h3>
                        <p className='text-sm text-gray-600'>
                          {courseDetails.author.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Divider className='my-4' />
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                        <Star className='mr-2 text-yellow-400' />
                        <span className='font-semibold'>
                          {courseDetails.rating}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <Users className='mr-2 text-gray-400' />
                        <span>
                          {courseDetails.students.toLocaleString()} students
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <Clock className='mr-2 text-gray-400' />
                      <span>{courseDetails.totalHours} total hours</span>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>
                        Last updated: {courseDetails.lastUpdated}
                      </p>
                      <p className='text-sm text-gray-600'>
                        Language: {courseDetails.language}
                      </p>
                    </div>
                    <div>
                      <p className='font-semibold'>Skill level</p>
                      <p className='text-sm text-gray-600'>
                        {courseDetails.skillLevel}
                      </p>
                    </div>
                    {courseDetails.certificate && (
                      <div className='flex items-center'>
                        <Award className='mr-2 text-purple-600' />
                        <span className='text-sm'>
                          Certificate of completion
                        </span>
                      </div>
                    )}
                  </div>
                  <Divider className='my-4' />
                  <div>
                    <h4 className='mb-2 font-semibold'>Tags</h4>
                    <div className='flex flex-wrap gap-2'>
                      {courseDetails.topics.map((topic, index) => (
                        <Chip key={index} color='primary' variant='flat'>
                          {topic}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <Button className='mt-7 bg-gradient-to-r from-purple-500 to-indigo-500 text-white'>
                    Edit details
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

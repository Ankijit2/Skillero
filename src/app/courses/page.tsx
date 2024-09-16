// 'use client'

// import { Card, CardBody, CardHeader } from "@nextui-org/card"
// import { Avatar } from "@nextui-org/avatar"
// import { Progress } from "@nextui-org/progress"
// import { Button } from "@nextui-org/button"
// import { Tabs, Tab } from "@nextui-org/tabs"
// import { Chip } from "@nextui-org/chip"

// import { FaClock as Clock } from "react-icons/fa";
// import { FaBookOpen as BookOpen } from "react-icons/fa6";
// import { IoPlayCircleOutline as PlayCircle } from "react-icons/io5";
// import { TbUsers as Users} from "react-icons/tb";

// export default function CoursePage() {
//   return (
//     <div className="min-h-screen bg-background">
//     <header className="bg-primary text-primary-foreground py-8 sm:py-12">
//       <div className="container mx-auto px-4">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-4">Introduction to React and Next.js</h1>
//         <div className="flex flex-wrap items-center gap-2 sm:gap-4">
//           <Chip size="sm" startContent={<Clock size={16} />} variant="flat">10 hours</Chip>
//           <Chip size="sm" startContent={<BookOpen size={16} />} variant="flat">12 lessons</Chip>
//           <Chip size="sm" startContent={<Users size={16} />} variant="flat">1,234 enrolled</Chip>
//         </div>
//       </div>
//     </header>
//     <main className="container mx-auto px-4 py-6 sm:py-8">
//       <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
//         <div className="lg:col-span-2">
//           <Tabs aria-label="Course Information" className="mb-6 sm:mb-8">
//             <Tab key="overview" title="Overview">
//               <Card>
//                 <CardHeader>
//                   <h3 className="text-lg font-semibold">Course Description</h3>
//                 </CardHeader>
//                 <CardBody>
//                   <p className="text-sm sm:text-base">
//                     This comprehensive course will teach you the fundamentals of React and Next.js,
//                     two powerful tools for building modern web applications. You'll learn how to create
//                     interactive UIs, manage state, work with APIs, and deploy your applications.
//                   </p>
//                 </CardBody>
//               </Card>
//             </Tab>
//             <Tab key="curriculum" title="Curriculum">
//               <Card>
//                 <CardHeader>
//                   <h3 className="text-lg font-semibold">Course Curriculum</h3>
//                 </CardHeader>
//                 <CardBody>
//                   <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
//                     <li>Introduction to React</li>
//                     <li>Components and Props</li>
//                     <li>State and Lifecycle</li>
//                     <li>Handling Events</li>
//                     <li>Introduction to Next.js</li>
//                     <li>Routing in Next.js</li>
//                     <li>API Routes</li>
//                     <li>Server-Side Rendering</li>
//                     <li>Static Site Generation</li>
//                     <li>Deploying Next.js Applications</li>
//                   </ol>
//                 </CardBody>
//               </Card>
//             </Tab>
//             <Tab key="instructor" title="Instructor">
//               <Card>
//                 <CardHeader>
//                   <h3 className="text-lg font-semibold">Your Instructor</h3>
//                 </CardHeader>
//                 <CardBody>
//                   <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
//                     <Avatar src="/placeholder.svg?height=80&width=80" className="w-20 h-20" alt="Instructor" />
//                     <div className="text-center sm:text-left">
//                       <h4 className="text-lg font-semibold">Jane Doe</h4>
//                       <p className="text-sm text-default-500">
//                         Senior Frontend Developer with 10+ years of experience in React and Next.js
//                       </p>
//                     </div>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Tab>
//           </Tabs>
//         </div>
//         <div className="lg:row-start-1">
//           <Card>
//             <CardHeader>
//               <h3 className="text-lg font-semibold">Course Progress</h3>
//             </CardHeader>
//             <CardBody>
//               <Progress value={33} className="mb-2" />
//               <p className="text-sm text-default-500 mb-4">4 of 12 lessons completed</p>
//               <Button color="primary" className="w-full mb-4" startContent={<PlayCircle size={18} />}>
//                 Continue Learning
//               </Button>
//               <div className="text-sm text-default-500">
//                 <p>Next lesson: Components and Props</p>
//                 <p>Estimated time: 45 minutes</p>
//               </div>
//             </CardBody>
//           </Card>
//         </div>
//       </div>
//     </main>
//   </div>
//   )
// }

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page
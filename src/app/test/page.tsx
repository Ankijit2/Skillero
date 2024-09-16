'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, CardFooter, Image, Input } from "@nextui-org/react"
import { FaTruck, FaWarehouse, FaShoppingCart, FaHandshake, FaChartLine, FaUserTie, FaSearch, FaTags, FaShippingFast, FaPercent, FaAward, FaHeadset, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const categories = [
    { icon: FaTruck, name: "Logistics" },
    { icon: FaWarehouse, name: "Inventory" },
    { icon: FaShoppingCart, name: "Bulk Orders" },
    { icon: FaHandshake, name: "Partnerships" },
    { icon: FaChartLine, name: "Market Analysis" },
    { icon: FaUserTie, name: "Account Management" }
  ]

  const offers = [
    { icon: FaTags, name: "Competitive Wholesale Pricing" },
    { icon: FaShippingFast, name: "Fast Delivery" },
    { icon: FaPercent, name: "Bulk Discounts" },
    { icon: FaAward, name: "Quality Assurance" },
    { icon: FaHeadset, name: "24/7 Support" }
  ]

  const reviews = [
    { name: "John Doe", company: "Retail Corp", text: "Setu Upskills transformed our supply chain efficiency!" },
    { name: "Jane Smith", company: "Mega Mart", text: "The product quality and pricing are unbeatable." },
    { name: "Alex Johnson", company: "Tech Distributors", text: "Their market insights helped us stay ahead of trends." },
    { name: "Emily Brown", company: "Fashion Outlet", text: "Setu Upskills has been a game-changer for our business growth." },
    { name: "Michael Lee", company: "Gadget World", text: "The customer support is exceptional. Always there when we need them." }
  ]

  const bestSellers = [
    { name: "Premium Smartphones", image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=healthy-tomatoes-agriculture-533280.jpg&fm=jpg" },
    { name: "4K Smart TVs", image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=healthy-tomatoes-agriculture-533280.jpg&fm=jpg" },
    { name: "Wireless Earbuds", image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=healthy-tomatoes-agriculture-533280.jpg&fm=jpg" }
  ]

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar maxWidth="full" className="bg-black text-white">
        <NavbarBrand>
          <Image src="/placeholder.svg?height=40&width=40" alt="Setu Upskills Logo" width={40} height={40} />
          <p className="font-bold text-inherit ml-2">Setu Upskills</p>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem>
            <motion.div whileHover="hover" variants={menuItemVariants}>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                Home
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div whileHover="hover" variants={menuItemVariants}>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                Products
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div whileHover="hover" variants={menuItemVariants}>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                Wholesale
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <motion.div whileHover="hover" variants={menuItemVariants}>
              <Link href="#" className="text-white hover:text-red-500 transition-colors">
                Contact
              </Link>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-white",
              }}
              placeholder="Search"
              size="sm"
              startContent={<FaSearch className="text-black pointer-events-none flex-shrink-0" />}
              type="search"
            />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} href="#" className="bg-red-600 text-white hover:bg-red-700 transition-colors">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem className="lg:hidden">
            <Button isIconOnly variant="light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </motion.div>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-black text-white z-50 overflow-y-auto"
          >
            <div className="p-4 flex flex-col space-y-4">
              <div className="flex justify-end">
                <Button isIconOnly variant="light" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-0.5 bg-white rotate-45 translate-y-0.5" />
                    <div className="w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5" />
                  </motion.div>
                </Button>
              </div>
              <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
                <Link href="#" className="text-lg text-white hover:text-red-500 transition-colors">Home</Link>
              </motion.div>
              <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
                <Link href="#" className="text-lg text-white hover:text-red-500 transition-colors">Products</Link>
              </motion.div>
              <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
                <Link href="#" className="text-lg text-white hover:text-red-500 transition-colors">Wholesale</Link>
              </motion.div>
              <motion.div variants={menuItemVariants} initial="hidden" animate="visible" exit="hidden">
                <Link href="#" className="text-lg text-white hover:text-red-500 transition-colors">Contact</Link>
              </motion.div>
              <Input
                classNames={{
                  base: "max-w-full h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper: "h-full font-normal text-default-500 bg-white",
                }}
                placeholder="Search"
                size="sm"
                startContent={<FaSearch className="text-black pointer-events-none flex-shrink-0" />}
                type="search"
              />
              <Button href="#" className="bg-red-600 text-white hover:bg-red-700 transition-colors">
                Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full">
        {/* Hero Section */}
        <section 
          className="text-center py-20 bg-cover bg-center w-full"
         style={{ backgroundImage: `url("https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=healthy-tomatoes-agriculture-533280.jpg&fm=jpg")` }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Empower Your Retail Business</h1>
            <p className="text-xl mb-8 text-white">Access top-quality products at competitive wholesale prices</p>
            <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors">Explore Products</Button>
          </div>
        </section>

        {/* How to Start Section */}
        <section className="py-16 bg-gray-100 w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">How to Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="font-bold mb-2 text-center text-black">Register Your Business</h3>
                <p className="text-center text-gray-600">Create an account and verify your business credentials</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="font-bold mb-2 text-center text-black">Browse Our Catalog</h3>
                <p className="text-center text-gray-600">Explore our wide range of products at wholesale prices</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="font-bold mb-2 text-center text-black">Place Your Order</h3>
                <p className="text-center text-gray-600">Select products, quantities, and complete your purchase</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="text-4xl mb-2 mx-auto text-red-600" />
                  <h3 className="font-bold text-black">{category.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 bg-red-600 text-white w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {offers.map((offer, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <offer.icon className="text-4xl mb-2 mx-auto text-red-600" />
                  <p className="font-bold text-red-600">{offer.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Success Stories</h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto"
                >
                  <p className="mb-4 text-gray-600 text-lg">{reviews[currentReview].text}</p>
                  <p className="font-bold text-black">{reviews[currentReview].name}</p>
                  <p className="text-sm text-red-600">{reviews[currentReview].company}</p>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                aria-label="Previous review"
              >
                <FaChevronLeft className="text-red-600" />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                aria-label="Next review"
              >
                <FaChevronRight className="text-red-600" />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === currentReview ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16 bg-gray-100 w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Best-Selling Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bestSellers.map((product, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card>
                    <CardBody className="p-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="p-3"
                      />
                    </CardBody>
                    <CardFooter className="text-center bg-black">
                      <h3 className="font-bold text-white">{product.name}</h3>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Setu Upskills</h3>
              <p>Your trusted B2B retail partner</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul>
                <li><Link href="#" className="text-white hover:text-red-500 transition-colors">Home</Link></li>
                <li><Link href="#" className="text-white hover:text-red-500 transition-colors">Products</Link></li>
                <li><Link href="#" className="text-white hover:text-red-500 transition-colors">Wholesale</Link></li>
                <li><Link href="#" className="text-white hover:text-red-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p>Email: sales@setupskills.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-red-500 transition-colors">Facebook</Link>
                <Link href="#" className="text-white hover:text-red-500 transition-colors">Twitter</Link>
                <Link href="#" className="text-white hover:text-red-500 transition-colors">LinkedIn</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Setu Upskills. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
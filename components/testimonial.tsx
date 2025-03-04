"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  image: string
}

export function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <motion.div
      className="bg-black p-8 border border-stone-800 hover:border-stone-700 transition-colors"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 text-stone-400">&quot;</div>

        <p className="text-lg italic mb-8 flex-grow">{quote}</p>

        <div className="flex items-center">
          <motion.div className="relative w-12 h-12 rounded-full overflow-hidden mr-4" whileHover={{ scale: 1.1 }}>
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </motion.div>

          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-stone-400">{role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


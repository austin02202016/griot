"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      className="border border-stone-800 p-6 hover:border-stone-700 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="mb-4">
        <Icon className="h-8 w-8 text-stone-300" />
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-stone-300">{description}</p>
    </motion.div>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface ContactFormProps {
  buttonClass: string
}

export function ContactForm({ buttonClass }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <motion.div
      className="bg-stone-950 border border-stone-800 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {submitted ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-light mb-4">Message Received</h3>
          <p className="text-stone-300">Thanks for reaching out. We&apos;ll be in touch soon to discuss your story.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-stone-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-stone-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-stone-300">
              Tell Us About Yourself
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
              placeholder="Tell us about yourself, your goals, and which platforms you need help with (Twitter, LinkedIn, Instagram, etc.)..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${buttonClass} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "Sending..." : "Craft Your Narrative"}
          </motion.button>
        </form>
      )}
    </motion.div>
  )
}


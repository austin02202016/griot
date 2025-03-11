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
    goal: "",
    otherGoal: "",
    acv: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const goals = [
    { value: "", label: "Select your primary goal" },
    { value: "sales", label: "Increase Sales/Close More Deals" },
    { value: "leads", label: "Generate More Leads" },
    { value: "visibility", label: "Grow Brand Visibility" },
    { value: "thought-leadership", label: "Build Thought Leadership" },
    { value: "network", label: "Expand Professional Network" },
    { value: "other", label: "Other" },
  ]

  const isBusinessGoal = (goal: string) => {
    return ["sales", "leads"].includes(goal)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    setFormData({ name: "", email: "", goal: "", otherGoal: "", acv: "", message: "" })

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
            <label htmlFor="goal" className="block mb-2 text-stone-300">
              What&apos;s your primary goal?
            </label>
            <select
              id="goal"
              name="goal"
              required
              value={formData.goal}
              onChange={handleChange}
              className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
            >
              {goals.map((goal) => (
                <option key={goal.value} value={goal.value}>
                  {goal.label}
                </option>
              ))}
            </select>
          </div>

          {formData.goal === "other" && (
            <div>
              <label htmlFor="otherGoal" className="block mb-2 text-stone-300">
                Please specify your goal
              </label>
              <input
                type="text"
                id="otherGoal"
                name="otherGoal"
                required
                value={formData.otherGoal}
                onChange={handleChange}
                className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
              />
            </div>
          )}

          {isBusinessGoal(formData.goal) && (
            <div>
              <label htmlFor="acv" className="block mb-2 text-stone-300">
                What&apos;s your average contract value?
              </label>
              <select
                id="acv"
                name="acv"
                required
                value={formData.acv}
                onChange={handleChange}
                className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
              >
                <option value="">Select your ACV range</option>
                <option value="0-500">$0 - $500</option>
                <option value="500-1k">$500 - $1,000</option>
                <option value="1k-2k">$1,000 - $2,000</option>
                <option value="2k-3k">$2,000 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value=">100k">More than $100,000</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="message" className="block mb-2 text-stone-300">
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-black border border-stone-800 p-3 focus:border-stone-600 focus:outline-none transition-colors"
              placeholder="Tell us about yourself and which platforms you need help with (Twitter, LinkedIn, Instagram, etc.)..."
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


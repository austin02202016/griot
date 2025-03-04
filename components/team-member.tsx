"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

interface SocialLinks {
  linkedin?: string
  twitter?: string
}

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
  socialLinks: SocialLinks
}

export function TeamMember({ name, role, image, description, socialLinks }: TeamMemberProps) {
  return (
    <motion.div
      className="bg-black p-8 rounded-lg border border-stone-800 hover:border-stone-700 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex items-center mb-6">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-stone-400">{role}</p>
        </div>
      </div>
      <p className="text-stone-300 mb-6 leading-relaxed">{description}</p>
      <div className="flex space-x-4">
        {socialLinks.linkedin && (
          <Link href={socialLinks.linkedin} className="text-stone-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
        )}
        {socialLinks.twitter && (
          <Link href={socialLinks.twitter} className="text-stone-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}


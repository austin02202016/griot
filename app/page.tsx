"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { TeamMember } from "@/components/team-member"
import { Testimonial } from "@/components/testimonial"
import { ServiceCard } from "@/components/service-card"
import { Twitter, Linkedin, Instagram, Pen, LayoutGrid } from "lucide-react"
import { Users, Eye, BarChart3, type LucideIcon } from "lucide-react"
import { GriotAnimation } from "@/components/GriotAnimation"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const buttonClasses =
  "inline-block px-8 py-3 bg-stone-800 text-stone-100 rounded-full text-lg font-light tracking-wide hover:bg-stone-700 transition-colors duration-300 shadow-lg hover:shadow-xl"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-stone-200 font-serif">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Logo for hero section */}
        <div className="absolute top-8 left-8 z-30 w-24">
          <Image
            src="/griot_logo.png"
            alt="Griot"
            width={48}
            height={20}
            className="w-full h-auto"
          />
        </div>

        {/* Rest of hero section content... */}
        <div className="absolute inset-0 z-0">
          {/* Simple black background */}
          <div className="absolute inset-0 bg-black"></div>
        </div>

        {/* Content overlaying the black background */}
        <motion.div
          className="container mx-auto px-4 z-20 relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              Your story, <span className="italic">more impact</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-80 mt-6 leading-relaxed">
              We are the griots of the digital age, crafting narratives that don&apos;t just tell your story—they amplify
              your voice and skyrocket your engagement.
            </p>
            <p className="text-lg md:text-xl font-light text-stone-300">
              50M+ views generated • 8 Million Followers Managed • Endless Stories Told
            </p>
            <motion.div className="mt-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className={buttonClasses}>
                Amplify Your Presence
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 bg-stone-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">The Art of Digital Storytelling</h2>
                <p className="text-lg text-stone-300 leading-relaxed mb-6">
                  In West African tradition, griots were more than storytellers—they were the keepers of oral history,
                  the voice of wisdom, and the thread that connected communities across generations. Their words had the
                  power to inspire, unite, and transform entire societies.
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  At Griot, we carry this powerful tradition into the digital realm. We don&apos;t just manage social media;
                  we craft narratives that resonate, amplify voices, and build engaged communities. Like the griots of
                  old, we help individuals make a lasting impact, but instead of gathering under a baobab tree, we bring
                  your audience together in the vast digital landscape.
                </p>
              </div>
              <div className="order-first md:order-last mb-8 md:mb-0">
                <GriotAnimation />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Our Storytelling Services
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <ServiceCard
              title="Twitter Management"
              description="We craft and schedule engaging tweets that capture your unique voice, growing your following and influence."
              icon={Twitter}
            />
            <ServiceCard
              title="LinkedIn Presence"
              description="Build your professional brand with thoughtful posts and articles, establishing your expertise in your field."
              icon={Linkedin}
            />
            <ServiceCard
              title="Instagram Storytelling"
              description="We create compelling scripts for your Instagram content, helping you connect visually with your audience."
              icon={Instagram}
            />
            <ServiceCard
              title="Comprehensive Strategy"
              description="Weekly performance reviews, content planning, and a personalized Notion dashboard to track your growth."
              icon={BarChart3}
            />
            <ServiceCard
              title="Tailored Communication"
              description="Custom stylesheets ensure every post sounds authentically like you across all platforms."
              icon={Pen}
            />
            <ServiceCard
              title="Website Design"
              description="As an additional service, we can build custom websites that showcase your personal brand with impact."
              icon={LayoutGrid}
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-stone-950">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <ImpactCard
              title="Instagram Growth"
              stat="9M+"
              description="Views generated for Proof of Concept on Instagram"
              icon={Instagram}
            />
            <ImpactCard
              title="Twitter Influence"
              stat="500k+"
              description="Combined followers for top-tier founders on Twitter"
              icon={Twitter}
            />
            <ImpactCard
              title="LinkedIn Expansion"
              stat="200k+"
              description="Combined LinkedIn followers for industry leaders"
              icon={Linkedin}
            />
            <ImpactCard
              title="Engagement Boost"
              stat="125%"
              description="Increase in post impressions for a personal LinkedIn account"
              icon={Eye}
            />
            <ImpactCard
              title="Follower Growth"
              stat="55%"
              description="Follower increase for a personal LinkedIn account in 90 days"
              icon={Users}
            />
            <ImpactCard
              title="Company Account Growth"
              stat="143%"
              description="Increase in post impressions for a company LinkedIn account"
              icon={BarChart3}
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-stone-950">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            The Voices Behind Your Voice
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <TeamMember
              name="Austin Kennedy"
              role="Co-founder, Fulfillment"
              image="/me.png"
              description="Grew Proof of Concept to over 8.5M views on Instagram. Produces content for 8M Followers across all accounts"
              socialLinks={{
                linkedin: "https://www.linkedin.com/in/austin-kennedy-836a83253/",
                twitter: "https://x.com/astnkennedy",
              }}
            />

            <TeamMember
              name="Tommy Potter"
              role="Co-founder, Account Executive"
              image="/tommy.png"
              description="A wordsmith extraordinaire with an uncanny ability to ask the right questions. Head of Power Hour - CIA for entrepreneurship"
              socialLinks={{
                linkedin: "https://www.linkedin.com/in/tommypotter/",
                twitter: "https://x.com/tommypotter_",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Voices We&apos;ve Amplified
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <Testimonial
              quote="Griot helped me get my newsletter off the ground. When presenting to an audience that's pretty large, I need to be very particular about what I post. They did great"
              author="Casper Capital"
              role="Content Creator with 6M Followers"
              image="/casper.jpg"
            />

            <Testimonial
              quote="Austin's been a friend of mine for a while now. From one copywriter to another - He's good"
              author="Jay Yang"
              role="186k on Instagram, 53k on Twitter, Head of Content to Noah Kagan"
              image="/jay.webp"
            />

            <Testimonial
              quote="Always struggled to find someone that can match my voice for Twitter and LinkedIn. These guys nailed it."
              author="Luke Clancy"
              role="Account Executive at Origami Agents"
              image="/luke.jpg"
            />

            <Testimonial
              quote="They work with speed. They completed a high quality website for us with just a few days and have been extremely responsive."
              author="Danny Koch"
              role="Operations at Innovo Markets"
              image="/danny.jpeg"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 bg-stone-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-center">Ready to Be Heard?</h2>
            <p className="text-lg text-stone-300 text-center mb-12 leading-relaxed">
              Let us take over your social media presence. You live your life, we&apos;ll tell your story across Twitter,
              LinkedIn, Instagram, and beyond.
            </p>

            <ContactForm buttonClass={buttonClasses} />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 bg-black text-stone-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-light">Griot</h3>
              <p className="mt-2">Your voice, amplified. Your time, reclaimed.</p>
            </div>

            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-stone-800 text-sm text-center">
            <p>© {new Date().getFullYear()} Griot. All stories matter.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

interface ImpactCardProps {
  title: string
  stat: string
  description: string
  icon: LucideIcon
}

function ImpactCard({ title, stat, description, icon: Icon }: ImpactCardProps) {
  return (
    <motion.div
      className="bg-black p-6 rounded-lg border border-stone-800 hover:border-stone-700 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2 text-stone-400" />
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="text-4xl font-bold mb-2 text-stone-100">{stat}</div>
      <p className="text-stone-400">{description}</p>
    </motion.div>
  )
}


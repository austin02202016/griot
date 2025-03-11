import type { ReactNode } from "react"
import Link from "next/link"
import { Cormorant_Garamond } from "next/font/google"
import { FileText, Home, Users } from "lucide-react"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from '@clerk/nextjs'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <div className={`${cormorant.className} flex h-screen overflow-hidden bg-black text-stone-200`}>
          <aside className="w-64 flex-shrink-0 bg-stone-950 p-6 flex flex-col overflow-y-auto">
            <h2 className="text-2xl font-light mb-8">Griot Dashboard</h2>
            <nav className="space-y-4">
              <NavLink href="/dashboard" icon={Users}>
                Overview
              </NavLink>
              <NavLink href="/dashboard/stylesheet" icon={FileText}>
                Stylesheet
              </NavLink>
              <NavLink href="/" icon={Home}>
                Back to Website
              </NavLink>
            </nav>
          </aside>
          <main className="flex-grow overflow-y-auto relative p-8">
            <div className="absolute top-8 right-8 z-10 flex items-center space-x-4">
              <UserButton />
            </div>
            {children}
          </main>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  )
}

const NavLink = ({ href, icon: Icon, children }: { href: string, icon: React.ElementType, children: ReactNode }) => (
  <Link
    href={href}
    className="flex items-center space-x-3 text-stone-400 hover:text-stone-200 transition-colors duration-200"
  >
    <Icon size={20} />
    <span className="text-lg">{children}</span>
  </Link>
)
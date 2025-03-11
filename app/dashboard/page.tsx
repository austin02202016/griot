"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, RefreshCw, Eye, Bookmark, ArrowUpDown } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LabelList,
} from "recharts"
import Image from "next/image"

interface Tweet {
  id: string
  text: string
  createdAt: string
  retweetCount: number
  replyCount: number
  likeCount: number
  viewCount: number
  bookmarkCount: number
  author: {
    name: string
  }
}

interface FollowerData {
  month: string
  followers: number
}

interface GrowthData {
  metric: string
  growth: number
}

interface NotableFollower {
  name: string
  username: string
  avatarUrl: string
  followerCount: number
  reason: string
}

const Dashboard = () => {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [firstName, setFirstName] = useState<string>("")
  const [followerData, setFollowerData] = useState<FollowerData[]>([])
  const [growthData, setGrowthData] = useState<GrowthData[]>([])
  const [notableFollowers, setNotableFollowers] = useState<NotableFollower[]>([])
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'ascending' | 'descending' } | null>(null)

  useEffect(() => {
    fetch("/api/tweets")
      .then((res) => res.json())
      .then((data: Tweet[]) => {
        setTweets(data)
        if (data.length > 0) {
          setFirstName(data[0].author.name.split(" ")[0]) // Extract first name
          // Mock data for other sections
          const followerCount = 100000 // Mock follower count
          setFollowerData([
            { month: "Jan", followers: followerCount - 20000 },
            { month: "Feb", followers: followerCount - 15000 },
            { month: "Mar", followers: followerCount - 10000 },
            { month: "Apr", followers: followerCount - 5000 },
            { month: "May", followers: followerCount - 2000 },
            { month: "Jun", followers: followerCount },
          ])

          setGrowthData([
            { metric: "Followers", growth: 15.3 },
            { metric: "Impressions", growth: 22.7 },
            { metric: "Engagement", growth: 8.5 },
            { metric: "Click-through", growth: 12.1 },
          ])

          setNotableFollowers([
            {
              name: "Tech Influencer",
              username: "techinfl",
              avatarUrl: "/placeholder.svg",
              followerCount: 50000,
              reason: "High-profile tech personality",
            },
            {
              name: "Potential Client",
              username: "clientxyz",
              avatarUrl: "/placeholder.svg",
              followerCount: 5000,
              reason: "Matches target customer profile",
            },
            {
              name: "Industry Leader",
              username: "indleader",
              avatarUrl: "/placeholder.svg",
              followerCount: 100000,
              reason: "CEO of major tech company",
            },
          ])
        }
      })
  }, [])

  const sortedTweets = [...tweets]
  if (sortConfig !== null) {
    sortedTweets.sort((a, b) => {
        const key = sortConfig.key as keyof Tweet; // Type assertion
            if (a[key] < b[key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
            })
  }

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return (
    <div className="space-y-8 bg-black text-stone-200 p-4 sm:p-6 md:p-8 font-serif">
      <header className="mb-12">
        <motion.h1
          className="text-4xl sm:text-5xl font-light mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hey {firstName},
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl font-light text-stone-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here&apos;s your impact on client growth
        </motion.p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <ChartCard title="Follower Growth" className="lg:col-span-2">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={followerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
                <XAxis dataKey="month" stroke="#a8a29e" />
                <YAxis stroke="#a8a29e" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#292524", border: "none" }}
                  labelStyle={{ color: "#e7e5e4" }}
                  itemStyle={{ color: "#e7e5e4" }}
                />
                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke="#ffffff"
                  strokeWidth={2}
                  dot={{ fill: "#ffffff", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Month-over-Month Growth" className="">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData} layout="vertical" margin={{ top: 5, right: 50, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
                <XAxis type="number" stroke="#a8a29e" />
                <YAxis dataKey="metric" type="category" stroke="#a8a29e" width={100} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#292524", border: "none" }}
                  labelStyle={{ color: "#e7e5e4" }}
                  itemStyle={{ color: "#e7e5e4" }}
                />
                <Bar dataKey="growth" fill="#ffffff">
                  <LabelList
                    dataKey="growth"
                    position="right"
                    fill="#ffffff"
                    formatter={(value: number) => `${value}%`}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <ChartCard title="Engagement Overview" className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tweets.length > 0 && (
            <>
              <EngagementItem
                icon={<Eye />}
                label="Total Views"
                value={tweets.reduce((sum, tweet) => sum + tweet.viewCount, 0)}
              />
              <EngagementItem
                icon={<Heart />}
                label="Total Likes"
                value={tweets.reduce((sum, tweet) => sum + tweet.likeCount, 0)}
              />
              <EngagementItem
                icon={<RefreshCw />}
                label="Total Retweets"
                value={tweets.reduce((sum, tweet) => sum + tweet.retweetCount, 0)}
              />
              <EngagementItem
                icon={<Bookmark />}
                label="Total Bookmarks"
                value={tweets.reduce((sum, tweet) => sum + tweet.bookmarkCount, 0)}
              />
            </>
          )}
        </div>
      </ChartCard>

      <ChartCard title="Tweet Performance" className="">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="py-2 px-4">Tweet</th>
                {["viewCount", "likeCount", "retweetCount", "replyCount", "bookmarkCount"].map((column) => (
                  <th key={column} className="py-2 px-4 cursor-pointer" onClick={() => requestSort(column)}>
                    <div className="flex items-center">
                      {column.replace("Count", "")}
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedTweets.map((tweet) => (
                <tr key={tweet.id} className="border-b border-stone-800">
                  <td className="py-2 px-4">{tweet.text.substring(0, 50)}...</td>
                  <td className="py-2 px-4">{tweet.viewCount.toLocaleString()}</td>
                  <td className="py-2 px-4">{tweet.likeCount.toLocaleString()}</td>
                  <td className="py-2 px-4">{tweet.retweetCount.toLocaleString()}</td>
                  <td className="py-2 px-4">{tweet.replyCount.toLocaleString()}</td>
                  <td className="py-2 px-4">{tweet.bookmarkCount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      <ChartCard title="Followers You Should Know About" className="">
        <div className="space-y-4">
          {notableFollowers.map((follower) => (
            <NotableFollower key={follower.username} {...follower} />
          ))}
        </div>
      </ChartCard>
    </div>
  )
}

const ChartCard = ({ title, children, className }: { title: string, children: React.ReactNode, className: string }) => (
  <div className={`bg-stone-950 p-6 rounded-lg border border-stone-800 ${className}`}>
    <h2 className="text-2xl font-light mb-6">{title}</h2>
    {children}
  </div>
)

const EngagementItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: number }) => (
  <div className="flex flex-col items-center justify-center text-center">
    {icon}
    <span className="text-2xl font-light mb-1">{value.toLocaleString()}</span>
    <span className="text-sm text-stone-400">{label}</span>
  </div>
)

const NotableFollower = ({ name, username, avatarUrl, followerCount, reason }: { name: string, username: string, avatarUrl: string, followerCount: number, reason: string }) => (
  <div className="flex items-center space-x-4 p-4 bg-stone-900 rounded-lg">
    <Image src={avatarUrl || "../advay.jpeg"} alt={name} width={48} height={48} className="rounded-full" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-stone-400">@{username}</p>
      <p className="text-sm text-stone-300 mt-1">{followerCount.toLocaleString()} followers</p>
    </div>
    <div className="flex-shrink-0 text-right">
      <p className="text-sm text-stone-300 italic">{reason}</p>
    </div>
  </div>
)

export default Dashboard
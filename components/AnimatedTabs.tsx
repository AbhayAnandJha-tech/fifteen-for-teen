'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SubjectEnrollCard from './SubjectEnrollCard'

import {
  Beaker,
  Code,
  MessageCircle,
  Atom,
  Cog,
  Zap,
  Calculator,
  Scale,
  Leaf,
} from 'lucide-react'

const tabs = [
  { id: 'all', label: 'All Courses' },
  { id: 'popular', label: 'Popular' },
  { id: 'new', label: 'New' },
  { id: 'trending', label: 'Trending' },
]

const courseData = [
  {
    id: 'applied-chemistry',
    name: 'Applied Chemistry',
    icon: Beaker,
    description: 'Explore chemical principles in engineering applications',
    category: ['popular', 'new'],
    stats: {
      students: 1200,
      rating: 4.8,
      duration: '8 weeks',
    },
  },
  {
    id: 'programming-in-c',
    name: 'Programming in C',
    icon: Code,
    description: 'Master the fundamentals of C programming for engineering',
    category: ['popular', 'trending'],
    stats: {
      students: 1500,
      rating: 4.9,
      duration: '10 weeks',
    },
  },
  {
    id: 'communication-skills',
    name: 'Communication Skills',
    icon: MessageCircle,
    description: 'Develop effective communication for professional success',
    category: ['new'],
    stats: {
      students: 800,
      rating: 4.7,
      duration: '6 weeks',
    },
  },
  {
    id: 'applied-physics',
    name: 'Applied Physics',
    icon: Atom,
    description: 'Understand physical concepts crucial for engineering',
    category: ['popular'],
    stats: {
      students: 1100,
      rating: 4.8,
      duration: '9 weeks',
    },
  },
  {
    id: 'manufacturing-processes',
    name: 'Manufacturing Processes',
    icon: Cog,
    description: 'Learn about various manufacturing techniques and processes',
    category: ['trending'],
    stats: {
      students: 950,
      rating: 4.6,
      duration: '8 weeks',
    },
  },
  {
    id: 'electrical-science',
    name: 'Electrical Science',
    icon: Zap,
    description:
      'Study electrical principles and their engineering applications',
    category: ['new', 'trending'],
    stats: {
      students: 1050,
      rating: 4.7,
      duration: '9 weeks',
    },
  },
  {
    id: 'applied-mathematics',
    name: 'Applied Mathematics',
    icon: Calculator,
    description: 'Master mathematical concepts essential for engineering',
    category: ['popular'],
    stats: {
      students: 1300,
      rating: 4.9,
      duration: '10 weeks',
    },
  },
  {
    id: 'engineering-mechanics',
    name: 'Engineering Mechanics',
    icon: Scale,
    description: 'Analyze forces and motion in engineering systems',
    category: ['new'],
    stats: {
      students: 900,
      rating: 4.6,
      duration: '8 weeks',
    },
  },
  {
    id: 'environmental-science',
    name: 'Environmental Science',
    icon: Leaf,
    description:
      'Explore environmental issues and sustainable engineering practices',
    category: ['trending'],
    stats: {
      students: 750,
      rating: 4.5,
      duration: '7 weeks',
    },
  },
]

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const filteredCourses = courseData.filter(
    (course) => activeTab === 'all' || course.category.includes(activeTab)
  )

  return (
    <div className="flex flex-col">
      <div className="flex space-x-1 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? '' : 'hover:text-white/60'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full grid grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <SubjectEnrollCard
            key={course.id}
            name={course.name}
            description={course.description}
            stats={course.stats}
            icon={course.icon}
          />
        ))}
      </div>
    </div>
  )
}

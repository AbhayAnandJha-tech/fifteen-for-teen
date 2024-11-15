'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const features = {
  learning: [
    {
      name: 'Course Access',
      basic: 'Basic Courses Only',
      pro: 'Full Library',
      premium: 'Full Library + Premium',
      info: 'Access to our course library varies by plan level',
    },
    {
      name: 'Course Downloads',
      basic: 'Limited',
      pro: 'Unlimited',
      premium: 'Unlimited',
      info: 'Download courses for offline viewing',
    },
    {
      name: 'Learning Path',
      basic: 'Standard',
      pro: 'Personalized',
      premium: 'AI-Powered Custom',
      info: 'Customized learning journey based on your goals',
    },
  ],
  support: [
    {
      name: 'Mentor Support',
      basic: false,
      pro: 'Group Sessions',
      premium: '1-on-1 Sessions',
      info: 'Get guidance from industry experts',
    },
    {
      name: 'Response Time',
      basic: '48 hours',
      pro: '24 hours',
      premium: 'Priority (4 hours)',
      info: 'Average response time for support queries',
    },
  ],
  projects: [
    {
      name: 'Project Templates',
      basic: 'Basic',
      pro: 'Advanced',
      premium: 'Industry Level',
      info: 'Ready-to-use project templates',
    },
    {
      name: 'Code Reviews',
      basic: false,
      pro: '2/month',
      premium: 'Unlimited',
      info: 'Get your code reviewed by experts',
    },
  ],
  career: [
    {
      name: 'Career Guidance',
      basic: false,
      pro: 'Basic',
      premium: 'Advanced',
      info: 'Career planning and guidance sessions',
    },
    {
      name: 'Job Placement',
      basic: false,
      pro: false,
      premium: true,
      info: 'Job placement assistance and support',
    },
  ],
}

//   const renderValue = (value) => {
//     if (value === true) return <FaCheck className="text-green-500" />
//     if (value === false) return <FaTimes className="text-red-500" />
//     return value
//   }

export default function FeaturesTabs() {
  const tabs = [
    { id: 'basic', label: 'Basic' },
    { id: 'pro', label: 'Pro' },
    { id: 'premium', label: 'Premium' },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id)

  // Filter the features based on the activeTab
  const filteredFeatures = Object.keys(features).map((category) => ({
    category,
    items: features[category].filter((feature) => feature[activeTab]),
  }))

  return (
    <div className="flex flex-col">
      <div className="flex space-x-1 justify-center mb-8">
        {['basic', 'pro', 'premium'].map((plan) => (
          <button
            key={plan}
            onClick={() => setActiveTab(plan)}
            className={`${
              activeTab === plan ? '' : 'hover:text-white/60'
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === plan && (
              <motion.span
                layoutId={`bubble-${tabs[0].id}`}
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {plan}
          </button>
        ))}
      </div>
      <div className="w-full grid grid-cols-3 gap-6">
        {filteredFeatures.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-xl font-bold">{category}</h3>
            <ul className=''>
              {items.map((feature) => (
                <li key={feature.name} className="mb-3">
                  <h4 className="font-semibold">{feature.name}</h4>
                  <p>{feature.info}</p>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Basic:</strong> {feature.basic}
                    </li>
                    <li>
                      <strong>Pro:</strong> {feature.pro}
                    </li>
                    <li>
                      <strong>Premium:</strong> {feature.premium}
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

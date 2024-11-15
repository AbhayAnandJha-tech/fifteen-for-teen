import { FC } from 'react'
import { Button } from './ui/button'
import { LucideIcon } from 'lucide-react'

interface SubjectEnrollCardProps {
  name: string
  description: string
  stats: {
    students: number
    rating: number
    duration: string
  }
  icon: LucideIcon
}

const SubjectEnrollCard: FC<SubjectEnrollCardProps> = ({
  name,
  description,
  stats,
  icon: GivenIcon,
}) => {
  return (
    <div className="shadow-lg rounded-lg p-6 text-center border">
      <div className="flex flex-row items-center mb-3">
        <div className="flex bg-gradient-to-r from-[#ffd700] to-[#ffa500] text-black h-12 w-12 justify-center items-center rounded-xl mr-3">
          <GivenIcon className="size-5" />
        </div>
        <h3 className="text-left text-2xl font-semibold mb-2">{name}</h3>
      </div>
      <p className="text-left mb-4">{description}</p>
      <div className="flex justify-between mb-4 px-6">
        <div>
          <p className="font-bold">{stats.students}</p>
          <p className="text-xs">Students</p>
        </div>
        <div>
          <p className="font-bold">{stats.rating}</p>
          <p className="text-xs">Rating</p>
        </div>
        <div>
          <p className="font-bold">{stats.duration}</p>
          <p className="text-xs">Duration</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <Button className="rounded-full w-full">Enroll Now</Button>
        <Button className="rounded-full w-full" variant="secondary">
          Preview
        </Button>
      </div>
    </div>
  )
}

export default SubjectEnrollCard

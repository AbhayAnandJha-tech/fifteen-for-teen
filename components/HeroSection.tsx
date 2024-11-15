import { PlayCircleIcon, RocketIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-10">
          <div className="flex flex-col items-center text-center col-span-6 lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-6xl">
              Innovating the Future, One Teen at a Time
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              With practical learning and future-ready skills, We transform
              passion into purpose for a better world.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">
                <RocketIcon className="mr-1 size-4" />
                Start Learning
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <PlayCircleIcon className="mr-1 size-4" />
                Watch Demo
              </Button>
            </div>
          </div>
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover col-span-4"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

import CoursesTabs from '@/components/CoursesTabs'
import FeaturesTabs from '@/components/FeaturesTabs'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import {
  PersonStandingIcon,
  TimerIcon,
  ZapIcon,
  ZoomInIcon,
} from 'lucide-react'

export default function Page() {
  return (
    <div className="container relative">
      <HeroSection />

      <section className="py-12">
        <div className="container">
          <p className="mb-4 text-xs text-muted-foreground">Why Us?</p>
          <h2 className="text-3xl font-medium lg:text-4xl">
            A better way to learn
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                <TimerIcon className="size-5 md:size-6" />
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  Trust building
                  <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  We are trusted by over 5,000 active students, all working
                  toward achieving their personal goals.
                </p>
              </div>
            </div>
            <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                <ZapIcon className="size-5 md:size-6" />
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  Innovation
                  <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  Learn from 50+ experts and mentors who bring real-world
                  experience and a passion for teaching.
                </p>
              </div>
            </div>
            <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                <ZoomInIcon className="size-5 md:size-6" />
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  Quality
                  <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  Explore 100+ thoughtfully designed courses that cater to a
                  variety of interests and skill levels.
                </p>
              </div>
            </div>
            <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                <PersonStandingIcon className="size-5 md:size-6" />
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  Success Rate
                  <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  With a proven 95% success rate, we empower learners to not
                  only acquire skills but also apply them effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionHeader
        heading="Explore Our Courses"
        extra="Discover the perfect course to advance your engineering journey!"
      >
        <CoursesTabs />
      </SectionHeader>

      {/* <SectionHeader
        heading="Features Comparison"
        extra="Detailed comparison of all features across plans!"
      >
        <FeaturesTabs />
      </SectionHeader> */}

      {/* <div className="mx-auto grid grid-cols-12 gap-8 space-y-0 pt-28 px-12">
        <section className="space-y-4 col-span-6 mt-8"></section>
      </div> */}
    </div>
  )
}

import { FC } from 'react'

interface SectionHeaderProps {
  heading: string
  extra: string
  children: React.ReactNode
}

const SectionHeader: FC<SectionHeaderProps> = ({
  heading,
  extra,
  children,
}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {extra}
          </p>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </section>
  )
}

export default SectionHeader

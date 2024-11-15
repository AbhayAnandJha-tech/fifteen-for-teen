import Link from 'next/link'

import { cn } from '@/lib/utils'
import { MainNav } from '@/components/mainNav'
import { buttonVariants } from './ui/button'
import { DoorOpenIcon } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Input } from './ui/input'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex items-center gap-x-4">
            <Input
              placeholder="Search"
              className="w-64 focus:w-80 h-8 transition-all bg-black"
            />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'secondary',
                  })
                )}
              >
                <DoorOpenIcon className="h-4 w-4" />
                Login
              </div>
            </Link>

            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0'
                )}
              >
                <GithubIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  )
}

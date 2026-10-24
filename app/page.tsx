export const revalidate = 86400

import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { RecentMilestones } from '@/components/home/recent-milestones'
import { NextUp } from '@/components/home/next-up'
import { Explore } from '@/components/home/explore'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <RecentMilestones />
      <Explore />
      <NextUp />
    </>
  )
}

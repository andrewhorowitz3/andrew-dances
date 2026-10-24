import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { Timeline } from '@/components/journey/timeline'

export const metadata: Metadata = {
  title: 'My Journey',
  description: 'A timeline of milestones from my first ballroom lesson to today.',
}

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        eyebrow="My Journey"
        title="Three years, one step at a time."
        description="Every first lesson, new dance, level check-out, and performance — the milestones that turned a curious beginner into someone who can’t imagine life without dancing."
        image="/images/first-lesson.png"
        imageAlt="Andrew in an early private lesson with his instructor"
      />
      <Timeline />
    </>
  )
}

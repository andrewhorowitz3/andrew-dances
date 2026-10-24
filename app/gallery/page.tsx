import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { gallery } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos and videos from lessons, dance parties, and performances.',
}

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="Moments worth keeping."
        description="Lessons, parties, and performances — the candid shots, the spotlight moments, and the well-worn shoes in between."
      />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <GalleryGrid items={gallery} />
      </div>
    </>
  )
}

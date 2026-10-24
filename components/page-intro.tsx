import Image from 'next/image'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  image?: string
  imageAlt?: string
}

export function PageIntro({ eyebrow, title, description, image, imageAlt = '' }: PageIntroProps) {
  return (
    <section className="border-b border-foreground/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:items-end md:px-8 md:py-20">
        <div className={image ? 'md:col-span-7' : 'md:col-span-9'}>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand">{eyebrow}</p>
          <h1 className="mt-4 text-5xl leading-[1.05] tracking-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 text-pretty">
            {description}
          </p>
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden md:col-span-5">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        )}
      </div>
    </section>
  )
}

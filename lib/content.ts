/**
 * All of the site's content lives in this one file.
 *
 * To update your site:
 *  - Add a milestone   → add an object to `milestones`
 *  - Add an event      → add an object to `events` (past/upcoming is worked out from the date)
 *  - Add a photo/video → drop the file in /public/images (or /public/videos) and add it to `gallery`
 *  - Update a dance    → edit its entry in `danceGroups`
 *  - Update goals      → edit `goals`, and tick off checklist items with `done: true`
 *
 * Dates use the format "YYYY-MM-DD".
 */

/**
 * Shown as a banner on every page and in the footer.
 * Set `enabled: false` once you replace the sample content with your own.
 */
export const demoNotice = {
  enabled: true,
  message:
    'Demo site only. The name, milestones, events, and photos are fictional placeholders (images are AI-generated).',
}

export const profile = {
  name: 'Dance Journal',
  tagline: 'From my first tentative box step to performing in showcases.',
  startedDancing: '2023-10-14',
  intro:
    'Three years ago I walked into a ballroom studio with two left feet and a lot of curiosity. I take private lessons, go to every dance party I can, and still get butterflies before every performance. This site is a little scrapbook of learning to dance as an adult — the wobbly first steps, the small breakthroughs, and the pure joy of it.',
}

export type Milestone = {
  date: string
  title: string
  description: string
  kind: 'lesson' | 'party' | 'new-dance' | 'checkout' | 'performance' | 'competition'
  image?: string
}

export const milestones: Milestone[] = [
  {
    date: '2023-10-14',
    title: 'My first private lesson',
    kind: 'lesson',
    description:
      'A Waltz box step, counted out loud, very slowly. I stepped on my instructor’s toes twice and left grinning anyway.',
    image: '/images/first-lesson.png',
  },
  {
    date: '2023-11-17',
    title: 'My first dance party',
    kind: 'party',
    description:
      'I mostly watched from the wall, but I danced three songs — one Foxtrot, one Rumba, and one I am still not sure about.',
    image: '/images/dance-party.png',
  },
  {
    date: '2023-12-09',
    title: 'Started Rumba & Cha Cha',
    kind: 'new-dance',
    description:
      'My first taste of Rhythm. Cuban motion felt impossible at first — my hips had other plans.',
  },
  {
    date: '2024-02-03',
    title: 'Learned East Coast Swing',
    kind: 'new-dance',
    description:
      'The dance that made me laugh the most. Suddenly every wedding playlist became an opportunity.',
  },
  {
    date: '2024-04-20',
    title: 'Added Foxtrot & Tango',
    kind: 'new-dance',
    description:
      'Foxtrot taught me patience; Tango taught me that staccato is a feeling, not just a word.',
  },
  {
    date: '2024-06-15',
    title: 'First showcase performance',
    kind: 'performance',
    description:
      'A two-minute Rumba at the summer studio showcase. My knees shook, my family cheered, and I was hooked.',
    image: '/images/showcase.png',
  },
  {
    date: '2024-09-12',
    title: 'Discovered Salsa & Bachata nights',
    kind: 'new-dance',
    description:
      'Social dancing outside the studio — new partners, new music, and a whole new community.',
  },
  {
    date: '2025-01-25',
    title: 'Passed my Bronze I check-out',
    kind: 'checkout',
    description:
      'Smooth and Rhythm syllabus figures, danced in front of an examiner. Official proof that the practice was paying off.',
    image: '/images/checkout.png',
  },
  {
    date: '2025-03-08',
    title: 'Viennese Waltz & Bolero',
    kind: 'new-dance',
    description:
      'Viennese Waltz left me dizzy and delighted. Bolero asked for a kind of slowness I had never practiced.',
  },
  {
    date: '2025-05-17',
    title: 'Spring showcase: Foxtrot',
    kind: 'performance',
    description:
      'My first Smooth routine on stage. I forgot one corner, recovered gracefully, and nobody noticed — except me.',
  },
  {
    date: '2025-08-02',
    title: 'Mambo & Hustle join the mix',
    kind: 'new-dance',
    description:
      'Breaking on two in Mambo and spinning through Hustle. My cardio has never been better.',
  },
  {
    date: '2025-11-22',
    title: 'Passed my Bronze II check-out',
    kind: 'checkout',
    description:
      'Cleaner frame, better footwork, and a lot less nerves than the first time around.',
  },
  {
    date: '2026-04-11',
    title: 'My first competition',
    kind: 'competition',
    description:
      'Pro-Am Bronze Smooth at a regional comp. Placed second in Waltz — but the real win was walking onto that floor at all.',
    image: '/images/competition.png',
  },
  {
    date: '2026-06-20',
    title: 'Summer showcase: Tango',
    kind: 'performance',
    description:
      'A dramatic Tango routine with a promenade I was genuinely proud of. Smiled so much I almost broke character.',
    image: '/images/tango.png',
  },
  {
    date: '2026-09-19',
    title: 'Passed my Bronze III check-out',
    kind: 'checkout',
    description:
      'The examiner’s note: “lovely musicality.” I may have reread it a few dozen times.',
  },
]

export const levels = ['Newcomer', 'Bronze', 'Silver', 'Gold'] as const
export type Level = (typeof levels)[number]

export type Dance = {
  name: string
  level: Level
  started: string
  workingOn: string[]
  note?: string
}

export type DanceGroup = {
  id: string
  name: string
  description: string
  image: string
  dances: Dance[]
}

export const danceGroups: DanceGroup[] = [
  {
    id: 'smooth',
    name: 'Smooth',
    description:
      'Traveling dances that glide around the floor — where I learned that posture is everything.',
    image: '/images/hero.png',
    dances: [
      {
        name: 'Waltz',
        level: 'Bronze',
        started: '2023-10-14',
        workingOn: ['Rise and fall through the whole phrase', 'Bigger, softer swing'],
        note: 'Where it all began.',
      },
      {
        name: 'Tango',
        level: 'Bronze',
        started: '2024-04-20',
        workingOn: ['Sharper head snaps', 'Staying low and grounded'],
      },
      {
        name: 'Foxtrot',
        level: 'Bronze',
        started: '2024-04-20',
        workingOn: ['Smooth, continuous travel', 'Heel leads on forward steps'],
      },
      {
        name: 'Viennese Waltz',
        level: 'Bronze',
        started: '2025-03-08',
        workingOn: ['Stamina through a full song', 'Clean reverse turns'],
      },
    ],
  },
  {
    id: 'rhythm',
    name: 'Rhythm',
    description:
      'The American Rhythm dances — hip action, timing, and a lot of personality.',
    image: '/images/rumba.png',
    dances: [
      {
        name: 'Cha Cha',
        level: 'Bronze',
        started: '2023-12-09',
        workingOn: ['Crisp chassés', 'Straighter legs on each step'],
      },
      {
        name: 'Rumba',
        level: 'Bronze',
        started: '2023-12-09',
        workingOn: ['Cuban motion', 'Slowing down the slow'],
        note: 'My first showcase dance.',
      },
      {
        name: 'East Coast Swing',
        level: 'Bronze',
        started: '2024-02-03',
        workingOn: ['Bouncy, relaxed triples', 'Leading clearer underarm turns'],
      },
      {
        name: 'Bolero',
        level: 'Bronze',
        started: '2025-03-08',
        workingOn: ['Rise and fall on the slow count', 'Contra body position'],
      },
      {
        name: 'Mambo',
        level: 'Bronze',
        started: '2025-08-02',
        workingOn: ['Breaking on two', 'Keeping up at full tempo'],
      },
    ],
  },
  {
    id: 'social',
    name: 'Social',
    description:
      'Dances for parties and nights out — less syllabus, more fun and connection.',
    image: '/images/salsa.png',
    dances: [
      {
        name: 'Salsa',
        level: 'Bronze',
        started: '2024-09-12',
        workingOn: ['Cross-body lead variations', 'Musical styling'],
      },
      {
        name: 'Bachata',
        level: 'Bronze',
        started: '2024-09-12',
        workingOn: ['Softer, more connected frame', 'Body waves (slowly!)'],
      },
      {
        name: 'Hustle',
        level: 'Bronze',
        started: '2025-08-02',
        workingOn: ['Spins without traveling', 'Smooth rolling count'],
      },
    ],
  },
]

export type DanceEvent = {
  date: string
  title: string
  kind: 'Dance Party' | 'Showcase' | 'Competition'
  location: string
  recap: string
  image: string
  result?: string
}

export const events: DanceEvent[] = [
  {
    date: '2027-03-13',
    title: 'Spring Classic DanceSport Championships',
    kind: 'Competition',
    location: 'Grand Ballroom, Downtown',
    recap:
      'Entering Pro-Am Bronze Smooth and — for the first time — Bronze Rhythm. Nervous, excited, and practicing daily.',
    image: '/images/competition.png',
  },
  {
    date: '2026-12-12',
    title: 'Winter Showcase',
    kind: 'Showcase',
    location: 'Studio Ballroom',
    recap:
      'Performing a Viennese Waltz routine to a song I have loved for years. Turns, more turns, and hopefully no dizziness.',
    image: '/images/showcase.png',
  },
  {
    date: '2026-10-31',
    title: 'Halloween Masquerade Party',
    kind: 'Dance Party',
    location: 'Studio Ballroom',
    recap:
      'Costumes encouraged, masks required. Planning to finally ask more strangers to dance.',
    image: '/images/dance-party.png',
  },
  {
    date: '2026-06-20',
    title: 'Summer Showcase',
    kind: 'Showcase',
    location: 'Riverside Theater',
    recap:
      'My Tango routine — sharp, dramatic, and a little theatrical. The promenade finally clicked on the night it mattered.',
    image: '/images/tango.png',
  },
  {
    date: '2026-04-11',
    title: 'Regional Pro-Am Championships',
    kind: 'Competition',
    location: 'Harbor Hotel Ballroom',
    recap:
      'My first competition. Four heats, one very long day, and a huge amount of support from my studio family.',
    image: '/images/competition.png',
    result: '2nd place, Bronze Waltz',
  },
  {
    date: '2025-12-19',
    title: 'Holiday Gala',
    kind: 'Dance Party',
    location: 'Studio Ballroom',
    recap:
      'Black tie, live band, and a Viennese Waltz under the lights. One of my favorite nights of the year.',
    image: '/images/frame.png',
  },
  {
    date: '2025-05-17',
    title: 'Spring Showcase',
    kind: 'Showcase',
    location: 'Studio Ballroom',
    recap:
      'My first Smooth routine — a Foxtrot. I missed a corner and kept going, which might be the most important lesson of all.',
    image: '/images/showcase.png',
  },
  {
    date: '2024-09-12',
    title: 'Salsa Social Night',
    kind: 'Dance Party',
    location: 'Club Ritmo',
    recap:
      'My first night social dancing outside the studio. Danced with a dozen people and learned something from every one.',
    image: '/images/salsa.png',
  },
]

export type GalleryItem = {
  src: string
  alt: string
  caption: string
  category: 'Lessons' | 'Parties' | 'Performances'
  /** For videos: set type to 'video' and point `src` at an .mp4 in /public/videos. `poster` is the preview image. */
  type?: 'photo' | 'video'
  poster?: string
}

export const gallery: GalleryItem[] = [
  {
    src: '/images/first-lesson.png',
    alt: 'A student in a private lesson with an instructor in a mirrored studio',
    caption: 'Early days in the studio',
    category: 'Lessons',
  },
  {
    src: '/images/showcase.png',
    alt: 'A couple performing under a spotlight on stage',
    caption: 'Showcase night',
    category: 'Performances',
  },
  {
    src: '/images/dance-party.png',
    alt: 'Couples dancing at a studio party under string lights',
    caption: 'Friday night dance party',
    category: 'Parties',
  },
  {
    src: '/images/rumba.png',
    alt: 'A couple in a rumba pose in the studio',
    caption: 'Rumba practice',
    category: 'Lessons',
  },
  {
    src: '/images/competition.png',
    alt: 'Couples dancing Tango on a competition floor',
    caption: 'First competition',
    category: 'Performances',
  },
  {
    src: '/images/shoes.png',
    alt: 'Worn black ballroom dance shoes on a wooden floor',
    caption: 'Three years of practice',
    category: 'Lessons',
  },
  {
    src: '/images/salsa.png',
    alt: 'A couple dancing salsa at a crowded social',
    caption: 'Salsa social',
    category: 'Parties',
  },
  {
    src: '/images/tango.png',
    alt: 'A Tango couple in closed frame with a sharp head turn',
    caption: 'Summer showcase Tango',
    category: 'Performances',
  },
  {
    src: '/images/frame.png',
    alt: 'Close-up of a dance couple’s hands in frame',
    caption: 'Holiday Gala',
    category: 'Parties',
  },
  {
    src: '/images/swing.png',
    alt: 'A couple laughing mid-turn while dancing East Coast Swing',
    caption: 'Swing makes me laugh',
    category: 'Lessons',
  },
  {
    src: '/images/checkout.png',
    alt: 'Dancing Viennese Waltz while an examiner watches',
    caption: 'Check-out day',
    category: 'Lessons',
  },
  {
    src: '/images/hero.png',
    alt: 'A couple waltzing in an elegant empty ballroom',
    caption: 'The dream',
    category: 'Performances',
  },
]

export type Goal = {
  title: string
  label: 'Check-out' | 'Showcase' | 'Competition'
  targetDate: string
  description: string
  image: string
  checklist: { item: string; done: boolean }[]
}

export const goals: Goal[] = [
  {
    title: 'Bronze IV check-out',
    label: 'Check-out',
    targetDate: '2027-02-06',
    description:
      'The last step of Bronze before I start dreaming about Silver. Focusing on polishing technique rather than adding new figures.',
    image: '/images/checkout.png',
    checklist: [
      { item: 'Learn all Bronze IV Smooth figures', done: true },
      { item: 'Learn all Bronze IV Rhythm figures', done: true },
      { item: 'Clean up Viennese Waltz reverse turns', done: false },
      { item: 'Consistent Cuban motion in Rumba & Bolero', done: false },
    ],
  },
  {
    title: 'Viennese Waltz showcase routine',
    label: 'Showcase',
    targetDate: '2026-12-12',
    description:
      'A full routine for the Winter Showcase, choreographed with my instructor. The goal: dance it, not just survive it.',
    image: '/images/showcase.png',
    checklist: [
      { item: 'Choose the music', done: true },
      { item: 'Learn the choreography', done: true },
      { item: 'Run it start to finish without stopping', done: false },
      { item: 'Add styling and connect with the audience', done: false },
    ],
  },
  {
    title: 'Spring Classic competition',
    label: 'Competition',
    targetDate: '2027-03-13',
    description:
      'Back on the competition floor, this time in both Smooth and Rhythm. Hoping to dance freely and enjoy every heat.',
    image: '/images/competition.png',
    checklist: [
      { item: 'Register for Bronze Smooth & Rhythm', done: true },
      { item: 'Build stamina for back-to-back heats', done: false },
      { item: 'Book a mock-competition practice', done: false },
      { item: 'Order a new competition shirt', done: false },
    ],
  },
]

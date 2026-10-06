export const gymProofStats = [
  { label: "Open Every Week", value: "7 Days", detail: "Early doors to late sessions" },
  { label: "Training Floor", value: "850 m²", detail: "Racks, platforms, turf, ergs" },
  { label: "Training Format", value: "Coach-Led", detail: "Floor guidance and small groups" },
  { label: "Kigali Flagship", value: "Kimihurura", detail: "Centrally located training club" },
];

export const corePillars = [
  {
    id: "train",
    tag: "01 · THE FLOOR",
    title: "Train With Purpose",
    description:
      "Olympic lifting platforms, dumbbells up to 50kg, precision racks, and a 25-meter sprint turf lane built for genuine athletic output.",
    image: "/Intro1.webp",
    alt: "Athletes training with barbells on the IMIZI training floor",
    ctaText: "See the training floor",
    ctaLink: "/about",
    highlights: ["Olympic platforms & calibrated plates", "25m sprint & sled turf lane", "Free weight dumbbells up to 50kg"],
  },
  {
    id: "coach",
    tag: "02 · THE STANDARD",
    title: "Coaches Who Pay Attention",
    description:
      "Our coaches correct mechanics, calibrate loads to your capacity, and build resilient movement patterns that last.",
    image: "/Person1.jpg",
    alt: "Coach guiding an athlete through movement mechanics",
    ctaText: "Meet our coaching team",
    ctaLink: "/trainers",
    highlights: ["Movement screening on day one", "Technique-first barbell progressions", "Direct coach feedback every session"],
  },
  {
    id: "belong",
    tag: "03 · THE CULTURE",
    title: "Grounded In Consistency",
    description:
      "First-time lifters train alongside seasoned athletes. Everyone racks their weights, respects the room, and puts in honest daily work.",
    image: "/Intro3.webp",
    alt: "Diverse members training together in community",
    ctaText: "Review our standards",
    ctaLink: "/about",
    highlights: ["Ego-free training environment", "Shared accountability & discipline", "Structured progressions for all levels"],
  },
];

export const classesData = [
  {
    id: "strength-lab",
    index: "01",
    name: "Strength Lab",
    category: "Barbell & Hypertrophy",
    duration: "60 min",
    intensity: "High Strength",
    level: "All Levels (Progressive)",
    schedule: "Mon / Wed / Fri · 06:00 & 18:00",
    description:
      "Foundational barbell mechanics focusing on squats, deadlifts, presses, and accessory strength work with structured progressive overload.",
    image: "/Strength.jpg",
    alt: "Athlete performing strength barbell lift",
    keyPoints: ["Compound barbell mechanics", "Progressive overload tracking"],
  },
  {
    id: "imizi-conditioning",
    index: "02",
    name: "IMIZI Conditioning",
    category: "High-Intensity Capacity",
    duration: "45 min",
    intensity: "High Capacity",
    level: "Intermediate / Scalable",
    schedule: "Tue / Thu / Sat · 06:30 & 17:30",
    description:
      "Interval-driven training combining kettlebells, sled pushes, ski ergs, and bodyweight power to build repeatable cardiovascular stamina.",
    image: "/HIIT.jpg",
    alt: "Kettlebell and conditioning interval training",
    keyPoints: ["Sled and ergometer intervals", "Repeatable aerobic power"],
  },
  {
    id: "engine-turf",
    index: "03",
    name: "Engine & Turf",
    category: "Functional Endurance",
    duration: "50 min",
    intensity: "Moderate to High",
    level: "All Levels",
    schedule: "Mon / Wed · 17:30",
    description:
      "Full-floor conditioning on our 25m sprint turf using medicine balls, battle ropes, and sandbags to challenge rotational work capacity.",
    image: "/Group training.jpg",
    alt: "Group athletes working on turf with functional equipment",
    keyPoints: ["Turf carries & sled pushes", "Rotational work capacity"],
  },
  {
    id: "mobility-resilience",
    index: "04",
    name: "Mobility & Resilience",
    category: "Active Recovery",
    duration: "50 min",
    intensity: "Low to Moderate",
    level: "All Levels",
    schedule: "Tue / Thu · 07:30 & Sun · 09:00",
    description:
      "Joint articulation, hip and shoulder opening, tissue restoration, and breathwork to enhance lifting longevity and reduce injury risks.",
    image: "/Recovery.jpg",
    alt: "Athlete focusing on mobility and joint resilience",
    keyPoints: ["Joint range of motion", "Decompression & active recovery"],
  },
  {
    id: "team-performance",
    index: "05",
    name: "Team Performance",
    category: "Community Circuit",
    duration: "60 min",
    intensity: "High Energy",
    level: "All Levels",
    schedule: "Saturday · 08:30 & 10:00",
    description:
      "Our signature weekend crew session. Paired stations tackling synchronized strength and engine tests with high collective energy.",
    image: "/Classes1.jpg",
    alt: "Athletes participating in Saturday team circuit training",
    keyPoints: ["Partner & crew stations", "Weekend athletic finish"],
  },
];

export const weeklyTimetable = [
  {
    day: "Monday",
    slots: [
      { time: "06:00 – 07:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "07:15 – 08:00", name: "Engine & Turf", coach: "Diane U." },
      { time: "12:00 – 12:45", name: "IMIZI Conditioning", coach: "Eric M." },
      { time: "17:30 – 18:20", name: "Engine & Turf", coach: "Diane U." },
      { time: "18:30 – 19:30", name: "Strength Lab", coach: "Marcus K." },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "06:30 – 07:15", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "07:30 – 08:20", name: "Mobility & Resilience", coach: "Eric M." },
      { time: "12:00 – 12:45", name: "Strength Lab", coach: "Marcus K." },
      { time: "17:30 – 18:15", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "18:30 – 19:30", name: "Open Floor Training", coach: "Aline M." },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "06:00 – 07:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "07:15 – 08:00", name: "Engine & Turf", coach: "Aline M." },
      { time: "12:00 – 12:45", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "17:30 – 18:20", name: "Engine & Turf", coach: "Diane U." },
      { time: "18:30 – 19:30", name: "Strength Lab", coach: "Marcus K." },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "06:30 – 07:15", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "07:30 – 08:20", name: "Mobility & Resilience", coach: "Eric M." },
      { time: "17:30 – 18:15", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "18:30 – 19:30", name: "Strength Lab", coach: "Marcus K." },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "06:00 – 07:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "07:15 – 08:00", name: "Engine & Turf", coach: "Aline M." },
      { time: "17:00 – 18:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "18:15 – 19:15", name: "IMIZI Conditioning", coach: "Diane U." },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "07:30 – 08:15", name: "Mobility & Resilience", coach: "Eric M." },
      { time: "08:30 – 09:30", name: "Team Performance (Wave 1)", coach: "All Coaches" },
      { time: "10:00 – 11:00", name: "Team Performance (Wave 2)", coach: "All Coaches" },
      { time: "11:30 – 13:00", name: "Open Floor Training", coach: "Floor Staff" },
    ],
  },
  {
    day: "Sunday",
    slots: [
      { time: "09:00 – 10:00", name: "Mobility & Resilience", coach: "Eric M." },
      { time: "10:30 – 13:00", name: "Open Floor Training", coach: "Floor Staff" },
    ],
  },
];

export const trainersData = [
  {
    id: "marcus-kamanzi",
    name: "Marcus Kamanzi",
    role: "Head Strength Coach",
    specialties: ["Barbell Mechanics", "Power Development", "Injury Risk Mitigation"],
    bio: "Marcus directs our barbell progressions, ensuring every lifter builds force from solid positions.",
    philosophy: "Load is earned through mechanics. Move well first; the numbers follow.",
    credentials: "Head Strength Coach · 12 Yrs Coaching",
    image: "/Intro2.webp",
  },
  {
    id: "diane-uwase",
    name: "Diane Uwase",
    role: "Conditioning & Capacity Lead",
    specialties: ["Work Capacity", "Interval Systems", "Athletic Conditioning"],
    bio: "Diane designs interval structures that push aerobic capacity while preserving joint health.",
    philosophy: "Conditioning isn't exhaustion; it's pacing, resilience, and repeatable output.",
    credentials: "Conditioning Lead · 8 Yrs Coaching",
    image: "/Trainer2.webp",
  },
  {
    id: "eric-mugisha",
    name: "Eric Mugisha",
    role: "Mobility & Movement Specialist",
    specialties: ["Joint Mechanics", "Postural Restoration", "Active Recovery"],
    bio: "Eric bridges strength work and joint hygiene, focusing on hip articulation and spinal health.",
    philosophy: "You cannot build strength on top of dysfunction. Open the joints and performance unlocks.",
    credentials: "Mobility & Longevity Specialist · 7 Yrs Coaching",
    image: "/YO1.jpg",
  },
  {
    id: "aline-mukamana",
    name: "Aline Mukamana",
    role: "Team & Group Coach",
    specialties: ["Functional Circuits", "Athletic Foundations", "Beginner Integration"],
    bio: "Aline helps new members master athletic basics while challenging veterans to hold form.",
    philosophy: "Consistency beats intensity every week. When you show up, the room lifts you up.",
    credentials: "Group & Athletic Foundations Coach · 5 Yrs Coaching",
    image: "/Trainer3.webp",
  },
];

export const pricingPlans = [
  {
    id: "day-pass",
    name: "Day Pass",
    price: "15,000",
    currency: "RWF",
    period: "single session",
    tagline: "Single-day drop-in access for visiting lifters and travellers.",
    featured: false,
    inclusions: [
      "Full training floor & turf access",
      "Choice of 1 group session",
      "Locker room & hot showers",
      "Complimentary towel service",
    ],
    ctaText: "Get Day Pass",
    href: "/contact?plan=day-pass",
  },
  {
    id: "standard-monthly",
    name: "Standard Membership",
    price: "65,000",
    currency: "RWF",
    period: "per month",
    tagline: "Unrestricted floor access plus 4 monthly class sessions.",
    featured: false,
    inclusions: [
      "Unlimited floor & turf access 7 days/week",
      "4 coach-led group classes per month",
      "Day-one movement screening",
      "Member keycard & locker access",
      "Discounted class drop-ins",
    ],
    ctaText: "Join Standard",
    href: "/contact?plan=standard",
  },
  {
    id: "unlimited-performance",
    name: "Performance Unlimited",
    price: "95,000",
    currency: "RWF",
    period: "per month",
    tagline: "Full class and floor access for dedicated athletic results.",
    featured: true,
    badge: "Recommended for Consistency",
    inclusions: [
      "Unlimited access to ALL group classes",
      "Unrestricted floor & turf access 7 days/week",
      "Monthly 1-on-1 coach check-in",
      "Priority Saturday session booking",
      "2 guest day passes per month",
      "IMIZI locker & towel service",
    ],
    ctaText: "Join Unlimited",
    href: "/contact?plan=unlimited",
  },
];

export const pricingFaqs = [
  {
    question: "Can I try the gym before committing to a membership?",
    answer:
      "Yes. You can book a complimentary first session via our Visit page or purchase a 15,000 RWF Day Pass for full floor and class access.",
  },
  {
    question: "Are coach-led classes included in the memberships?",
    answer:
      "Performance Unlimited includes unlimited classes. Standard Membership includes 4 class credits per month, with discounted drop-in rates for additional sessions.",
  },
  {
    question: "Can I pause my membership if I travel outside Kigali?",
    answer:
      "Yes. Both Standard and Performance monthly memberships can be paused for up to 30 days per calendar year with 5 days advance notice at reception.",
  },
  {
    question: "What should I bring for my first session?",
    answer:
      "Clean training shoes (flat-soled or lifting shoes recommended for barbells), training gear, and a water bottle. Filtered water and showers are provided.",
  },
];

export const featuredTestimonial = {
  quote:
    "IMIZI isn't a gym where people stare at screens. The coaches know your numbers, mechanics come first, and the room puts in honest work.",
  author: "Christian Nkurunziza",
  role: "Member for 2 years · Recreational Powerlifter",
  city: "Kigali",
};

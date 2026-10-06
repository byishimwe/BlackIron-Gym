export const gymProofStats = [
  { label: "Open Every Week", value: "7 Days", detail: "Early doors to late sessions" },
  { label: "Training Floor", value: "850 m²", detail: "Racks, platforms, turf, machines" },
  { label: "Coaching Format", value: "100%", detail: "Coach-led floor and small groups" },
  { label: "Kigali Flagship", value: "Kigali", detail: "Kimihurura / Gasabo hub" },
];

export const corePillars = [
  {
    id: "train",
    tag: "01 · THE FLOOR",
    title: "Train With Purpose",
    description:
      "No gimmicks or overcrowding. Olympic lifting platforms, heavy dumbbell runs up to 50kg, precision cable setups, and a 25-meter turf lane built for genuine athletic output.",
    image: "/Intro1.webp",
    alt: "Athletes training with barbells on the IMIZI training floor",
    highlights: ["Olympic platforms & calibrated plates", "Dedicated turf lane for sled work", "Free weight capacity up to 50kg"],
  },
  {
    id: "coach",
    tag: "02 · THE STANDARD",
    title: "Coaches Who Pay Attention",
    description:
      "Good coaching isn't yelling through a playlist. Our coaches correct mechanics, calibrate loads to your current capacity, and build resilient movement patterns that last outside the gym.",
    image: "/Trainer3.webp",
    alt: "Coach guiding an athlete through movement mechanics",
    highlights: ["Movement screening on day one", "Technique-first barbell progressions", "Direct coach feedback in every session"],
  },
  {
    id: "belong",
    tag: "03 · THE CULTURE",
    title: "Grounded In Consistency",
    description:
      "A training room free of posturing. First-time lifters train alongside competitive athletes. Everyone racks their weights, respects the room, and celebrates honest daily progress.",
    image: "/Intro3.webp",
    alt: "Diverse members training together in community",
    highlights: ["Ego-free training environment", "Shared accountability and standards", "Structured progressions for all levels"],
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
      "Foundational barbell mechanics focusing on squats, deadlifts, presses, and targeted accessory strength work. Controlled tempos and structured progressive overload.",
    image: "/Strength.jpg",
    alt: "Athlete performing strength barbell lift",
    keyPoints: ["Compound barbell lifts", "Progressive overload tracking", "Individualized load coaching"],
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
      "Interval-driven training combining kettlebell cycles, sled pushes, ski ergs, and bodyweight power output. Fast-paced capacity work that builds raw endurance.",
    image: "/HIIT.jpg",
    alt: "Kettlebell and conditioning interval training",
    keyPoints: ["Aerobic & anaerobic power", "Sled and ergometer work", "High calorie expenditure"],
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
      "Full-floor functional conditioning utilizing the 25m sprint turf, medicine balls, battle ropes, and sandbags. Designed to challenge rotational power and work capacity.",
    image: "/Group training.jpg",
    alt: "Group athletes working on turf with functional equipment",
    keyPoints: ["Turf carries & sled pushes", "Rotational power exercises", "Cardiovascular stamina"],
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
      "Targeted joint articulation, hip and shoulder opening, tissue restoration, and controlled diaphragmatic breathing to enhance lifting longevity and prevent common injuries.",
    image: "/Recovery.jpg",
    alt: "Athlete focusing on mobility and joint resilience",
    keyPoints: ["Joint range of motion", "Decompression & breathwork", "Injury risk reduction"],
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
      "Our signature weekend crew session. Paired and small-group stations tackling synchronized strength and engine tests. High collective energy to close out the training week.",
    image: "/Classes1.jpg",
    alt: "Athletes participating in Saturday team circuit training",
    keyPoints: ["Partner & team stations", "Motivating group dynamic", "Weekend athletic finish"],
  },
];

export const weeklyTimetable = [
  {
    day: "Monday",
    slots: [
      { time: "06:00 – 07:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "07:15 – 08:00", name: "Engine & Turf", coach: "Diane U." },
      { time: "12:00 – 12:45", name: "Midday Conditioning", coach: "Eric M." },
      { time: "17:30 – 18:20", name: "Engine & Turf", coach: "Diane U." },
      { time: "18:30 – 19:30", name: "Strength Lab", coach: "Marcus K." },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "06:30 – 07:15", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "07:30 – 08:20", name: "Mobility & Resilience", coach: "Eric M." },
      { time: "12:00 – 12:45", name: "Strength Fundamentals", coach: "Marcus K." },
      { time: "17:30 – 18:15", name: "IMIZI Conditioning", coach: "Diane U." },
      { time: "18:30 – 19:30", name: "Open Floor (Coach Supported)", coach: "Aline M." },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "06:00 – 07:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "07:15 – 08:00", name: "Engine & Turf", coach: "Aline M." },
      { time: "12:00 – 12:45", name: "Midday Conditioning", coach: "Diane U." },
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
      { time: "18:30 – 19:30", name: "Strength Fundamentals", coach: "Marcus K." },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "06:00 – 07:00", name: "Strength Lab", coach: "Marcus K." },
      { time: "07:15 – 08:00", name: "Engine & Turf", coach: "Aline M." },
      { time: "17:00 – 18:00", name: "Friday Heavy Hitters", coach: "Marcus K." },
      { time: "18:15 – 19:15", name: "IMIZI Conditioning", coach: "Diane U." },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "07:30 – 08:15", name: "Saturday Opener", coach: "Eric M." },
      { time: "08:30 – 09:30", name: "Team Performance (Wave 1)", coach: "All Coaches" },
      { time: "10:00 – 11:00", name: "Team Performance (Wave 2)", coach: "All Coaches" },
      { time: "11:30 – 13:00", name: "Open Floor Training", coach: "Floor Staff" },
    ],
  },
];

export const trainersData = [
  {
    id: "marcus-kamanzi",
    name: "Marcus Kamanzi",
    role: "Head Strength Coach",
    specialties: ["Barbell Mechanics", "Power Development", "Injury Risk Mitigation"],
    bio: "Marcus has spent twelve years studying strength systems and coaching athletes to lift with authority and technical precision.",
    philosophy: "Load is earned through mechanics. Move well first, then the numbers take care of themselves.",
    credentials: "CSCS · Rwandan Weightlifting Coach",
    image: "/Trainer11.webp",
  },
  {
    id: "diane-uwase",
    name: "Diane Uwase",
    role: "Conditioning & Capacity Lead",
    specialties: ["Work Capacity", "Interval Systems", "Athletic Conditioning"],
    bio: "A competitive endurance and functional fitness veteran, Diane designs conditioning formats that test mental stamina without burning members out.",
    philosophy: "Conditioning isn't about sheer exhaustion; it's about pacing, grit, and repeatable energy.",
    credentials: "BSc Exercise Science · Level 2 Performance Coach",
    image: "/Trainer2.webp",
  },
  {
    id: "eric-mugisha",
    name: "Eric Mugisha",
    role: "Mobility & Movement Specialist",
    specialties: ["Joint Mechanics", "Postural Restoration", "Active Recovery"],
    bio: "Eric focuses on how athletes move through full ranges. He bridges the gap between rehabilitation, joint hygiene, and heavy strength training.",
    philosophy: "You cannot build strength on top of dysfunction. Restore the joints, and performance will follow.",
    credentials: "FRC Specialist · Functional Movement Screen Certified",
    image: "/Trainer3.webp",
  },
  {
    id: "aline-mukamana",
    name: "Aline Mukamana",
    role: "Team & Group Coach",
    specialties: ["Functional Circuits", "Athletic Foundations", "Beginner Integration"],
    bio: "Aline excels at turning complex movements into intuitive steps for newcomers while pushing experienced lifters to hold standards.",
    philosophy: "Consistency beats intensity every single week. When you show up, the room lifts you up.",
    credentials: "Group Fitness Certification · Kettlebell Specialist",
    image: "/Trainer4.webp",
  },
];

export const pricingPlans = [
  {
    id: "day-pass",
    name: "Day Pass / Trial",
    price: "15,000",
    currency: "RWF",
    period: "per session",
    tagline: "Low commitment test drive for visiting lifters and curious newcomers.",
    featured: false,
    inclusions: [
      "Full single-day training floor access",
      "Choice of 1 coach-led group class",
      "Access to locker rooms & hot showers",
      "Complimentary locker towel service",
    ],
    ctaText: "Book Day Pass",
    href: "/contact?plan=day-pass",
  },
  {
    id: "standard-monthly",
    name: "Standard Membership",
    price: "65,000",
    currency: "RWF",
    period: "per month",
    tagline: "The staple membership for dedicated lifters training 3–5 days per week.",
    featured: false,
    inclusions: [
      "Unlimited training floor & turf access 7 days/week",
      "4 coach-led group classes per month",
      "Initial 45-minute movement & goal screening",
      "Dedicated member keycard & locker access",
      "Member rates on specialty workshops",
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
    tagline: "Unrestricted class and floor access for athletes committed to consistent results.",
    featured: true,
    badge: "Most Popular",
    inclusions: [
      "Unlimited access to ALL group classes",
      "Unrestricted open training floor 7 days/week",
      "Monthly 1-on-1 coaching progress check-in",
      "Priority registration for Saturday Team sessions",
      "2 complimentary guest day passes every month",
      "Locker service & IMIZI training towel",
    ],
    ctaText: "Join Unlimited",
    href: "/contact?plan=unlimited",
  },
];

export const pricingFaqs = [
  {
    question: "Can I try the gym before committing to a membership?",
    answer:
      "Yes. You can book a free single-session trial via our Visit page or purchase a 15,000 RWF Day Pass which grants full gym floor and class access for the day.",
  },
  {
    question: "Are coach-led classes included in the memberships?",
    answer:
      "Our Performance Unlimited plan includes unlimited classes. The Standard Membership includes 4 class credits per month, with discounted drop-ins if you wish to take more.",
  },
  {
    question: "Can I pause my membership if I travel outside Kigali?",
    answer:
      "Yes. Both Standard and Performance monthly memberships can be paused for up to 30 days per calendar year with 5 days advance notice at reception.",
  },
  {
    question: "What should I bring for my first session?",
    answer:
      "Clean training shoes (flat-soled or lifting shoes are encouraged for squats/deadlifts), comfortable training clothes, and a water bottle. We provide filtered water and shower facilities.",
  },
];

export const featuredTestimonial = {
  quote:
    "IMIZI isn't the kind of gym with rows of TVs and people staring at their phones. You walk onto the floor, the coaches know your name and your numbers, and the work gets done. It transformed how I train in Kigali.",
  author: "Christian Nkurunziza",
  role: "Member for 2 years · Recreational Powerlifter",
  city: "Kigali",
};

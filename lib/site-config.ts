// -----------------------------------------------------------------------------
// Central site configuration.
// Edit organization details, schedule, contacts, and links here in one place.
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: "Shree Ram Sharnam New Hyde Park",
  shortName: "Shree Ram Sharnam",
  tagline: "Prayer • Devotion • Community",
  description:
    "Shree Ram Sharnam New Hyde Park — a place for prayer, devotion, satsang, spiritual growth, and community. Join us every Saturday from 9:30 AM to 11:00 AM.",

  address: {
    line1: "107 Marcus Avenue",
    line2: "New Hyde Park, NY 11040",
    full: "107 Marcus Avenue, New Hyde Park, NY 11040",
  },

  satsang: {
    day: "Every Saturday",
    time: "9:30 AM – 11:00 AM",
  },

  email: "srsashramnewyork@gmail.com",

  contacts: [
    { name: "Mr. Madhu Bhushan Chadha", phone: "(917) 821-1744", tel: "+19178211744" },
    { name: "Mr. Sudesh Kumar", phone: "(516) 312-8585", tel: "+15163128585" },
    { name: "Mr. Sanjeev Gupta", phone: "(917) 422-1902", tel: "+19174221902" },
  ],

  // ---------------------------------------------------------------------------
  // GoFundMe campaign URL.
  // The URL has NOT been provided yet. Leave this empty string ("") and the
  // Donate button will show "GoFundMe Link Coming Soon". When the real campaign
  // URL is available, paste it below and the button becomes active automatically.
  // Example: GOFUNDME_URL = "https://www.gofundme.com/f/your-campaign"
  // ---------------------------------------------------------------------------
  GOFUNDME_URL: "",

  // Google Maps links (no API key required).
  maps: {
    // Embed URL used in an <iframe> on the Contact page (keyless).
    embed:
      "https://www.google.com/maps?q=107+Marcus+Avenue,+New+Hyde+Park,+NY+11040&output=embed",
    // Directions link opened in a new tab for "Get Directions".
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=107+Marcus+Avenue,+New+Hyde+Park,+NY+11040",
  },
} as const

export const weeklyEvent = {
  title: "Weekly Satsang & Path",
  day: "Every Saturday",
  time: "9:30 AM – 11:00 AM",
  description:
    "Our weekly gathering for collective prayer, recitation of the Amrit Vani, bhajans, and satsang. All are warmly welcome — no prior experience needed.",
}

export const events = [
  {
    title: "Ram Navami Celebration",
    when: "Spring — Chaitra Shukla Navami",
    description:
      "A joyous celebration of the birth of Lord Ram, with special path, kirtan, and prasad shared among the sangat.",
  },
  {
    title: "Guru Purnima",
    when: "Summer — Ashadha Purnima",
    description:
      "A day of gratitude and reverence to our revered gurus, with devotional readings and reflections on their teachings.",
  },
  {
    title: "Janmashtami",
    when: "Late Summer",
    description:
      "Celebrating the birth of Lord Krishna with bhajans, satsang, and community festivities.",
  },
  {
    title: "Diwali & Annual Havan",
    when: "Autumn",
    description:
      "The festival of lights observed with a special havan, prayers for peace and prosperity, and a shared community meal.",
  },
] as const


export const satsangCalendar2026 = {
  weekly: {
    title: "Weekly Satsang",
    schedule: "Every Saturday · 9:30 AM – 11:00 AM",
    details: "Shree Amritvani Ji Sankirtan, Granth Path, Bhajans, & Maharaj Ji's Pravachan",
  },
  newYear: {
    date: "January 1, 2026 (Thursday)",
    time: "9:30 AM – 11:00 AM",
    details: "Shree Amritvani Ji Sankirtan, Bhajan, & Maharaj Ji's Pravachan",
  },
  specialEvents: [
    {
      date: "March 15, 2026 (Sunday)",
      title: "Avtaran Diwas — Param Pujya Dr. Vishwamitter Ji Maharaj (1940)",
      time: "To be announced",
    },
    {
      date: "April 2, 2026 (Thursday)",
      title: "Chaitra Poornima — Avtaran Diwas of Shree Swami Satyanand Ji Maharaj (1868)",
      time: "April 4, 2026 (Saturday) · 9:30 AM – 12:00 PM",
    },
    {
      date: "July 2, 2026 (Thursday)",
      title: "Nirvaan Diwas — Param Pujya Shree Vishwamitter Ji Maharaj (2012)",
      time: "July 4, 2026 (Saturday) · 9:30 AM – 12:00 PM",
    },
    {
      date: "July 29, 2026 (Wednesday)",
      title: "Guru Poornima / Vyas Poornima & Nirvaan Diwas — Param Pujya Shree Prem Ji Maharaj (1993)",
      time: "August 1, 2026 (Saturday) · 9:30 AM – 12:00 PM",
    },
    {
      date: "October 2, 2026 (Friday)",
      title: "Avtaran Diwas — Param Pujya Shree Prem Ji Maharaj (1920)",
      time: "October 3, 2026 (Saturday) · 9:30 AM – 12:00 PM",
    },
    {
      date: "November 13, 2026 (Friday)",
      title: "Nirvaan Diwas — Param Pujya Shree Swami Satyanand Ji Maharaj (1960)",
      time: "November 14, 2026 (Saturday) · 9:30 AM – 12:00 PM",
    },
  ],
  purnimaJaap: [
    ["January 3, 2026", "Saturday", "11:00 AM – 12:00 PM"],
    ["February 1, 2026", "Sunday", "5:00 PM – 7:00 PM"],
    ["March 3, 2026", "Tuesday", "5:00 PM – 7:00 PM"],
    ["April 2, 2026", "Thursday", "5:00 PM – 7:00 PM"],
    ["May 1, 2026", "Friday", "5:00 PM – 7:00 PM"],
    ["May 30, 2026", "Saturday", "11:00 AM – 12:00 PM"],
    ["June 29, 2026", "Monday", "5:00 PM – 7:00 PM"],
    ["July 29, 2026", "Wednesday", "5:00 PM – 7:00 PM"],
    ["August 28, 2026", "Friday", "5:00 PM – 7:00 PM"],
    ["September 26, 2026", "Saturday", "11:00 AM – 12:00 PM"],
    ["October 26, 2026", "Monday", "5:00 PM – 7:00 PM"],
    ["November 24, 2026", "Tuesday", "5:00 PM – 7:00 PM"],
    ["December 23, 2026", "Wednesday", "5:00 PM – 7:00 PM"],
  ],
} as const

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
] as const

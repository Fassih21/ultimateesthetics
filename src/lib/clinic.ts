export const clinic = {
  name: "Ultimate Esthetics",
  tagline: "Embrace Your Radiance",
  established: 2014,
  specialty: "Hair Transplant & Aesthetic Medicine",
  phone: "+92 334 0005909",
  whatsappNumber: "923340005909",
  email: "info@ultimateesthetics.pk",
  address: {
    line1: "Al-Ain Arcade, Fazal Town",
    line2: "Old Airport Road",
    city: "Rawalpindi",
    postal: "44000",
    country: "Pakistan",
  },
  hours: [
    { day: "Monday – Saturday", time: "11:00 AM – 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  rating: { score: 5.0, count: 172, source: "Google" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ultimate+Esthetics+Rawalpindi",
  mapsEmbed:
    "https://www.google.com/maps?q=Ultimate+Esthetics+Al-Ain+Arcade+Fazal+Town+Rawalpindi&output=embed",
  payment: {
    easypaisa: {
      title: "Easypaisa",
      account: "0334-0005909",
      name: "Ultimate Esthetics",
    },
    bank: {
      title: "Bank Transfer",
      bank: "Details available on request",
      account: "Please contact us via WhatsApp for current account details",
      name: "Ultimate Esthetics",
    },
  },
};

export const services = [
  {
    slug: "hair-transplant-fue",
    title: "FUE Hair Transplant",
    short:
      "Follicular Unit Extraction using precision micro-punches for a natural, permanent hairline.",
    description:
      "Our FUE procedure extracts individual follicular units from the donor area and places them along a carefully designed hairline. The result is a natural density, minimal scarring, and rapid recovery.",
    highlights: [
      "Personal consultation & hairline design",
      "Sterile operating environment",
      "Local anaesthesia — comfortable throughout",
      "Post-operative care & follow-ups",
    ],
  },
  {
    slug: "beard-eyebrow-restoration",
    title: "Beard & Eyebrow Restoration",
    short:
      "Refined follicular grafting to restore density and definition to beards and brows.",
    description:
      "Precision grafting for patchy beards, thin brows, or scar coverage. Every graft is angled to match your natural growth pattern.",
    highlights: [
      "Custom shape design",
      "Fine single-hair grafts",
      "Natural growth direction",
      "Discreet recovery",
    ],
  },
  {
    slug: "prp-therapy",
    title: "PRP Hair Therapy",
    short:
      "Platelet-Rich Plasma injections to strengthen existing hair and support new growth.",
    description:
      "A non-surgical treatment using your own concentrated platelets to nourish the follicles, reduce shedding, and improve scalp health.",
    highlights: [
      "Non-surgical, minimal downtime",
      "Sessions spaced over months",
      "Suitable alongside transplant",
      "Sterile in-clinic preparation",
    ],
  },
  {
    slug: "skin-aesthetics",
    title: "Skin & Aesthetic Treatments",
    short:
      "A curated range of medical facials and skin treatments delivered by trained professionals.",
    description:
      "Consultations for pigmentation, acne, and general skin health, with treatments matched to your skin type and goals.",
    highlights: [
      "Qualified aestheticians",
      "Medical-grade products",
      "Personal treatment plan",
      "Follow-up guidance",
    ],
  },
];

export const results = [
  {
    id: "r1",
    title: "Post-Procedure Day 1",
    caption: "Immediately after a graft session — clean, precise donor and recipient areas.",
    image: "/images/result-1.png",
  },
  {
    id: "r2",
    title: "Recipient Area Detail",
    caption: "Uniform graft placement along the designed hairline.",
    image: "/images/result-2.png",
  },
  {
    id: "r3",
    title: "Recovery Overview",
    caption: "Clean recovery — a typical view following a successful FUE procedure.",
    image: "/images/result-3.png",
  },
];

export const galleryImages = [
  { src: "/images/clinic-1.png", alt: "Reception and consultation lounge" },
  { src: "/images/clinic-2.png", alt: "Private consultation room" },
  { src: "/images/logo-wall.png", alt: "Ultimate Esthetics signature wall" },
  { src: "/images/procedure-1.png", alt: "Procedure moments" },
  { src: "/images/procedure-2.png", alt: "Precision instrument during grafting" },
  { src: "/images/result-1.png", alt: "Immediate post-procedure result" },
];

export const reviews = [
  {
    name: "Tehmina Shoukat",
    rating: 5,
    date: "8 months ago",
    text: "The services were very good and the staff Sahrish's behavior was excellent. She's a well trained professional. She guided me about the procedure in a very good way and cooperated with me the whole time.",
  },
  {
    name: "Muhammad Abubakar",
    rating: 5,
    date: "2 months ago",
    text: "Got my hair transplant surgery from Ultimate Esthetics. Had a wonderful experience — everything went so smooth and painless. Highly professional staff and comfortable environment. Highly recommended for all hair and skin treatments.",
  },
  {
    name: "Suhaib Hassan",
    rating: 5,
    date: "1 month ago",
    text: "I had my hair transplant from Ultimate Esthetics. Mrs. Naila and Mehran did a great job. The whole team is highly cooperative. I highly recommend this to everyone.",
  },
];

export function whatsappLink(message = "") {
  const base = `https://wa.me/${clinic.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

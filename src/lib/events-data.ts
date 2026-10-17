export type EventMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; thumbnail: string; alt?: string };

export type EventItem = {
  slug: string; // ইংরেজি ছোট হাতের অক্ষর, স্পেসের বদলে -, প্রতিটা আলাদা হতে হবে
  title: string;
  date: string; // YYYY-MM-DD ফরম্যাটে, যেমন "2026-11-05"
  time?: string; // যেমন "6:30 PM"
  location?: string;
  description: string; // কার্ডে দেখানো সংক্ষিপ্ত বিবরণ
  details?: string[]; // ডিটেইল পেজের অতিরিক্ত অনুচ্ছেদ (ঐচ্ছিক)
  media?: EventMedia; // কার্ডের কভার: একটা ছবি অথবা একটা ভিডিও (ঐচ্ছিক)
  gallery?: EventMedia[]; // ডিটেইল পেজের আরও ছবি/ভিডিও (ঐচ্ছিক)
};

export const events: EventItem[] = [
  {
    slug: "digital-marketing-workshop",
    title: "Digital Marketing Workshop",
    date: "2026-11-05",
    time: "6:30 PM",
    location: "Rangpur, Bangladesh",
    description: "ইভেন্টের সংক্ষিপ্ত বিবরণ এখানে লিখুন।",
    // details: [
    //   "ডিটেইল পেজের প্রথম অনুচ্ছেদ।",
    //   "ডিটেইল পেজের দ্বিতীয় অনুচ্ছেদ।",
    // ],
    // ছবি দিতে চাইলে:
    // media: { type: "image", src: "/events/workshop/photo.jpg", alt: "Workshop" },
    // gallery: [
    //   { type: "image", src: "/events/workshop/photo-2.jpg" },
    //   { type: "image", src: "/events/workshop/photo-3.jpg" },
    // ],
  },
  {
    slug: "web-development-meetup",
    title: "Web Development Meetup",
    date: "2026-11-20",
    time: "5:00 PM",
    location: "Online",
    description: "ইভেন্টের সংক্ষিপ্ত বিবরণ এখানে লিখুন।",
  },
  {
    slug: "seo-strategy-session",
    title: "SEO Strategy Session",
    date: "2026-09-10",
    time: "4:00 PM",
    location: "Rangpur, Bangladesh",
    description: "ইভেন্টে কী কী হয়েছিল তার বিবরণ এখানে লিখুন।",
    // ভিডিও দিতে চাইলে থাম্বনেইল দিতেই হবে:
    // media: {
    //   type: "video",
    //   src: "/events/seo-session/highlights.mp4",
    //   thumbnail: "/events/seo-session/thumb.jpg",
    // },
    // gallery: [
    //   { type: "image", src: "/events/seo-session/photo-1.jpg" },
    //   {
    //     type: "video",
    //     src: "/events/seo-session/clip-2.mp4",
    //     thumbnail: "/events/seo-session/clip-2-thumb.jpg",
    //   },
    // ],
  },
];
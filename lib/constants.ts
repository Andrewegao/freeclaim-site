export const IOS_URL =
  "https://apps.apple.com/us/app/freeclaim-class-action-money/id6760684773";
export const IOS_APP_ID = "6760684773";

export const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=com.andrewgao.freeclaim";

export const COMPANY = "Qupid, LLC";
export const PRODUCT = "FreeClaim";
export const TAGLINE = "Find class action settlements you're owed.";

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://andrewegao.github.io";
export const SITE_PATH =
  process.env.NEXT_PUBLIC_USE_BASE_PATH === "false" ? "" : "/freeclaim-site";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? `${SITE_ORIGIN}${SITE_PATH}`;

export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Settlements", href: "/#settlements" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
];

export const FOOTER_PRODUCT = [
  { label: "App Store", href: IOS_URL, external: true },
  { label: "Google Play", href: ANDROID_URL, external: true },
];

export const FOOTER_COMPANY = [
  { label: "Support", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const MARQUEE_BRANDS = [
  "Google",
  "Apple",
  "Amazon",
  "Meta",
  "T-Mobile",
  "Equifax",
  "Capital One",
  "Verizon",
  "Yahoo",
  "AT&T",
  "Wells Fargo",
  "Samsung",
];

export const STEPS: { number: string; title: string; body: string; image: string }[] = [
  {
    number: "01",
    title: "Browse",
    body: "Active settlements from companies you've actually used. Updated weekly.",
    image: "/screenshots/step-1.png",
  },
  {
    number: "02",
    title: "Tap to file",
    body: "Most claims need no proof. Just review and submit.",
    image: "/screenshots/step-2.png",
  },
  {
    number: "03",
    title: "Get paid directly",
    body: "Money goes straight to you. We take nothing, ever.",
    image: "/screenshots/step-3.png",
  },
];

export const REVIEWS: { body: string; name: string }[] = [
  {
    body: "Got $397 from the Facebook face-tagging settlement. I lived in Illinois years ago and FreeClaim still flagged me as eligible. The deadline alert is what saved me.",
    name: "Jordan W.",
  },
  {
    body: "Capital One paid me $312 for fraud-prevention costs from the 2019 breach. I had no idea I could even claim that. Filed in under 5 minutes.",
    name: "Priya K.",
  },
  {
    body: "$50 from the MacBook butterfly keyboard settlement. Completely forgot I'd had the keyboard replaced years ago, and FreeClaim matched it for me.",
    name: "Sam O.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is FreeClaim?",
    a: "FreeClaim helps you find and file class action settlement claims. Companies settle lawsuits and set aside money for affected consumers, and most people never claim it. FreeClaim makes it easy to find settlements you qualify for and file your claim in minutes.",
  },
  {
    q: "How does FreeClaim work?",
    a: "Browse available settlements, check eligibility requirements, and file claims directly through the official settlement administrator's website. We provide the information; you keep the payout.",
  },
  {
    q: "Is FreeClaim really free?",
    a: "Yes, always. There are no subscriptions, no hidden fees, and no percentage taken from your payouts.",
  },
  {
    q: "Where does the settlement data come from?",
    a: "Settlement information is sourced from publicly available court records and verified settlement administrator websites. We update our database regularly to include new settlements.",
  },
  {
    q: "Do I need to provide proof to file a claim?",
    a: "It depends on the settlement. Many settlements require no proof at all, just your name and email. For settlements that do require documentation, the app clearly indicates what's needed.",
  },
  {
    q: "How much money can I get?",
    a: "Payouts vary by settlement. Individual amounts can range from a few dollars to several hundred dollars. The app shows the estimated payout amount for each settlement.",
  },
  {
    q: "When will I receive my money?",
    a: "Settlement payouts are handled by court-appointed administrators, not by FreeClaim. Processing times vary but typically range from a few weeks to several months after the claim deadline closes.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. All your data is stored locally on your device. We don't operate servers or databases with your personal information. See our Privacy Policy for full details.",
  },
];

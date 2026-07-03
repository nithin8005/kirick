import { assetUrl } from '../lib/assets.js'
import { INSTAGRAM_URL } from '../lib/instagram.js'

export const promoMarqueeText = '10% off 4 pack * Dosa went Rogue *'

export const comicTaglineRibbon = "Flavours that slap harder than Amma's Chappal"

export const comicHeroCopy = {
  headline: ['PURE CHAOS.', 'SERIOUS CRUNCH.', 'MAXIMUM TROUBLE.'],
  tagline: ['DOSA CHIPS — MADE FROM DOSA', 'BUT NOT YOUR REGULAR DOSA.'],
}

export const heroBackground = {
  src: '/images/hero-banner.png',
  alt: 'KIRIK dosa chips hero artwork',
}

/** Looping hero background — swap src if you add a dedicated tawa clip to public/videos/ */
export const heroTawaVideo = {
  src: '/videos/Video-471.mp4',
  label: 'Dosa preparing on tawa',
}

export const comicProductMeta = {
  'green-chutney': {
    flavorPop: 'Pudina fresh!',
    cardBg: 'linear-gradient(180deg, rgba(199, 255, 41, 0.38) 0%, #f5f6f8 100%)',
    cardInk: 'var(--kirik-navy)',
    accent: 'var(--kirik-pear)',
  },
  'tangy-salty': {
    flavorPop: 'Chaat tangy!',
    cardBg: 'linear-gradient(180deg, rgba(238, 163, 199, 0.38) 0%, #f5f6f8 100%)',
    cardInk: 'var(--kirik-navy)',
    accent: 'var(--kirik-lavender-pink)',
  },
  'kara-podi': {
    flavorPop: 'Yum spicy!',
    cardBg: 'linear-gradient(180deg, rgba(239, 91, 35, 0.36) 0%, #f5f6f8 100%)',
    cardInk: 'var(--kirik-navy)',
    accent: 'var(--kirik-cinnabar)',
  },
  'ginger-jaggery': {
    flavorPop: 'Sweet heat!',
    cardBg: 'linear-gradient(180deg, rgba(66, 118, 187, 0.34) 0%, #f5f6f8 100%)',
    cardInk: 'var(--kirik-navy)',
    accent: 'var(--kirik-celtic-blue)',
  },
}

export const comicBuildBox = {
  titleLines: ['BUILD YOUR', 'OWN BOX'],
  subtitleLines: ['You Choose. We Pack.', 'The Perfect Box of Crunch'],
}

export const comicRogueSection = {
  smallHeading: ['WANT A', 'TASTE?'],
  smallHeadingAccent: 'THE DOSA THAT WENT ROGUE...',
  mainHeading: 'The good stuff in every bag',
  paragraph: 'No fake claims — just dosa chips your amma would actually nod at.',
  description:
    'Made from Real Dosa, Naturally Gluten Free, NO Palm Oil, Ridiculous Crunch, Indian Flavours, No Artificial Colors, nostalgia in every bite, farm to banana leaf',
  chips: [
    'Made From Real Dosa',
    'Gluten Free',
    'NO Palm Oil',
    'Ridiculous Crunch',
    'Indian Flavours',
    'No Artificial Colors',
    'Farm to Banana Leaf',
    'Nostalgia in Every Bite',
  ],
  image: assetUrl('/dosa-rogue.png'),
  imageAlt: 'Illustration of dosa with chips on a plate',
}

export const comicDietaryBullets = [
  'Made from Real Dosa',
  'Naturally Gluten Free',
  'NO Palm Oil',
  'Ridiculous Crunch',
  'Indian Flavours',
  'No Artificial colours',
  'Nostalgia in every bite',
  'Farm to banana leaf',
]

export const dietaryFeatures = [
  { id: 'rice-bran-oil', label: 'Rice bran oil', blurb: 'Light fry, full crunch' },
  { id: 'tradition-twisted', label: 'Tradition twisted', blurb: 'Dosa vibes, snack format' },
  { id: 'gluten-free', label: 'Gluten free', blurb: 'Snack easy, worry less' },
  { id: 'real-dosa', label: 'Real dosa', blurb: 'Not potato chips in disguise' },
]

export const products = [
  {
    id: 'green-chutney',
    name: 'Green Chutney',
    tagline: 'Fresh, zesty, certified chaos',
    description:
      'Our Green Chutney flavor hits like your favorite chutney — bold herb notes with a clean crunch finish.',
    longDescription:
      'No...Yes... DOSA CHIPS is made from Dosa, but not your regular dosa. Bold chutney notes, certified crunch, and plot-twist flavor in every bite.',
    price: '₹38/-',
    priceWas: '₹40/-',
    isNew: true,
    dietary: ['Gluten free', 'Rice bran oil'],
    combo: 'Pair with mint yogurt dip or masala chai for peak kirik.',
    image: assetUrl('/images/products/green-chutney-front.png'),
    imageBack: assetUrl('/images/products/green-chutney-back.png'),
    heroImage: assetUrl('/images/products/green-chutney-back.png'),
    showcaseImage: assetUrl('/images/products/green-chutney-showcase.png'),
    imageLabel: 'Green Chutney packet — front view',
    gridBlurb: 'Bold, fresh and filled with umami flavour',
  },
  {
    id: 'tangy-salty',
    name: 'Tangy & Salty',
    tagline: 'Chatpata crunch, salt with swagger',
    description:
      'Black salt, pink salt, and amchur tang on a real dosa crunch — familiar desi vibes with a plot twist.',
    longDescription:
      'Tangy & Salty Dosa Chips — black salt, pink salt, sea salt, cumin, and amchur on an authentic dosa base. Gluten free, rice bran oil, and crunch loyalty in every bite.',
    price: '₹38/-',
    priceWas: '₹40/-',
    isNew: true,
    dietary: ['Gluten free', 'Rice bran oil'],
    combo: 'Best with masala chai, chaas, or a simple cup of filter coffee.',
    image: assetUrl('/images/products/tangy-salty-front.png'),
    imageBack: assetUrl('/images/products/tangy-salty-back.png'),
    heroImage: assetUrl('/images/products/tangy-salty-front.png'),
    showcaseImage: assetUrl('/images/products/tangy-salty-showcase.png'),
    imageLabel: 'Tangy & Salty packet — front view',
    gridBlurb: 'Chatpata crunch, salt with swagger',
  },
  {
    id: 'kara-podi',
    name: 'Kara Podi',
    tagline: 'Spice level: Kirik Certified',
    description:
      'Podi-powered punch for spice lovers. Crunch first, fire second, loyalty always.',
    longDescription:
      'Podi-powered punch for spice lovers. Spice level: Kirik Certified. Crunch first, fire second.',
    price: '₹38/-',
    priceWas: '₹40/-',
    isNew: true,
    dietary: ['Gluten free', 'Rice bran oil'],
    combo: 'Stack with curd rice vibes or lemon soda — no judgment.',
    image: assetUrl('/images/products/kara-podi-front.png'),
    imageBack: assetUrl('/images/products/kara-podi-back.png'),
    heroImage: assetUrl('/images/products/kara-podi-back.png'),
    showcaseImage: assetUrl('/images/products/kara-podi-showcase.png'),
    imageLabel: 'Kara Podi packet — front view',
    gridBlurb: 'Spice level: Kirik Certified heat',
  },
  {
    id: 'ginger-jaggery',
    name: 'Ginger Jaggery',
    tagline: 'Sweet heat, desi comfort',
    description:
      'Warm ginger meets jaggery sweetness on every crisp bite — nostalgic with a plot twist.',
    longDescription:
      'Ginger Jaggery Dosa Chips — sweet, spicy, and certified crunchy. Real dosa base, rice bran oil, gluten free.',
    price: '₹38/-',
    priceWas: '₹40/-',
    isNew: true,
    dietary: ['Gluten free', 'Rice bran oil'],
    combo: 'Pair with filter coffee or warm milk for peak comfort-snack mode.',
    image: assetUrl('/images/products/ginger-jaggery-front.png'),
    imageBack: assetUrl('/images/products/ginger-jaggery-back.png'),
    heroImage: assetUrl('/images/products/ginger-jaggery-front.png'),
    showcaseImage: assetUrl('/images/products/ginger-jaggery-showcase.png'),
    imageLabel: 'Ginger Jaggery packet — front view',
    gridBlurb: 'Sweet heat, desi comfort',
  },
]

export const instagramFallbackPosts = [
  ...products.map((p) => ({
    id: `ig-fallback-${p.id}`,
    mediaUrl: p.showcaseImage,
    permalink: INSTAGRAM_URL,
    caption: `${p.name} — KIRIK Dosa Chips`,
    mediaType: 'IMAGE',
  })),
  {
    id: 'ig-fallback-chips',
    mediaUrl: assetUrl('/images/chips-scatter.png'),
    permalink: INSTAGRAM_URL,
    caption: 'KIRIK crunch energy',
    mediaType: 'IMAGE',
  },
  {
    id: 'ig-fallback-dosa',
    mediaUrl: assetUrl('/images/dosa-chip.png'),
    permalink: INSTAGRAM_URL,
    caption: 'Certified dosa chips',
    mediaType: 'IMAGE',
  },
].slice(0, 6)

/** Add more videos: drop .mp4 files in public/videos/ and add an entry here. */
export const socialVideos = [
  {
    id: 'video-633',
    src: '/videos/Video-633.mp4',
    label: 'KIRIK brand video',
  },
  {
    id: 'video-113',
    src: '/videos/Video-113.mp4',
    label: 'KIRIK social video',
  },
  {
    id: 'video-471',
    src: '/videos/Video-471.mp4',
    label: 'KIRIK social video',
  },
  {
    id: 'video-473',
    src: '/videos/Video-473.mp4',
    label: 'KIRIK social video',
  },
  {
    id: 'video-458',
    src: '/videos/Video-458.mp4',
    label: 'KIRIK social video',
  },
  {
    id: 'video-459',
    src: '/videos/Video-459.mp4',
    label: 'KIRIK social video',
  },
  {
    id: 'video-460',
    src: '/videos/Video-460.mp4',
    label: 'KIRIK social video',
  },
  {
    id: 'video-470',
    src: '/videos/Video-470.mp4',
    label: 'KIRIK social video',
  },
]

export const faqs = [
  {
    question: 'Is this real Dosa?',
    answer:
      'Yes. KIRIK Dosa Chips are made from a real dosa base. Crispy enough to confuse your brain, tasty enough to finish the packet.',
  },
  {
    question: 'Is this healthy?',
    answer:
      'Healthier than finishing an entire family-size chips packet at 2AM. KIRIK Dosa Chips are made with authentic dosa ingredients and fried with no palm oil. Nutritional information is available on the packaging — but honestly, your taste buds may ignore it after the first bite.',
  },
  {
    question: "Who's the founder?",
    answer:
      'Nice try. Even our snacks don’t reveal secrets that easily. But yes, the founder is real, slightly snack-obsessed, and probably arguing about chutney somewhere right now. For the full story, check out the “Our Story” section.',
  },
  {
    question: 'What are the available flavors?',
    answer:
      'We currently offer Green Chutney, Tangy & Salty, Kara Podi, and Ginger Jaggery. Stay tuned for new releases!',
  },
  {
    question: 'Where can I buy Kirik Dosa Chips?',
    answer:
      'Online, in select stores, and possibly from that one friend who never shares snacks.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Currently, we primarily ship within India. We are working to expand our reach internationally.',
  },
  {
    question: 'Are Kirik Dosa Chips gluten-free?',
    answer:
      'Yes, the chips are naturally gluten-free as they are made from fermented rice and lentil batter. We are also allergen free.',
  },
  {
    question: 'What is the shelf life of the chips?',
    answer: 'Check the best by date on the back of packaging.',
  },
  {
    question: 'What is the main ingredient?',
    answer:
      'Kirik Dosa Chips are primarily made from a batter of rice and lentils (like urad dal), fermented like traditional dosa.',
  },
  {
    question: 'Are there any preservatives or artificial colors?',
    answer:
      'We pride ourselves on using only natural ingredients and spices. There are minimal salts to maximize our shelf life.',
  },
  {
    question: 'Can I use these chips with dips?',
    answer:
      'Absolutely! They pair excellently with traditional chutneys (like coconut or tomato) or modern dips like hummus or salsa.',
  },
  {
    question: 'Are the chips vegan?',
    answer:
      'Yes. 100% vegan. No dairy. No animal products. Just pure crunch and questionable self-control.',
  },
  {
    question: 'How many calories are in a serving?',
    answer:
      'A typical serving (30grams) contains approximately ___ calories, depending on the flavor. Full nutritional facts are on the packaging.',
  },
  {
    question: 'Do you offer corporate or bulk orders?',
    answer:
      'Yes. Whether it’s office gifting, events, or feeding an entire team during a boring meeting — we’ve got bulk orders covered. Contact us at sales@kirikdosachips.in and let the crunch begin.',
  },
  {
    question: 'Do your snacks contain artificial preservatives?',
    answer:
      'We aim to maintain quality and freshness while using ingredients that meet food safety and industry standards.',
  },
  {
    question: 'How can I become a distributor or retailer?',
    answer:
      'You can contact us through our official communication info@kirikdosachips.in and provide us with your business details for distributorship opportunities.',
  },
  {
    question: 'Can I collaborate with your brand?',
    answer:
      'Yes, we welcome collaborations when it’s a good fit with distributors, retailers, influencers, etc.',
  },
  {
    question: 'Are your snacks suitable for all age groups?',
    answer:
      'Absolutely. Kids love the crunch, adults love the nostalgia, and grandparents secretly ask for a second packet.',
  },
  {
    question: 'How can customers stay updated about new launches?',
    answer:
      'Easy. Follow our socials before your friends do and act like you discovered the flavor first.',
  },
  {
    question: 'Which snack goes best with chai?',
    answer:
      'That depends on your mood — but our crunchy flavors are made to pair perfectly with tea-time cravings.',
  },
  {
    question: "What's the best way to enjoy Cheeky snacks?",
    answer:
      'Open the pack immediately. Waiting is overrated. Pair it with chai, coffee, cold drinks, or your favorite dip. Crumble it over your usual meals for extra crunch, or just eat it straight from the packet like a true KIRIK professional.',
  },
  {
    question: 'Do you offer return or replacement support?',
    answer:
      'Yes. If you receive a damaged or defective product, our team will review the concern and assist you with the appropriate support. Customer satisfaction matters to us — just reach out with the product details and we’ll take it from there.',
  },
  {
    question: 'Is batch tracking available for products?',
    answer:
      'Yes, product batch details are available on the packaging for traceability purposes.',
  },
  {
    question: 'How quickly can orders be processed?',
    answer:
      'Order timelines depend on quantity, location, and operational schedules.',
  },
  {
    question: 'Is this gym-friendly?',
    answer: 'Depends. Are you doing cardio between bites?',
  },
  {
    question: 'Which flavor is the spiciest?',
    answer: "Kara Podi doesn't believe in peace.",
  },
]

export const stickers = [
  {
    title: 'KIRIK CERTIFIED DOSA',
    visual: 'Kirik above a dosa saying Certified Dosa.',
    imageLabel: 'Certified Dosa badge sticker',
  },
  {
    title: 'Dosa Walked So I Could Run',
    visual: 'Sticker of a chip sprinting past a sleepy folded dosa.',
    imageLabel: 'Sprinting chip vs sleepy dosa',
  },
  {
    title: 'Emotionally Unavailable. Crunchy AF.',
    visual: 'A chip ghosting a chutney dip.',
    imageLabel: 'Chip ghosting chutney',
  },
  {
    title: "Kirik, I'm the Plot Twist.",
    visual: 'Plot twist scene — train scene.',
    imageLabel: 'Train scene plot twist',
  },
  {
    title: 'Caution: may result in kirik nature',
    visual:
      'Cautionary warning style on the packet or next to it — like a hazard label for certified chaos.',
    imageLabel: 'Caution warning sticker',
  },
  {
    title: 'Crunchy vs. Crispy (Dosa Fight Club)',
    visual: 'Two chip-shaped characters arguing; optional referee (chip or masala shaker) between them.',
    dialogue: [
      'Character 1 (pointing): “It’s crunchy!”',
      'Character 2 (crossed arms): “No, it’s crispy, bro!”',
      'Referee: “Let the chips decide.”',
    ],
    imageLabel: 'Crunchy vs crispy fight club',
  },
  {
    title: 'Mind Blown (Flavor Explosion)',
    visual: 'A character holding a chip, wide-eyed — dialogue above their head.',
    dialogue: ['“Bro… It’s a FLAVOR BOMB 💣🤯”'],
    imageLabel: 'Flavor bomb reaction',
  },
  {
    title: 'Kirik Chip Hero (Super Snack)',
    visual:
      'A dosa chip with a cape, arms on hips, sunglasses on. Text on the side: “Saving snacks. One crunch at a time.”',
    imageLabel: 'Superhero chip with cape',
  },
  {
    title: 'Snack Whisperer (Secret Flavor)',
    visual: 'One chip-shaped character whispering to another.',
    dialogue: [
      'Whispering character: “Psst… It’s dosa magic.”',
      'Other character (shocked): “Whaaat?!”',
    ],
    imageLabel: 'Whispering chips',
  },
  {
    title: 'Heartbreaker Chips (Jealous Snacks)',
    visual: 'Dosa chip walking confidently while cookies and nachos cry in the background.',
    dialogue: [
      'Crying cookie: “They left us…”',
      'Nacho (devastated): “For Kirik??!”',
      'Chip (walking away): “Crunch loyalty, baby.”',
    ],
    imageLabel: 'Jealous snacks scene',
  },
  {
    title: 'Monkeying Around (Wild Crunch)',
    visual: 'A monkey eating a dosa chip while looking smug.',
    dialogue: [
      'Monkey 1: “Too crunchy for humans?”',
      'Monkey 2 (grinning): “Naah. Too addictive.”',
    ],
    imageLabel: 'Monkeys eating chips',
  },
  {
    title: 'Movie Night Vibes (Upgrade Snack)',
    visual: 'Two characters on a couch.',
    dialogue: [
      'Character 1 (holding popcorn bowl): “You brought popcorn?”',
      'Character 2 (lifting Kirik Chips): “Nope. Upgraded.”',
    ],
    imageLabel: 'Couch movie night',
  },
  {
    title: 'Snack Attack (Stealthy Crunch)',
    visual: 'Chip character in ninja pose sneaking up.',
    dialogue: ['Floating text: “They never saw the crunch coming…”'],
    imageLabel: 'Ninja chip sneak attack',
  },
]

export const meters = [
  {
    title: 'Crunch Charge Meter',
    label: 'CRUNCH CHARGED: 100% ⚡',
    visual: 'Icon: battery with dosa chip inside.',
    imageLabel: 'Crunch charge meter',
  },
  {
    title: 'Spice-O-Meter',
    label: 'SPICE LEVEL: 🔥🔥🔥 Kirik Certified.',
    visual: 'Thermometer bursting flames.',
    imageLabel: 'Spice-O-Meter',
  },
]

export const stickerBrandCloud = {
  title: 'Fluffy Dosa Cloud Bubble',
  visual: 'Floating text in a dosa-shaped cloud.',
  tags: ['Wholesome.', 'Local.', 'Real dosa'],
}

export const stickersPageFooter = 'Kirik nan maga stickers'

export const howToEatFlavors = [
  {
    id: 'green-chutney',
    name: 'GREEN CHUTNEY',
    image: assetUrl('/images/products/green-chutney-front.png'),
    imageBack: assetUrl('/images/products/green-chutney-back.png'),
    showcaseImage: assetUrl('/images/products/green-chutney-showcase.png'),
    imageLabel: 'Green Chutney — front and back packaging',
  },
  {
    id: 'tangy-salty',
    name: 'TANGY & SALTY',
    image: assetUrl('/images/products/tangy-salty-front.png'),
    imageBack: assetUrl('/images/products/tangy-salty-back.png'),
    showcaseImage: assetUrl('/images/products/tangy-salty-showcase.png'),
    imageLabel: 'Tangy & Salty — front and back packaging',
  },
  {
    id: 'kara-podi',
    name: 'KARA PODI',
    image: assetUrl('/images/products/kara-podi-front.png'),
    imageBack: assetUrl('/images/products/kara-podi-back.png'),
    showcaseImage: assetUrl('/images/products/kara-podi-showcase.png'),
    imageLabel: 'Kara Podi — front and back packaging',
  },
  {
    id: 'ginger-jaggery',
    name: 'GINGER JAGGERY',
    image: assetUrl('/images/products/ginger-jaggery-front.png'),
    imageBack: assetUrl('/images/products/ginger-jaggery-back.png'),
    showcaseImage: assetUrl('/images/products/ginger-jaggery-showcase.png'),
    imageLabel: 'Ginger Jaggery — front and back packaging',
  },
]

export const aboutContent = {
  paragraphs: [
    'At KIRIK, snacks are never just snacks. They’re moods, moments, cravings, chaos, and comfort all packed into one crunchy bite.',
    'We’re here for the snack obsessed, the midnight munchers, the flavor chasers, and the meme lovers who believe food should come with a little drama. Inspired by iconic desi tastes and street-side cravings, KIRIK transforms familiar flavors into bold, crispy, snackable experiences made for today’s generation.',
    'From chai-time cravings to 3AM binge sessions, our snacks are built for every vibe. Loud flavors, nostalgic twists, and unapologetically fun energy — that’s what makes KIRIK different.',
  ],
  tagline: 'No rules. Just vibe. Just scenes.',
  founder: {
    title: 'Meet the founder',
    paragraphs: [
      'Our founder isn’t who you picture when you think of a brand of dosa chips. Dosa inevitably conjures your friend’s grandma or an Udupi restaurant uncle. Tell us we’re wrong. We’re not wrong.',
      'But our founder is Taylor Forman, an American who has embraced India and its cuisine over the past decade — especially its dosa.',
      'She observed its deliciousness, its ubiquity, and its popularity across India. She thought. She pondered. And she got inspired to turn her favourite part of the dosa (and yours) — the crispy edges — into a unique chip.',
    ],
    bornTagline: 'Kirik was born.',
  },
  closing:
    'And this is the guide to how it speaks, lives, and grows.',
}

export const storyContent = {
  heroLead:
    'KIRIK was born from the kind of energy you can’t ignore — the buzz of crowded streets, late-night conversations, roadside food stalls, college canteens, endless reels, and heated debates over which chutney hits harder.',
  paragraphs: [
    'We grew up loving desi flavors — the spicy, tangy, chatpata snacks that were part of every memory. But we wanted to remix that experience for a new generation. Something bolder. More fun. More expressive. A snack brand with personality.',
    'That’s how KIRIK started — taking familiar flavors and turning them into crunchy, crave-worthy snacks that feel nostalgic and new at the same time.',
    'Today, KIRIK is more than just a snack brand. It’s for people who want more flavor, more fun, and more moments worth sharing. Whether you’re on a midnight scroll, hanging out with friends, watching movies, gaming, working late, or simply too lazy to cook — KIRIK is always part of the vibe.',
  ],
  tagline: 'Crunch loud. Snack louder.',
}

export const brandTags = ['Wholesome.', 'Local.', 'Real dosa']

export const offers = [
  {
    tag: 'Launch',
    title: 'Green Chutney Drop',
    description: 'Fresh, zesty, certified chaos. Intro price ₹38/- (was ₹40/-) — limited batch.',
    date: 'Live now',
    image: assetUrl('/images/products/green-chutney-showcase.png'),
    imageLabel: 'Green Chutney pack',
  },
  {
    tag: 'Bundle',
    title: 'Crunch Quartet',
    description: 'All four flavors in one haul. Green Chutney, Tangy & Salty, Kara Podi & Ginger Jaggery.',
    date: 'Save on 4-pack',
    image: assetUrl('/images/products/tangy-salty-showcase.png'),
    imageLabel: 'Tangy & Salty pack',
  },
]

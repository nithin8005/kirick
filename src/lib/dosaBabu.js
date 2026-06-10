import { faqs, products } from '../data/content'

const CONTACT = {
  general: 'info@kirikdosachips.in',
  sales: 'sales@kirikdosachips.in',
  phone: '+91 87929 70795',
}

const NAV_HINTS = [
  { keywords: ['home', 'start'], to: '/', label: 'Home' },
  { keywords: ['product', 'flavor', 'flavour', 'menu', 'catalog', 'chip'], to: '/products', label: 'Products' },
  { keywords: ['sticker', 'character', 'meme'], to: '/stickers', label: 'Stickers' },
  { keywords: ['offer', 'sale', 'launch', 'event'], to: '/offers', label: 'Offers' },
  { keywords: ['about', 'founder', 'story', 'taylor'], to: '/about', label: 'About Us' },
  { keywords: ['faq', 'question', 'help'], to: '/faq', label: 'FAQ' },
  { keywords: ['term', 'legal', 'policy'], to: '/terms', label: 'Terms' },
]

export const BABU_TRAITS = ['Crunch certified', 'Spice negotiator', 'Chai-time advisor', 'Plot twist energy']

export const BABU_STATUS_LINES = [
  'Sizzling on tawa',
  'Crunch mode: ON',
  'Flavor locked in',
  'Podi levels stable',
  'Certified snack uncle',
]

export const BABU_TYPING_LINES = [
  'Flipping on tawa…',
  'Consulting the podi council…',
  'Crunching the numbers…',
  'Asking the chutney…',
]

export const DOSA_BABU_PLACEHOLDERS = [
  'Ask Babu about flavors…',
  'Which chip hits harder?',
  'Need a crunch recommendation?',
  'Podi level check, saar?',
]

export const DOSA_BABU_OPENINGS = [
  'Vanakkam, saar! Dosa Babu here — your certified crunch guide. What mood are we snacking in today?',
  'Need help? Babu is online, tawa is hot, and the podi is loaded. Shoot your question.',
  'Confused between flavors? Normal. Even Babu argues with himself at 2AM. Tell me your vibe.',
  'Ask me anything… except to share my snacks. That boundary is Kirik-certified.',
  'Plot twist: I’m a dosa who runs customer support. What can Babu sort for you?',
]

export const DOSA_BABU_QUICK_REPLIES = [
  { id: 'track', label: 'Track Order', emoji: '📦' },
  { id: 'products', label: 'Product Details', emoji: '🥡' },
  { id: 'flavors', label: 'Available Flavors', emoji: '🌶️' },
  { id: 'distributor', label: 'Become a Distributor', emoji: '🏪' },
  { id: 'contact', label: 'Contact Team', emoji: '📞' },
  { id: 'complaint', label: 'Raise a Complaint', emoji: '🛠️' },
  { id: 'collab', label: 'Collaboration Enquiry', emoji: '🤝' },
  { id: 'stores', label: 'Store Locations', emoji: '📍' },
]

export function getBabuStatus() {
  return BABU_STATUS_LINES[Math.floor(Math.random() * BABU_STATUS_LINES.length)]
}

export function getBabuTypingLine() {
  return BABU_TYPING_LINES[Math.floor(Math.random() * BABU_TYPING_LINES.length)]
}

export function getBabuPlaceholder() {
  return DOSA_BABU_PLACEHOLDERS[Math.floor(Math.random() * DOSA_BABU_PLACEHOLDERS.length)]
}

export function getRandomOpening() {
  const text = DOSA_BABU_OPENINGS[Math.floor(Math.random() * DOSA_BABU_OPENINGS.length)]
  return {
    text,
    links: [{ to: '/products', label: 'Browse flavors' }],
  }
}

function normalize(text) {
  return text.toLowerCase().trim()
}

function includesAny(text, words) {
  return words.some((w) => text.includes(w))
}

function matchFaq(input) {
  const words = input.split(/\W+/).filter((w) => w.length > 2)
  if (!words.length) return null

  let best = null
  let bestScore = 0

  for (const faq of faqs) {
    const haystack = `${faq.question} ${faq.answer}`.toLowerCase()
    const score = words.reduce((n, w) => (haystack.includes(w) ? n + 1 : n), 0)
    if (score > bestScore) {
      bestScore = score
      best = faq
    }
  }

  return bestScore >= 2 ? best : null
}

function matchProduct(input) {
  return products.find(
    (p) =>
      input.includes(p.id.replace(/-/g, ' ')) ||
      input.includes(p.name.toLowerCase()) ||
      p.name
        .toLowerCase()
        .split(' ')
        .every((part) => part.length < 3 || input.includes(part)),
  )
}

function navSuggestion(input) {
  return NAV_HINTS.find((hint) => hint.keywords.some((k) => input.includes(k)))
}

function flavorSuggestion() {
  const spicy = products.find((p) => p.id === 'kara-podi')
  const mild = products.find((p) => p.id === 'tangy-salty')
  const bold = products.find((p) => p.id === 'green-chutney')
  const sweet = products.find((p) => p.id === 'ginger-jaggery')

  return {
    text: 'Babu’s honest menu: Kara Podi if you want fire, Green Chutney for zing, Tangy & Salty for chatpata classics, Ginger Jaggery for sweet comfort. Can’t decide? Buy all four. Call it “sensory research.”',
    links: [
      { to: `/products#${spicy?.id}`, label: spicy?.name },
      { to: `/products#${bold?.id}`, label: bold?.name },
      { to: '/products', label: 'All flavors' },
    ].filter((l) => l.label),
  }
}

export function getQuickReplyResponse(id) {
  switch (id) {
    case 'track':
      return {
        text: 'Live tracking is still crisping in the oven, saar. For now, email your order ID + phone — Babu will chase it faster than you chase the last chip in the packet.',
        links: [{ href: `mailto:${CONTACT.general}?subject=Track%20my%20KIRIK%20order`, label: 'Email support' }],
      }
    case 'products':
      return {
        text: 'Real dosa batter. Fermented. Fried in rice bran oil. Gluten free. Zero boring-snack energy. Full flavor breakdown and combo crimes on the Products page.',
        links: [{ to: '/products', label: 'Product Details' }],
      }
    case 'flavors':
      return {
        text: `Current lineup, loud and proud: ${products.map((p) => p.name).join(', ')}. Babu-approved chaos in every pack.`,
        links: [{ to: '/products', label: 'Available Flavors' }],
      }
    case 'distributor':
      return {
        text: `Interested in stocking KIRIK? Email ${CONTACT.general} with your business name, location, and distribution details. Our team will review and respond.`,
        links: [{ href: `mailto:${CONTACT.general}?subject=Distributor%20enquiry`, label: 'Become a Distributor' }],
      }
    case 'contact':
      return {
        text: 'Humans behind the crunch, saar — not bots pretending to be dosa. (Except me. I am literally dosa.)',
        links: [
          { href: `mailto:${CONTACT.general}`, label: 'Email team' },
          { href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, label: CONTACT.phone },
        ],
      }
    case 'complaint':
      return {
        text: `We’re sorry something went wrong. Email ${CONTACT.general} with product name, batch code from the pack, and a brief description. We’ll review and assist with the right next step.`,
        links: [
          { href: `mailto:${CONTACT.general}?subject=Complaint%20%2F%20return`, label: 'Raise a Complaint' },
          { to: '/faq', label: 'Returns FAQ' },
        ],
      }
    case 'collab':
      return {
        text: 'Collaboration enquiries welcome — creators, retailers, events, and brand partners. Tell us who you are and what you have in mind.',
        links: [
          { href: `mailto:${CONTACT.general}?subject=Collaboration%20enquiry`, label: 'Collaboration Enquiry' },
          { to: '/faq', label: 'Collab FAQ' },
        ],
      }
    case 'stores':
      return {
        text: 'KIRIK is available online, in select retail stores across India, and occasionally from that one friend who never shares snacks. Store list expansion coming soon — email us your city if you want a stockist nearby.',
        links: [
          { to: '/products', label: 'Shop flavors' },
          { href: `mailto:${CONTACT.general}?subject=Store%20locator`, label: 'Ask for your city' },
        ],
      }
    default:
      return getRandomOpening()
  }
}

export function getQuickReplyMessage(id) {
  const item = DOSA_BABU_QUICK_REPLIES.find((q) => q.id === id)
  return item?.label ?? 'Hello'
}

export function getDosaBabuReply(rawInput) {
  const input = normalize(rawInput)
  if (!input) {
    return { text: 'Empty message? Even an idle tawa makes noise, saar. Type something or tap a menu chip below.' }
  }

  if (includesAny(input, ['hi', 'hello', 'hey', 'namaste', 'vanakkam', 'start', 'saar'])) {
    return getRandomOpening()
  }

  if (includesAny(input, ['bye', 'thanks', 'thank you', 'see you'])) {
    return {
      text: 'Anytime, saar! May your chai be hot and your crunch be certified. Babu is always one click away.',
      links: [{ to: '/', label: 'Back to Home' }],
    }
  }

  if (includesAny(input, ['track', 'tracking', 'order status', 'where is my order'])) {
    return getQuickReplyResponse('track')
  }

  if (includesAny(input, ['store', 'locator', 'shop', 'retail', 'near me', 'find kirik'])) {
    return getQuickReplyResponse('stores')
  }

  if (includesAny(input, ['suggest', 'recommend', 'which flavor', 'what should i buy', 'confused'])) {
    return flavorSuggestion()
  }

  const nav = navSuggestion(input)
  if (nav && includesAny(input, ['go', 'open', 'show', 'navigate', 'where', 'page', 'take me', ...nav.keywords])) {
    return {
      text: `I’ll point you to ${nav.label} — tap below when you’re ready.`,
      links: [{ to: nav.to, label: `Go to ${nav.label}` }],
    }
  }

  if (includesAny(input, ['distributor', 'retailer', 'wholesale', 'stock', 'sell kirik', 'stockist'])) {
    return getQuickReplyResponse('distributor')
  }

  if (includesAny(input, ['collab', 'collaborat', 'influencer', 'partner', 'creator', 'brand deal'])) {
    return getQuickReplyResponse('collab')
  }

  if (includesAny(input, ['contact', 'call', 'email', 'phone', 'reach', 'support team'])) {
    return getQuickReplyResponse('contact')
  }

  if (includesAny(input, ['bulk', 'corporate', 'office', 'gifting', 'event', 'team'])) {
    return {
      text: `Bulk and corporate orders welcome! Email ${CONTACT.sales} with quantity, location, and event details.`,
      links: [{ href: `mailto:${CONTACT.sales}`, label: 'Email sales' }],
    }
  }

  if (
    includesAny(input, [
      'complaint',
      'complain',
      'damaged',
      'defect',
      'broken',
      'return',
      'replacement',
      'refund',
      'issue',
      'problem',
    ])
  ) {
    return getQuickReplyResponse('complaint')
  }

  if (includesAny(input, ['ship', 'shipping', 'deliver', 'international', 'courier'])) {
    const faq = faqs.find((f) => f.question.toLowerCase().includes('ship'))
    return {
      text: faq?.answer ?? 'We primarily ship within India and are working on international reach.',
      links: [{ to: '/faq', label: 'Shipping FAQs' }],
    }
  }

  if (includesAny(input, ['order', 'buy', 'purchase', 'price', 'checkout'])) {
    return {
      text: `Packs are ₹20/- (MRP ₹30/-). Order online, visit select stores, or call ${CONTACT.phone} for help.`,
      links: [
        { to: '/products', label: 'Available Flavors' },
        { to: '/offers', label: 'Offers' },
      ],
    }
  }

  if (
    includesAny(input, [
      'flavor',
      'flavour',
      'tangy',
      'chutney',
      'podi',
      'jaggery',
      'salty',
      'spicy',
      'product detail',
    ])
  ) {
    const product = matchProduct(input)
    if (product) {
      return {
        text: `${product.name}: ${product.description} (${product.price})`,
        links: [{ to: `/products#${product.id}`, label: `View ${product.name}` }],
      }
    }
    return getQuickReplyResponse('flavors')
  }

  const faq = matchFaq(input)
  if (faq) {
    return {
      text: `${faq.question} — ${faq.answer}`,
      links: [{ to: '/faq', label: 'More FAQs' }],
    }
  }

  if (nav) {
    return {
      text: `Sounds like you might want ${nav.label}. I can take you there.`,
      links: [{ to: nav.to, label: `Go to ${nav.label}` }],
    }
  }

  return {
    text: 'Hmm… Babu flipped the dosa twice and still didn’t catch that. Try a menu chip — flavors, orders, stores, complaints, or collabs. Or just say “recommend a flavor.”',
    links: [
      { to: '/faq', label: 'FAQ' },
      { href: `mailto:${CONTACT.general}`, label: 'Contact Team' },
    ],
  }
}

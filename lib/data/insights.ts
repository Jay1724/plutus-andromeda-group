export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "design-systems-enterprise-roi",
    title: "The real ROI of a design system in a 5,000-seat organisation",
    excerpt:
      "Design systems are usually justified on consistency. The stronger case is velocity — and the numbers behind it are more measurable than most teams assume.",
    category: "Design Systems",
    readTime: "7 min read",
    date: "2026-05-14",
    body: [
      "Most design system business cases lean on consistency: fewer inconsistent buttons, a tidier brand, happier design leads. It's a reasonable argument, but it's rarely the one that gets budget approved at enterprise scale.",
      "The argument that does get approved is velocity. When we audited component reuse across a recent banking engagement, we found product teams were rebuilding the same form patterns an average of six times a year across different squads — each rebuild carrying its own accessibility gaps and QA cycles.",
      "A shared design system doesn't just standardise appearance. It compresses the distance between a validated pattern and a shipped feature. In organisations running ten or more product teams, that compression is worth measuring in engineering hours, not brand guidelines.",
      "The teams that get the most from a design system treat it as a product with its own roadmap, owner and adoption metrics — not a Figma file handed down once and left to decay.",
    ],
  },
  {
    slug: "banking-portals-trust-by-design",
    title: "Trust is a design decision, not a compliance checkbox",
    excerpt:
      "Why the banks winning on digital experience treat security affordances as a design problem — and what that looks like in practice.",
    category: "Product Strategy",
    readTime: "6 min read",
    date: "2026-04-02",
    body: [
      "Every bank we've worked with has excellent security infrastructure. Far fewer have translated that infrastructure into an interface that makes customers feel secure — the two are not the same thing.",
      "Trust signals in banking UX are often bolted on at the end: a padlock icon here, a compliance badge there. The portals that actually earn customer confidence design trust into the flow itself — clear confirmation states, legible session context, and friction placed exactly where it should be, not everywhere.",
      "We've found that reducing unnecessary friction (redundant confirmations, unclear error states) does more for perceived trust than adding more visible security theatre. Customers read clarity as competence.",
      "None of this replaces a security team's work. It's the layer that makes their work legible to the person using the product.",
    ],
  },
  {
    slug: "accessibility-public-sector",
    title: "What WCAG AA actually requires from a government platform",
    excerpt:
      "A practical breakdown of what accessibility conformance means beyond the checklist, drawn from delivering public-sector platforms at scale.",
    category: "Accessibility",
    readTime: "8 min read",
    date: "2026-02-19",
    body: [
      "WCAG AA conformance is frequently treated as a documentation exercise — an audit performed after launch to produce a compliance statement. Retrofitted accessibility is always more expensive and less effective than designed-in accessibility.",
      "On public-sector platforms, the stakes are higher: these are often services citizens are required to use, with no reasonable alternative. That changes the design brief from 'accessible where practical' to 'accessible by default.'",
      "In practice, that means testing with actual assistive technology throughout the design phase, not just at QA; writing content at a reading level appropriate for the population it serves; and designing for low-bandwidth, older-device contexts as a primary use case, not an edge case.",
      "Conformance follows naturally when accessibility is a design constraint from day one rather than a remediation task at the end.",
    ],
  },
  {
    slug: "commerce-checkout-performance",
    title: "Every 100ms of checkout latency has a rand value attached",
    excerpt:
      "How we approach performance budgets on commerce platforms, and why design and engineering need to own it together.",
    category: "Commerce",
    readTime: "5 min read",
    date: "2025-12-08",
    body: [
      "Performance is usually framed as an engineering concern that design should stay out of. On commerce platforms, that separation costs money — every additional 100ms of checkout latency measurably increases abandonment.",
      "The highest-impact performance decisions are made in design reviews, not sprint retros: how many form fields are on a checkout screen, whether product imagery is optimised before it's approved, whether a modal is really necessary at that step.",
      "We set performance budgets alongside design specs at the start of commerce engagements — a maximum bundle size, a target time-to-interactive — and treat both as equally non-negotiable acceptance criteria.",
      "The result is a checkout flow that feels fast because it was designed to be fast, not optimised after the fact.",
    ],
  },
  {
    slug: "intranets-arent-boring",
    title: "Your intranet is a product. Start treating it like one.",
    excerpt:
      "Internal platforms get a fraction of the design attention customer-facing products do — and it shows up directly in productivity.",
    category: "Enterprise Platforms",
    readTime: "6 min read",
    date: "2025-10-23",
    body: [
      "It's common for an organisation to spend significant budget on customer-facing UX while its own employees navigate an intranet last redesigned a decade ago. The productivity cost of that imbalance is real, even if it's rarely measured.",
      "Employees are users too, and the same research and design discipline applied to a customer product applies to an internal one: understand the actual jobs people are doing, design the information architecture around those jobs, and test it with real staff before rollout.",
      "The organisations that get this right treat their intranet as a product with a backlog and an owner, not a static repository IT maintains reluctantly.",
      "The return shows up in time saved on internal tasks that were never glamorous enough to prioritise — and rarely questioned until someone finally measures them.",
    ],
  },
  {
    slug: "strategy-before-pixels",
    title: "Why we say no to wireframes in the first meeting",
    excerpt:
      "The case for slowing down at the start of an engagement — and what happens to projects that skip straight to design.",
    category: "Product Strategy",
    readTime: "4 min read",
    date: "2025-09-11",
    body: [
      "Clients occasionally arrive at a first meeting expecting wireframes. It's an understandable expectation — visible progress feels like progress. It's also, in our experience, how projects end up rebuilding themselves six months post-launch.",
      "Skipping discovery doesn't remove the questions discovery answers. It just defers them to a point where they're far more expensive to address — after design sign-off, or worse, after development.",
      "Our first meetings are deliberately light on visuals and heavy on questions: who is this for, what does success look like in six months, what constraints are non-negotiable. It can feel slower. It isn't — it's the fastest route to a product that doesn't need to be redesigned a year later.",
      "Pixels are cheap to produce and expensive to throw away. Strategy is the other way around.",
    ],
  },
];

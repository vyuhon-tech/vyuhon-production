// data/insights.ts

export interface Insight {
  slug: string;
  cat: string;
  catClass: string;
  accentColor: string;
  date: string;
  rt: string;
  title: string;
  excerpt: string;
  featured?: boolean;
}

export const INSIGHTS: Insight[] = [
  {
    slug: 'why-enterprise-ai-projects-fail',
    cat: 'Strategy', catClass: 'purple', accentColor: 'var(--purple)',
    date: 'June 2025', rt: '10 min', featured: true,
    title: 'Why Most Enterprise AI Projects Fail Before They Ship',
    excerpt: 'The gap between AI proof-of-concept and production deployment is where most initiatives quietly die. After working through dozens of enterprise AI engagements, we\'ve identified the four patterns that separate the projects that reach production from the ones that stall permanently in pilot.',
  },
  {
    slug: 'building-rag-systems',
    cat: 'AI & Data', catClass: 'teal', accentColor: 'var(--teal)',
    date: 'May 2025', rt: '7 min',
    title: 'Building RAG Systems That Actually Answer Correctly',
    excerpt: 'Most RAG failures are retrieval failures, not generation failures. The architecture decisions that separate systems that get it right from ones that confidently get it wrong.',
  },
  {
    slug: 'product-manager-guide-ai-features',
    cat: 'Product', catClass: 'blue', accentColor: 'var(--blue)',
    date: 'April 2025', rt: '8 min',
    title: "The Product Manager's Guide to AI Features",
    excerpt: 'AI features break the normal product rules — they\'re probabilistic, they drift, and users have no frame of reference for what "good" looks like. Here\'s how to ship them anyway.',
  },
  {
    slug: 'designing-enterprise-ai-adoption',
    cat: 'Experience Design', catClass: 'blue', accentColor: 'var(--blue)',
    date: 'March 2025', rt: '8 min',
    title: 'Designing for Enterprise AI Adoption',
    excerpt: 'The hardest part of enterprise AI is not the model — it\'s the person sitting in front of it. Design principles that move organisations from reluctant users to confident adopters.',
  },
  {
    slug: 'pilot-to-production-scaling',
    cat: 'Engineering', catClass: 'red', accentColor: '#DC2626',
    date: 'February 2025', rt: '9 min',
    title: 'From Pilot to Production: The AI Scaling Playbook',
    excerpt: 'Eighty percent of AI pilots never reach production. The engineering and organisational decisions that determine whether your initiative scales or quietly disappears.',
  },
  {
    slug: 'ai-ready-organisation',
    cat: 'Strategy', catClass: 'amber', accentColor: '#B45309',
    date: 'January 2025', rt: '7 min',
    title: 'What Makes an AI-Ready Organisation?',
    excerpt: 'AI readiness is not about having the latest tools. It\'s a function of data quality, leadership alignment, and the willingness to rethink processes — not just automate them.',
  },
  {
    slug: 'hidden-cost-bad-data',
    cat: 'AI & Data', catClass: 'teal', accentColor: 'var(--teal)',
    date: 'December 2024', rt: '6 min',
    title: 'The Hidden Cost of Bad Data in AI Projects',
    excerpt: 'Teams consistently budget 20% of effort for data and 80% for modelling. In practice it\'s the reverse — and discovering this midway through a project is expensive.',
  },
  {
    slug: 'ai-strategy-executives-fund',
    cat: 'Strategy', catClass: 'purple', accentColor: 'var(--purple)',
    date: 'November 2024', rt: '8 min',
    title: 'How to Write an AI Strategy That Executives Will Actually Fund',
    excerpt: 'Most AI strategies fail to get funded because they\'re written for the wrong audience. What it actually takes to get an AI initiative approved and resourced.',
  },
  {
    slug: 'llm-integration-patterns',
    cat: 'AI & Data', catClass: 'teal', accentColor: 'var(--teal)',
    date: 'October 2024', rt: '10 min',
    title: 'LLM Integration Patterns for Enterprise Systems',
    excerpt: 'The five patterns that work in production versus the three that look good in demos. An architectural guide to integrating large language models into enterprise software.',
  },
  {
    slug: 'ai-change-management',
    cat: 'Advisory', catClass: 'amber', accentColor: '#B45309',
    date: 'September 2024', rt: '9 min',
    title: 'AI Change Management: Why the Human Side Always Wins',
    excerpt: 'No AI implementation has ever failed because the algorithm wasn\'t good enough. What real change management looks like in an AI transformation context.',
  },
  {
    slug: 'ux-of-ai-designing-trust',
    cat: 'Experience Design', catClass: 'blue', accentColor: 'var(--blue)',
    date: 'August 2024', rt: '7 min',
    title: 'The UX of AI: Designing Trust Into Intelligent Systems',
    excerpt: 'Trust is not a feature you add at the end — it\'s an architectural decision made at the beginning. How to design AI systems that users believe in, rely on, and actually use.',
  },
  {
    slug: 'operational-costs-case-study',
    cat: 'Case Study', catClass: 'purple', accentColor: 'var(--purple)',
    date: 'July 2024', rt: '12 min',
    title: 'How AI Reduced Operational Costs by 34% in Eight Months',
    excerpt: 'A deep dive into how a 2,400-person operations team went from manual review processes to AI-augmented workflows — what worked, what didn\'t, and what we\'d do differently.',
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return INSIGHTS.find(i => i.slug === slug);
}

export function getAllSlugs(): { slug: string }[] {
  return INSIGHTS.map(i => ({ slug: i.slug }));
}

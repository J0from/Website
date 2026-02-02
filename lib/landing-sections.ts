export interface SectionData {
  id: string
  title: string
  subtitle?: string
  description?: string
  gradient?: string
  textColor?: string
  type: 'hero' | 'feature' | 'cta' | 'statement'
}

export const sections: SectionData[] = [
  {
    id: 'hero',
    title: 'Jo from',
    subtitle: 'Your Department',
    description: 'Digital employees for every department',
    gradient: 'from-slate-50 to-slate-100',
    textColor: 'text-slate-900',
    type: 'hero'
  },
  {
    id: 'balance',
    title: 'Human + Machine',
    subtitle: 'We help businesses strike the right balance',
    gradient: 'from-blue-600 to-purple-600',
    textColor: 'text-white',
    type: 'statement'
  },
  {
    id: 'bottlenecks',
    title: 'Labor Bottlenecks',
    subtitle: 'Jo fixes labor bottlenecks in highly regulated industries',
    description: 'Stay compliant, cut costs, and finally have enough hands to get the work done.',
    gradient: 'from-slate-900 to-black',
    textColor: 'text-white',
    type: 'statement'
  },
  {
    id: 'framework',
    title: 'Our Framework',
    subtitle: 'Discover, Design, Deploy',
    description: 'Fast Insight, Practical Plans, Real Operational Change.',
    gradient: 'from-slate-50 to-slate-100',
    textColor: 'text-slate-900',
    type: 'feature'
  },
  {
    id: 'cta',
    title: 'Get Started',
    subtitle: 'Meet Jo Today',
    gradient: 'from-white to-slate-50',
    textColor: 'text-slate-900',
    type: 'cta'
  }
]

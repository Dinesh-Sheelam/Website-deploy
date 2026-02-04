
import React from 'react';
import { 
  Cpu, 
  Layers, 
  RefreshCcw, 
  ShieldCheck, 
  GitBranch, 
  Terminal,
  Activity,
  Zap
} from 'lucide-react';
import { Feature, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Visual CI/CD Engine',
    description: 'Build, test, and deploy pipelines with an intuitive drag-and-drop interface connected directly to your cloud.',
    icon: <Layers className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'Real-time Drift Detection',
    description: 'Automatically monitor and reconcile discrepancies between your visual design and your live environment.',
    icon: <Activity className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'GitOps Native',
    description: 'Sync your infrastructure state directly with GitHub or GitLab for seamless version-controlled management.',
    icon: <GitBranch className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'Automated Standardisation',
    description: 'Enforce naming conventions and security policies at the design level across your entire organization.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'One-Click Migration',
    description: 'Reverse engineer existing cloud environments into beautiful visual diagrams and Terraform code instantly.',
    icon: <RefreshCcw className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'Internal Service Catalogue',
    description: 'Empower developers with self-service infrastructure provisioning through pre-approved templates.',
    icon: <Terminal className="w-6 h-6 text-emerald-500" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Chen",
    role: "Head of Infrastructure",
    company: "CloudScale AI",
    content: "Deploy-N changed how we think about IaC. We went from messy scripts to a visual source of truth in weeks.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    author: "Marcus Thorne",
    role: "DevOps Architect",
    company: "FinTech Global",
    content: "The drift detection is a lifesaver. It caught a manual console change that would have caused a massive outage.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    id: 3,
    author: "Elena Rodriguez",
    role: "CTO",
    company: "NeoStream",
    content: "Visualizing architecture while code generates in the background is like magic. It's the future of cloud management.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

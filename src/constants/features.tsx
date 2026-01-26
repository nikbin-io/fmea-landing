import { ReactNode } from 'react'

import {
  ShieldCheckIcon,
  DatabaseIcon,
  CpuIcon,
  FileCheckIcon,
  LockIcon
} from '~/components/Icons'

type FeatureItem = {
  title: string
  description: string
  icon: ReactNode
}

export const FEATURES: FeatureItem[] = [
  {
    title: 'Expert-Designed',
    description:
      'Developed by experienced FMEA practitioners and AI engineers to reflect established DFMEA and PFMEA practices.',
    icon: <ShieldCheckIcon />
  },
  {
    title: 'High-Capacity Analysis',
    description:
      'Supports large, structured FMEA analyses (up to 200 entries) in a single run, maintaining hierarchy and consistency.',
    icon: <DatabaseIcon />
  },
  {
    title: 'Standards-Compatible',
    description:
      'Produces Excel outputs compatible with industry practices and AIAG & VDA conventions without manual reformatting.',
    icon: <FileCheckIcon />
  },
  {
    title: 'Quality-Gated Agentic',
    description:
      'Applies an agentic workflow with quality gates to support logical rigor, consistency, and disciplined FMEA development.',
    icon: <CpuIcon />
  },
  {
    title: 'Data-Respectful',
    description:
      'Documents are deleted after processing, ensuring you retain full control over sensitive data.',
    icon: <LockIcon />
  }
]

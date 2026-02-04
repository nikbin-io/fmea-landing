import { ReactNode } from 'react'

import { Container } from '~/components'
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
    title: 'Expert Engineered',
    description:
      'Developed by experienced FMEA practitioners and AI engineers to reflect established DFMEA and PFMEA practices.',
    icon: <ShieldCheckIcon />
  },
  {
    title: 'Scalable Analysis',
    description:
      'Supports large, structured FMEA analyses (up to 200 entries) in a single run, maintaining hierarchy and consistency.',
    icon: <DatabaseIcon />
  },
  {
    title: 'Industry Compliant',
    description:
      'Produces Excel outputs compatible with industry practices and AIAG & VDA conventions without manual reformatting.',
    icon: <FileCheckIcon />
  },
  {
    title: 'Agentic Quality Checks',
    description:
      'Applies an agentic workflow with quality gates to support logical rigor, consistency, and disciplined FMEA development.',
    icon: <CpuIcon />
  },
  {
    title: 'Strict Data Privacy',
    description:
      'Documents are deleted after processing, ensuring you retain full control over sensitive data.',
    icon: <LockIcon />
  }
]

const FeaturesSection = () => {
  return (
    <section bg="gray-light" py="xs:30 15">
      <Container>
        <div mb="16" text="center">
          <h2 font="bold" mb="4" text="center lg:4xl 2xl brand ">
            Engineered for Precision & Compliance{' '}
          </h2>

          <p max-w="2xl" mx="auto" text="lg gray-dark">
            We bridge the gap between AI efficiency and strict industry
            standards, delivering reliable risk analysis outcomes that
            engineering teams can trust.
          </p>
        </div>

        <div gap="8" grid="~ cols-1 md:cols-2 lg:cols-6">
          {FEATURES.map((feature, index) => (
            <div
              b="1 white/50"
              backdrop-blur="100px"
              bg="white/15"
              flex="~ col"
              gap="4"
              key={index}
              lg={index === 3 ? 'col-start-2 col-span-2' : 'col-span-2'}
              md={
                index === 4
                  ? 'col-span-2 w-full max-w-lg mx-auto'
                  : 'col-span-1'
              }
              p="8"
              rounded="3xl"
              shadow="lg"
              transition="all duration-300">
              <div
                bg="gray-lighter"
                flex="~ items-center justify-center"
                h="14"
                rounded="2xl"
                text="gray-dark"
                transition="colors duration-300"
                w="14">
                <div className="[&>svg]:w-7 [&>svg]:h-7">{feature.icon}</div>
              </div>

              <div>
                <h3 font="bold" mb="3" text="xs:xl brand">
                  {feature.title}
                </h3>
                <p leading="relaxed" text="gray-dark">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection

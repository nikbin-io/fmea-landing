import Head from 'next/head'

const BASE_URL = 'https://fmeatool.ai'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FMEA Tool',
  url: BASE_URL,
  logo: `${BASE_URL}/180x180.png`,
  sameAs: [
    'https://www.youtube.com/@FMEAToolAI',
    'https://www.linkedin.com/showcase/fmea-tool-ai'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@fmeatool.ai',
    contactType: 'customer support'
  }
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FMEA Tool',
  url: BASE_URL
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FMEA Tool',
  url: BASE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI FMEA tool for automated Failure Mode and Effect Analysis. Create DFMEA (Design) & PFMEA (Process) reports instantly. Export to Excel.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  publisher: {
    '@type': 'Organization',
    name: 'FMEA Tool',
    url: BASE_URL
  }
}

type SeoHeadProps = {
  title?: string
  description?: string
  ogImage?: string
  canonical?: string
  robots?: string
}

const SeoHead = ({
  title = 'Agentic FMEA Generator',
  description = 'AI FMEA tool for automated Failure Mode and Effect Analysis. Create DFMEA (Design) & PFMEA (Process) reports instantly. Export to Excel.',
  ogImage = 'https://fmeatool.ai/1200x630.png',
  canonical,
  robots = 'index, follow'
}: SeoHeadProps) => {
  const fullTitle = `${title} | FMEA Tool`
  const canonicalUrl = canonical ?? `${BASE_URL}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta content={description} name="description" />
      <meta
        content="AI FMEA Generator, Automated FMEA Tool, Design FMEA, Process FMEA, AIAG VDA Compliance, Risk Analysis Automation, FMEA Excel Export"
        name="keywords"
      />
      <meta content={robots} name="robots" />

      <meta content="FMEA Tool" property="og:site_name" />
      <meta content="website" property="og:type" />
      <meta content="en_US" property="og:locale" />
      <meta content={fullTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content={canonicalUrl} key="og:url" property="og:url" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@FMEAToolAI" name="twitter:site" />
      <meta content="@FMEAToolAI" name="twitter:creator" />
      <meta content={fullTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />

      <link href={canonicalUrl} key="canonical" rel="canonical" />

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
        type="application/ld+json"
      />
    </Head>
  )
}

export default SeoHead

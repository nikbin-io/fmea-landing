import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = 'https://fmeatool.ai'

type SeoHeadProps = {
  title?: string
  description?: string
  ogImage?: string
  canonical?: string
}

const SeoHead = ({
  title = 'Agentic FMEA Generator',
  description = 'AI FMEA tool for automated Failure Mode and Effect Analysis. Create DFMEA (Design) & PFMEA (Process) reports instantly. Export to Excel.',
  ogImage = 'https://fmeatool.ai/1200x630.png',
  canonical
}: SeoHeadProps) => {
  const { asPath } = useRouter()
  const fullTitle = `${title} | FMEA Tool`
  const canonicalUrl = canonical ?? `${BASE_URL}${asPath.split('?')[0]}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta content={description} name="description" />
      <meta
        content="AI FMEA Generator, Automated FMEA Tool, Design FMEA, Process FMEA, AIAG VDA Compliance, Risk Analysis Automation, FMEA Excel Export"
        name="keywords"
      />

      <meta content="website" property="og:type" />
      <meta content={fullTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content={canonicalUrl} key="og:url" property="og:url" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={fullTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />

      <link href={canonicalUrl} key="canonical" rel="canonical" />
    </Head>
  )
}

export default SeoHead

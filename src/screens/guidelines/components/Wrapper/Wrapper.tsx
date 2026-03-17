import Head from 'next/head'
import { ReactNode } from 'react'
import { Container, SeoHead } from '~/components'
import Keypoints from '../Keypoints'

type BreadcrumbItem = {
  name: string
  url: string
}

type Props = {
  children: ReactNode
  title?: string
  description?: string
  canonical?: string
  breadcrumbs?: BreadcrumbItem[]
}

const Wrapper = ({
  children,
  title = 'User Guide & Best Practices',
  description,
  canonical = 'https://fmeatool.ai/guidelines',
  breadcrumbs
}: Props) => {
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
    : null

  return (
    <>
      <SeoHead canonical={canonical} description={description} title={title} />
      {breadcrumbSchema && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbSchema)
            }}
            type="application/ld+json"
          />
        </Head>
      )}
      <div py="20">
        <Container>
          <div
            flex="~ lg:row col lg:items-stretch items-center"
            gap="20px"
            h="full"
            position="relative"
            w="full">
            <div w="lg:auto full">
              <Keypoints />
            </div>

            <div
              b="1 solid brand/10"
              bg="gray-lighter"
              color="gray-dark"
              flex="~ col"
              mx="auto"
              p="y-10 sm:x-10 x-4"
              rounded="xl"
              shadow="md">
              <div className="[&_p]:text-base [&_ul]:ml-6 [&_li]:text-base [&_h3]:mb-2 [&_h3]:mt-4 [&_ul]:mb-4 [&_p]:mb-4 [&_h2]:mt-6 [&_h2]:text-xl [&_h3]:text-base [&_h3]:font-bold [&_h2]:font-semibold [&_h2]:mb-2">
                {children}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Wrapper

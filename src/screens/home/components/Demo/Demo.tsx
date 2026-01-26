import { useState } from 'react'
import { ChevronRight, ChevronDown, DownloadIcon } from '~/components/Icons'
import Image from 'next/image'
import logoImg from '~/assets/logo-with-text.png'
import {
  Container,
  InputTooltip,
  SwitchButton,
  RangeInput,
  LinkButton
} from '~/components'
import PfmeaTable from '../PfmeaTable'
import DfmeaTable from '../DfmeaTable'

const DFMEA_DOCS = [
  {
    url: '/documents/dfmea/MOSAR-WP1-D1.4-SA_1.0.0-System-Requirements-Document.pdf',
    label: 'MOSAR...System-Requirements-Document.pdf'
  },
  {
    url: '/documents/dfmea/MOSAR-WP2-D2.4-SA_1.1.0-Preliminary-Design-Document.pdf',
    label: 'MOSAR...Preliminary-Design-Document.pdf'
  },
  {
    url: '/documents/dfmea/MOSAR-WP2-D2.5-SA_1.1.0-HOTDOCK-Preliminary-Design-Definition-File.pdf',
    label: 'MOSAR...Design-Definition-File.pdf'
  }
]
const PFMEA_DOCS = [
  {
    url: '/documents/pfmea/2.4_Assembly_Manual.pdf',
    label: '2.4_Assembly_Manual.pdf'
  }
]

const Demo = () => {
  const [isPfmea, setIsPfmea] = useState<boolean>(false)

  const handleCategorySwitch = (e: any) => {
    setIsPfmea(e)
  }

  return (
    <section p="b-30 t-20">
      <Container>
        <div mb="sm:16 8" text="center">
          <p
            case="upper"
            font="bold"
            mb="lg:4 2"
            text="brand sm:base sm"
            tracking="widest">
            From Technical Docs to Structured FMEA
          </p>

          <div flex="~ items-center justify-center" gap="3" mb="sm:8 6">
            <h2
              font="bold"
              line-height="tight"
              text="center lg:4xl 2xl gray-dark ">
              Examples Created by
            </h2>

            <Image alt="logo" h="50px" src={logoImg} w="auto" />
          </div>

          <p max-w="5xl" mx="auto" text="xs:lg base gray">
            Toggle below to view a generated Design FMEA (DFMEA) example or a
            Process FMEA (PFMEA) example. See how raw technical PDFs are
            transformed into structured, AIAG & VDA compliant risk analysis
            tables ready for Excel export.
          </p>
        </div>

        <div
          gap="50px"
          grid="~ md:cols-6 cols-1"
          h="md:700px"
          m="b-50px t-10px"
          position="relative">
          <div
            bg="gray-lighter"
            border="1 gray-light"
            className="lg:col-span-2 md:col-span-3"
            flex="~ col"
            h="full"
            overflow="visible"
            position="relative"
            rounded="2xl"
            shadow="lg">
            <div overflow="hidden" rounded="2xl">
              <div bg-gradient="radial from-gray to-gray-darker" h="8px"></div>

              <div
                b="0 b-1 solid gray-light"
                flex="~ justify-center col items-center"
                gap="4"
                h="130px"
                mb="2"
                p="x-6">
                <h2 font="bold" text="2xl center gray-darker">
                  Configuration
                </h2>
                <div
                  flex="~ items-center nowrap"
                  gap="10px"
                  text="md:16px 14px">
                  <span text="nowrap">Design FMEA</span>
                  <SwitchButton
                    defaultChecked={false}
                    onChange={handleCategorySwitch}
                  />
                  <span text="nowrap">Process FMEA</span>
                </div>
              </div>
            </div>

            <div flex="~ 1 col" gap="30px" p="6">
              <div>
                <RangeInput label="Failer Mode Requested" />
              </div>

              <div flex="~ 1 col items-center justify-between">
                <div
                  bg="transparent"
                  color="gray-dark"
                  flex="~ items-center justify-between"
                  font="400"
                  mb="10px"
                  text="sm"
                  w="full">
                  Upload Image-Heavy PDFs
                  <InputTooltip
                    content={
                      <div p="y-15px x-5px">
                        <p>Helpful documents to upload:</p>
                        <ul mt="15px" pl="15px" space-y="1">
                          {[
                            'Product requirements / specifications',
                            'Design description documents',
                            'Architecture / functional diagrams',
                            'Schematics and mechanical drawings',
                            'Bill of materials',
                            'Validation plans and test procedures',
                            'Issue logs and lessons learned from similar products'
                          ].map((item, index) => (
                            <li key={index}> {item}</li>
                          ))}
                        </ul>
                      </div>
                    }
                  />
                </div>

                <div
                  b="2 dashed gray/50"
                  flex="~ 1 col items-center justify-center"
                  gap="10px"
                  min-h="180px"
                  p="6"
                  rounded="lg"
                  w="full">
                  <p text="gray xs center">
                    Supported: pdf, jpg, jpeg, webp, csv, txt, xlsx, xls
                  </p>

                  {(isPfmea ? PFMEA_DOCS : DFMEA_DOCS).map((doc) => (
                    <a
                      b="1 solid gray/30 hover:gray/80"
                      color="gray hover:brand"
                      cursor="pointer"
                      download
                      flex="~ items-center"
                      gap="10px"
                      href={doc.url}
                      key={doc.url}
                      mt="5px"
                      p="12px"
                      rounded="md"
                      scale="active:99"
                      transition="all 200"
                      w="full">
                      <div>
                        <DownloadIcon />
                      </div>
                      <span font="medium" text="sm">
                        {doc.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <LinkButton
                h="45px"
                hasEffect
                href="https://app.fmeatool.ai"
                label="Start a Free Trial"
              />
            </div>

            <div
              bg="gray-lighter"
              className="[&>svg]:w-auto [&>svg]:h-18px"
              color="gray-darker"
              flex="~ justify-center items-center"
              h="50px"
              position="absolute md:top-24px top-full md:left-full left-1/2"
              translate-x="md:0 -1/2"
              w="50px"
              z="2">
              <div
                className="md:flex hidden [&>svg]:w-auto [&>svg]:h-18px"
                flex="items-center justify-center">
                <ChevronRight />
              </div>

              <div
                className="md:hidden flex [&>svg]:w-auto [&>svg]:h-18px"
                flex="items-center justify-center">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div
            border="1 gray-light"
            className="lg:col-span-4 md:col-span-3"
            h="md:full 700px"
            overflow="hidden"
            rounded="2xl"
            shadow="lg">
            <div bg="gray-lighter" flex="~ col" h="full" overflow="hidden">
              <div>
                <div
                  bg-gradient="radial from-gray to-gray-darker"
                  h="8px"></div>

                <div
                  b="0 b-1 solid gray-light"
                  flex="~ col items-center justify-center"
                  gap="4"
                  h="xs:130px 150px"
                  p="x-6">
                  <h2 font="bold" text="2xl center gray-darker">
                    {isPfmea ? 'Process' : 'Design'} FMEA Results
                  </h2>

                  <p text="sm gray center">
                    Items are prioritized by Action Priority (High to Low)
                    rather than numerical ID order.
                  </p>
                </div>
              </div>

              {isPfmea ? <PfmeaTable /> : <DfmeaTable />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Demo

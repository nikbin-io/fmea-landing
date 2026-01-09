import { useState } from 'react'
import { ChevronRight, ChevronDown, DownloadIcon } from '~/components/Icons'
import {
  Container,
  Button,
  InputTooltip,
  SwitchButton,
  RangeInput
} from '~/components'
import PfmeaTable from '../PfmeaTable'
import DfmeaTable from '../DfmeaTable'

const Demo = () => {
  const [isPfmea, setIsPfmea] = useState<boolean>(false)

  const handleCategorySwitch = (e: any) => {
    setIsPfmea(e)
  }

  return (
    <div py="10">
      <Container>
        <div gap="50px" grid="~ md:cols-6 cols-1" m="b-50px t-10px">
          <div
            bg="gray-lighter"
            border="1 gray-light"
            className="lg:col-span-2 md:col-span-3"
            overflow="visible"
            position="relative"
            rounded="2xl"
            shadow="lg">
            <div overflow="hidden" rounded="2xl">
              <div bg-gradient="radial from-gray to-gray-darker" h="8px"></div>

              <div
                b="0 b-1 solid gray-light"
                flex="~ col items-center"
                gap="4"
                mb="2"
                p="6">
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

            <div flex="~ col" gap="30px" p="6">
              <div>
                <RangeInput label="Failer Mode Requested" />
              </div>

              <div>
                <div
                  bg="transparent"
                  color="gray-dark"
                  flex="~ items-center justify-between"
                  font="400"
                  mb="10px"
                  text="sm">
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
                  flex="~ col items-center justify-center"
                  gap="10px"
                  min-h="180px"
                  p="6"
                  rounded="lg">
                  <p color="gray-dark">Drag and drop files here</p>

                  <p text="gray xs center">
                    Supported: pdf, jpg, jpeg, webp, csv, txt, xlsx, xls
                  </p>

                  <a
                    b="1 solid gray/30 hover:gray/80"
                    color="brand"
                    cursor="pointer"
                    download
                    flex="~ items-center"
                    gap="10px"
                    href={
                      isPfmea
                        ? '/documents/assembly-manual.pdf'
                        : '/documents/mosar.pdf'
                    }
                    mt="5px"
                    p="12px"
                    rounded="md"
                    scale="hover:102"
                    transition="all 200">
                    <div>
                      <DownloadIcon />
                    </div>
                    <span font="medium" text="sm">
                      {isPfmea ? 'assembly-manual.pdf' : 'mosar.pdf'}
                    </span>
                  </a>
                </div>
              </div>

              <Button disabled type="submit">
                Run FMEA Analysis
              </Button>
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
            h="full"
            max-h="575px"
            overflow="hidden"
            rounded="2xl"
            shadow="lg">
            <div bg="gray-lighter" flex="~ col" h="full" overflow="hidden">
              <div>
                <div
                  bg-gradient="radial from-gray to-gray-darker"
                  h="8px"></div>

                <div p="6">
                  <h2 font="bold" text="2xl center gray-darker">
                    {isPfmea ? 'Process' : 'Design'} FMEA Results
                  </h2>
                </div>
              </div>

              {isPfmea ? <PfmeaTable /> : <DfmeaTable />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Demo

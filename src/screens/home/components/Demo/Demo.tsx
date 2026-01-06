import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { useState } from 'react'
import { ChevronRight, ChevronDown } from '~/components/Icons'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FileUpload,
  Container,
  Button,
  SwitchButton,
  RangeInput
} from '~/components'
import PfmeaTable from '../PfmeaTable'
import DfmeaTable from '../DfmeaTable'

const validationSchema = z.object({
  image_heavy_document: z.any()
})

type ValidationSchema = z.infer<typeof validationSchema>

const Demo = () => {
  const [isPfmea, setIsPfmea] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      image_heavy_document: null
    }
  })

  const onSubmit = async (values: ValidationSchema) => {
    try {
    } catch (error: any) {}
  }

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

            <form
              flex="~ col"
              gap="30px"
              p="6"
              onSubmit={handleSubmit(onSubmit)}>
              <div>
                <RangeInput label="Failer Mode Requested" />
              </div>

              <Controller
                control={control}
                name="image_heavy_document"
                render={({ field, fieldState, formState }) => (
                  <FileUpload
                    {...field}
                    accept="pdf"
                    disabled={formState.isSubmitting}
                    error={fieldState.error?.message}
                    label="Upload Image-Heavy PDFs"
                    maxSize={200}
                    name="image_heavy_document"
                    tooltipContent={
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
                )}
              />

              <Button disabled type="submit">
                Run FMEA Analysis
              </Button>
            </form>

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

import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { ChevronRight, ChevronDown } from '~/components/Icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, FileUpload, Container, Button } from '~/components'

const validationSchema = z.object({
  failure_models: z.number(),
  image_heavy_document: z.any()
})
type ValidationSchema = z.infer<typeof validationSchema>

const Demo = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      failure_models: 15,
      image_heavy_document: null
    }
  })

  const onSubmit = async (values: ValidationSchema) => {
    try {
    } catch (error: any) {}
  }
  return (
    <div py="10">
      <Container>
        <div gap="50px" grid="~ md:cols-6 cols-1" m="b-50px t-10px">
          <div
            bg="white"
            border="1 gray-light"
            className="lg:col-span-2 md:col-span-3"
            overflow="visible"
            position="relative"
            rounded="2xl"
            shadow="lg">
            <div overflow="hidden" rounded="2xl">
              <div bg-gradient="radial from-gray to-gray-darker" h="8px"></div>

              <div b="0 b-1 solid gray-light" gap="2" mb="2" p="6">
                <h2 font="bold" text="2xl center gray-darker">
                  Configuration
                </h2>
              </div>
            </div>

            <form
              flex="~ col"
              gap="30px"
              p="6"
              onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="failure_models"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="Minimum Failure Models (for Stage 1)"
                    type="number"
                  />
                )}
              />

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
                    tooltipContent={<p>asd</p>}
                  />
                )}
              />

              <Button type="submit">Run FMEA Analysis</Button>
            </form>

            <div
              bg="white"
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
            overflow="hidden"
            rounded="2xl"
            shadow="lg">
            <div bg="white" flex="~ col" h="full" overflow="hidden">
              <div>
                <div
                  bg-gradient="radial from-gray to-gray-darker"
                  h="8px"></div>

                <div p="6">
                  <h2 font="bold" text="2xl center gray-darker">
                    Final Refined FMEA Results
                  </h2>
                </div>
              </div>

              <div
                className="custom-scrollbar"
                h="full"
                overflow="auto"
                position="relative"
                w="full">
                <table
                  font="300"
                  h="full"
                  style={{
                    borderCollapse: 'collapse'
                  }}
                  w="full"
                  whitespace="nowrap">
                  <thead w="full">
                    <tr
                      className="all-[th]:py-7px all-[th]:px-10px all-[th]:b-solid all-[th]:b-1 all-[th]:text-center all-[th]:border-gray-lighter all-[th]:bg-[#f0f0f0]"
                      line-height="22px"
                      text="12px gray-dark">
                      <th bg="gray-lighter" z="1"></th>
                      <th>item_function_or_interface</th>
                      <th>potential_failure_mode</th>
                      <th>local_effect</th>
                      <th>next_level_effect</th>
                      <th>end_effect</th>
                      <th>severity</th>
                      <th>potential_cause_or_mechanism</th>
                      <th>current_prevention_controls</th>
                    </tr>
                  </thead>

                  <tbody
                    className="all-[td]:p-5px all-[td]:b-solid all-[td]:b-1 all-[td]:text-center all-[td]:border-gray-lighter"
                    text="gray-text 14px"
                    w="full">
                    {true ? (
                      ['', '', '', ''].map((invoice, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      ))
                    ) : (
                      <div
                        flex="~ items-center justify-center"
                        h="full"
                        position="absolute top-0 left-0 right-0 bottom-0"
                        w="full">
                        Your Generated results will appear here
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Demo

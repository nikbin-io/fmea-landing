import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FileUpload, SelectBox, Input } from '~/components'

const validationSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(
      /[!@#$%^&*(),_.?":{}|<>]/,
      'Password must contain at least one special character'
    )
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  failure_models: z.number(),
  llm_model: z.enum(['gemini-2.5-flash', 'gemma-3-27b-it']),
  analyze_system: z.enum(['gemini-2.5-flash', 'gemma-3-27b-it']),

  text_heavy_document: z.any().optional(),
  image_heavy_document: z.any().optional()
})
type ValidationSchema = z.infer<typeof validationSchema>

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      password: '',
      failure_models: 15,
      llm_model: 'gemini-2.5-flash',

      text_heavy_document: null,
      image_heavy_document: null,
      analyze_system: 'gemini-2.5-flash'
    }
  })
  return (
    <form flex="~ col" gap="30px">
      <div flex="~ col" gap="20px">
        <p font="500" text="1.2rem">
          Configuration
        </p>

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              autoComplete="current-password"
              error={error?.message}
              label="Enter your Deepinfra API Token"
              tooltipContent={<p>asd</p>}
              type="password"
            />
          )}
        />
        <Controller
          control={control}
          name="llm_model"
          render={({ field, fieldState, formState }) => (
            <SelectBox
              {...field}
              clearable
              disabled={formState.isSubmitting}
              error={fieldState.error?.message}
              options={[
                { value: 'gemini-2.5-flash', label: 'google/gemini 2.5 flash' },
                { value: 'gemma-3-27b-it', label: 'google/gemma-3-27b-it' }
              ]}
              placeholder="Select an LLM Model"
              tooltipContent={<p>asd</p>}
            />
          )}
        />
      </div>

      <div flex="~ col" gap="20px">
        <p font="500" text="1.2rem">
          FMEA Inputs
        </p>

        <Controller
          control={control}
          name="analyze_system"
          render={({ field, fieldState, formState }) => (
            <SelectBox
              {...field}
              clearable
              disabled={formState.isSubmitting}
              error={fieldState.error?.message}
              options={[
                { value: 'gemini-2.5-flash', label: 'google/gemini 2.5 flash' },
                { value: 'gemma-3-27b-it', label: 'google/gemma-3-27b-it' }
              ]}
              placeholder="Component/System to Analyze"
              tooltipContent={<p>asd</p>}
            />
          )}
        />

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
      </div>

      <div flex="~ col" gap="20px">
        <p font="500" text="1.2rem">
          Document Upload
        </p>

        <Controller
          control={control}
          name="text_heavy_document"
          render={({ field, fieldState, formState }) => (
            <FileUpload
              {...field}
              accept="pdf"
              disabled={formState.isSubmitting}
              error={fieldState.error?.message}
              label="Upload Text-Heavy PDFs"
              maxSize={200}
              name="text_heavy_document"
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
      </div>

      <button
        b="1 solid blue-500"
        bg="blue-500/5 hover:blue-500/10"
        color="blue-500"
        cursor="pointer"
        h="40px"
        rounded="8px"
        scale="active:97"
        transition="all 200"
        type="submit">
        Run FMEA Analysis
      </button>
    </form>
  )
}

export default Form

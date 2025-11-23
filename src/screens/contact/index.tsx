import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Container, Button, Checkbox } from '~/components'
import Link from 'next/link'

const validationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters long'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  privacy_policy: z
    .boolean()
    .refine((val) => val === true, 'You must accept the privacy policy.')
})

type ValidationSchema = z.infer<typeof validationSchema>

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ValidationSchema>({
    mode: 'all',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      privacy_policy: false
    }
  })

  const onSubmit = async (values: ValidationSchema) => {
    console.log(values)
  }

  return (
    <div py="lg:40 30" z="1">
      <Container>
        <div
          bg="gray-200"
          max-w="700px"
          mx="auto"
          p="y-10 sm:x-10 x-4"
          rounded="2xl"
          shadow="xl"
          text="sm:base sm"
          w="full">
          <div mb="8" text="center">
            <h1
              font="600"
              line-height="sm:40px 32px"
              mb="6"
              text="sm:36px gray-700 24px">
              Contact Us
            </h1>

            <p px="2" text=".9rem gray-600">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              get back to you as soon as possible.
            </p>
          </div>

          <form flex="~ col" gap="20px" onSubmit={handleSubmit(onSubmit)}>
            <div flex="~ sm:row col" gap="20px">
              <Controller
                control={control}
                name="name"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="Name"
                    required
                    type="text"
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="Email"
                    required
                    type="email"
                  />
                )}
              />
            </div>

            <Controller
              control={control}
              name="subject"
              render={({ field, formState, fieldState: { error } }) => (
                <Input
                  {...field}
                  disabled={formState.isSubmitting}
                  error={error?.message}
                  label="Subject"
                  required
                  type="text"
                />
              )}
            />

            <Controller
              control={control}
              name="message"
              render={({ field, formState, fieldState: { error } }) => (
                <Input
                  {...field}
                  disabled={formState.isSubmitting}
                  error={error?.message}
                  label="Message"
                  required
                  type="textarea"
                />
              )}
            />

            <Controller
              control={control}
              name="privacy_policy"
              render={({ field, formState, fieldState: { error } }) => (
                <Checkbox
                  {...field}
                  disabled={formState.isSubmitting}
                  error={error?.message}
                  label={
                    <p>
                      I have read and agreed to{' '}
                      <Link
                        decoration="hover:underline"
                        href="/privacy-policy"
                        rel="noopener noreferrer"
                        target="_blank"
                        text="blue hover:blue-700">
                        Privacy Policy
                      </Link>
                    </p>
                  }
                />
              )}
            />

            <Button disabled={isSubmitting} mt="3" type="submit" w="full">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Contact

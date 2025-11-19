import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Container } from '~/components'
import Link from 'next/link'

const validationSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'First name must be at least 2 characters long'),
    surname: z.string().min(2, 'Surname must be at least 2 characters long'),
    email: z.string().email('Please enter a valid email'),
    company: z.string().optional(),
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
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

type ValidationSchema = z.infer<typeof validationSchema>

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      firstName: '',
      surname: '',
      email: '',
      company: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (values: ValidationSchema) => {
    try {
    } catch (error: any) {}
  }
  return (
    <div py="lg:40 30">
      <Container>
        <div
          bg="gray-200"
          leading="relaxed"
          max-w="700px"
          mx="auto"
          p="y-10 sm:x-10 x-4"
          rounded="2xl"
          shadow="xl"
          text="sm:base sm"
          w="full">
          <div mb="12" text="center">
            <h1
              font="600"
              line-height="sm:39px 32px"
              mb="4"
              text="sm:32px 24px">
              Sign Up
            </h1>

            <p line-height="20px" text="14px gray-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio excepturi accusantium rem voluptatum beatae facere et
            </p>
          </div>

          <form flex="~ col" gap="20px" onSubmit={handleSubmit(onSubmit)}>
            <div flex="~ sm:row col" gap="20px">
              <Controller
                control={control}
                name="firstName"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    autoComplete="given-name"
                    error={error?.message}
                    label="First Name"
                    type="text"
                  />
                )}
              />
              <Controller
                control={control}
                name="surname"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    autoComplete="family-name"
                    error={error?.message}
                    label="Surname"
                    type="text"
                  />
                )}
              />
            </div>

            <div flex="~ sm:row col" gap="20px">
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    autoComplete="email"
                    error={error?.message}
                    label="Email"
                    type="email"
                  />
                )}
              />
              <Controller
                control={control}
                name="company"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    autoComplete="organization"
                    error={error?.message}
                    label="Company (Optional)"
                    type="text"
                  />
                )}
              />
            </div>

            <div flex="~ sm:row col" gap="20px">
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    autoComplete="new-password"
                    error={error?.message}
                    label="Password"
                    type="password"
                  />
                )}
              />

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    autoComplete="new-password"
                    error={error?.message}
                    label="Confirm Password"
                    type="password"
                  />
                )}
              />
            </div>

            <button
              b="1 solid blue-500/40"
              bg="blue-500/2 hover:blue-500/5"
              color="blue-500"
              cursor="pointer"
              disabled={isSubmitting}
              h="40px"
              mt="6"
              rounded="8px"
              scale="active:97"
              transition="all 200"
              type="submit">
              Sign Up
            </button>
          </form>

          <div mt="4" text="center">
            <span color="gray-700">Already have an account?</span>{' '}
            <Link color="blue-500 hover:red-500" href="#">
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SignUp

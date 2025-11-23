import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Container, Button, Checkbox } from '~/components'
import Link from 'next/link'
import { GoogleIcon } from '~/components/Icons'
import { useEffect, useState } from 'react'

const validationSchema = z
  .object({
    firstname: z.string().min(2, 'Must be at least 2 characters long'),
    lastname: z.string().min(2, 'Must be at least 2 characters long'),
    email: z.string().email('Please enter a valid email'),
    company: z.string().optional(),
    password: z
      .string()
      .min(8, '')
      .regex(/[!@#$%^&*(),_.?":{}|<>]/, '')
      .regex(/\d/, '')
      .regex(/[a-z]/, '')
      .regex(/[A-Z]/, ''),
    confirmPassword: z.string(),
    terms_of_service: z
      .boolean()
      .refine((val) => val === true, 'You must accept the terms of use.')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

type ValidationSchema = z.infer<typeof validationSchema>

const SignUp = () => {
  const [passwordMatches, setPasswordMatches] = useState({
    char_interval: false,
    number: false,
    special_char: false,
    lowercase: false,
    uppercase: false
  })
  const {
    control,
    watch,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<ValidationSchema>({
    mode: 'all',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      company: '',
      password: '',
      confirmPassword: '',
      terms_of_service: false
    }
  })

  const password = watch('password')

  const onSubmit = async (values: ValidationSchema) => {
    try {
    } catch (error: any) {}
  }

  useEffect(() => {
    const value = password || ''
    const initial = {
      char_interval: false,
      number: false,
      special_char: false,
      lowercase: false,
      uppercase: false
    }
    initial.number = /\d/.test(value)
    initial.lowercase = /[a-z]/g.test(value)
    initial.uppercase = /[A-Z]/g.test(value)
    initial.char_interval = value.trim().length >= 8 && value.trim().length < 16
    initial.special_char = /[!@#$%^&*(),_.?":{}|<>]/g.test(value)
    setPasswordMatches(initial)
  }, [password])

  return (
    <div py="lg:40 30" z="1">
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
          <div mb="10" text="center">
            <h1
              font="600"
              line-height="sm:40px 32px"
              mb="6"
              text="sm:36px gray-700 24px">
              Sign Up
            </h1>

            <p px="2" text=".9rem gray-600">
              Create your account to get started. Simplify your FMEA process and
              manage risks effectively.
            </p>
          </div>
          <Button w="full">
            <GoogleIcon />
            Sign up with Google
          </Button>

          <div flex="~ row" items="center" justify="center" my="10">
            <div bg="gray-300" h="1px" w="full" />
            <span mt="-2px" px="4" text="sm gray-500">
              or
            </span>
            <div bg="gray-300" h="1px" w="full" />
          </div>

          <form flex="~ col" gap="20px" onSubmit={handleSubmit(onSubmit)}>
            <div flex="~ sm:row col" gap="20px">
              <Controller
                control={control}
                name="firstname"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="First Name"
                    required
                    type="text"
                  />
                )}
              />
              <Controller
                control={control}
                name="lastname"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="Last Name"
                    required
                    type="text"
                  />
                )}
              />
            </div>

            <div flex="~ sm:row col" gap="20px">
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
              <Controller
                control={control}
                name="company"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
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
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="Password"
                    required
                    type="password"
                  />
                )}
              />

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field, formState, fieldState: { error } }) => (
                  <Input
                    {...field}
                    disabled={formState.isSubmitting}
                    error={error?.message}
                    label="Confirm Password"
                    required
                    type="password"
                  />
                )}
              />
            </div>

            <div
              font="200"
              gap="sm:25px"
              grid="~ sm:cols-2"
              line-height="18px"
              mt="-10px"
              text="left 12px">
              <div>
                <p
                  text={
                    passwordMatches.char_interval ? 'orange-600' : 'gray-600'
                  }>
                  - must be 8-16 characters long,
                </p>{' '}
                <p
                  text={
                    passwordMatches.lowercase && passwordMatches.uppercase
                      ? 'orange-600'
                      : 'gray-600'
                  }>
                  - containing uppercase and lowercase letters,
                </p>{' '}
              </div>
              <div>
                <p text={passwordMatches.number ? 'orange-600' : 'gray-600'}>
                  - at least one number,
                </p>{' '}
                <p
                  text={
                    passwordMatches.special_char ? 'orange-600' : 'gray-600'
                  }>
                  - at least one special character (e.g., @, !, #, etc.).
                </p>
              </div>
            </div>

            <Controller
              control={control}
              name="terms_of_service"
              render={({ field, formState, fieldState: { error } }) => (
                <Checkbox
                  {...field}
                  disabled={formState.isSubmitting}
                  error={error?.message}
                  {...field}
                  label={
                    <p>
                      I have read and agreed to{' '}
                      <Link
                        decoration="hover:underline"
                        href="/terms-of-use"
                        rel="noopener noreferrer"
                        target="_blank"
                        text="blue hover:blue-700">
                        Terms of Service
                      </Link>{' '}
                      and
                      <Link
                        decoration="hover:underline"
                        href="/privacy-policy"
                        rel="noopener noreferrer"
                        target="_blank"
                        text="blue hover:blue-700">
                        {' '}
                        Privacy Policy
                      </Link>
                    </p>
                  }
                />
              )}
            />

            <Button disabled={isSubmitting} mt="3" type="submit" w="full">
              Sign Up
            </Button>
          </form>

          <div mt="6" text="center .9rem">
            <span color="gray-600">Already have an account?</span>

            <Link color="blue" href="#" ml="2px">
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SignUp

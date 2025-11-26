import { forwardRef, InputHTMLAttributes, JSX } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { InputTooltip } from '~/components'

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'onChange' | 'value'
  > {
  type?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  tooltipContent?: JSX.Element
  required?: boolean
  label?: string
  value?: string | number | null
  defaultValue?: string
  error?: string
  onChange?: (e: React.ChangeEvent<any>) => void
  onBlur?: (e: React.FocusEvent<any>) => void
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      type = 'text',
      name,
      label,
      required,
      tooltipContent,
      disabled = false,
      value = '',
      error,
      onChange,
      onBlur,
      ...rest
    },
    ref
  ) => {
    return (
      <div position="relative" w="full">
        <label
          bg="transparent"
          color={disabled ? 'gray-dark/50' : 'gray-dark'}
          flex="~ items-center justify-between"
          htmlFor={name}
          mb="10px"
          text="sm:base sm">
          {label}

          {required && (
            <span ml="2px" op={disabled ? '40' : '100'}>
              *
            </span>
          )}

          {tooltipContent && <InputTooltip content={tooltipContent} />}
        </label>

        {type === 'textarea' ? (
          <textarea
            b={`1 solid rounded-lg ${error ? 'red-500' : 'gray-light focus:blue'}`}
            bg="white disabled:gray-dark/50"
            cursor={disabled ? 'not-allowed' : 'text'}
            data-field={name}
            disabled={disabled}
            focus={`border-${error ? 'red-500' : 'white'} bg-gray-darker`}
            font="300"
            id={name}
            line-height="tight"
            outline="none"
            p="x-15px y-18px"
            placeholder=" "
            ref={ref as any}
            resize="y"
            rows={8}
            shadow="focus:sm"
            text={disabled ? 'gray sm:sm xs' : 'gray-dark sm:sm xs'}
            transition="all 200"
            value={value ?? ''}
            w="full"
            onBlur={(e) => {
              onBlur?.(e)
            }}
            onChange={onChange}
            {...rest}
          />
        ) : (
          <input
            appearance="none"
            b={`1 solid rounded-lg ${error ? 'red-500' : 'gray-light focus:blue'}`}
            bg="white disabled:gray-70/50"
            className="input appearance-none"
            cursor={disabled ? 'not-allowed' : 'text'}
            data-field={name}
            disabled={disabled}
            font="300"
            h="44px"
            id={name}
            line-height="tight"
            max-h="44px"
            outline="none"
            p="x-15px"
            placeholder=" "
            ref={ref as any}
            shadow="focus:sm"
            text={disabled ? 'gray sm:sm xs' : 'gray-dark sm:sm xs'}
            transition="all 200"
            type={type}
            value={value ?? ''}
            w="full"
            onBlur={(e) => {
              onBlur?.(e)
            }}
            onChange={onChange}
            {...rest}
          />
        )}

        <AnimatePresence mode="wait">
          {error && type !== 'password' && (
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              data-type="error"
              exit={{ opacity: 0, y: -10 }}
              font="300"
              initial={{ opacity: 0, y: -10 }}
              key="error-message"
              line-height="16px"
              mt={type === 'textarea' ? '-3px' : '2px'}
              position="absolute left-0 top-full"
              text="xs red-500"
              transition={{
                duration: 0.2,
                ease: 'easeInOut'
              }}>
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

export default Input

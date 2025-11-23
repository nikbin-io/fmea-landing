import { forwardRef, InputHTMLAttributes, JSX, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { InfoIcon } from '~/components/Icons'
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
    const tooltipRef = useRef<HTMLButtonElement>(null)
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

    useClickAway(tooltipRef, () => {
      setIsTooltipOpen(false)
    })

    return (
      <div position="relative" w="full">
        <label
          bg="transparent"
          color={disabled ? 'gray-400' : 'gray-600'}
          flex="~ items-center justify-between"
          htmlFor={name}
          mb="5px"
          text="sm:14px 12px">
          <span>
            {label}

            {required && (
              <span ml="2px" op={disabled ? '40' : '100'}>
                *
              </span>
            )}
          </span>

          {tooltipContent && (
            <div position="relative">
              <InputTooltip content={tooltipContent} open={isTooltipOpen} />

              <button
                b="none"
                bg="transparent"
                color="gray-400 hover:black"
                cursor="pointer"
                flex="~ items-center justify-center"
                h="18px"
                outline="none"
                ref={tooltipRef}
                transition="colors 300"
                type="button"
                w="18px"
                onClick={() => setIsTooltipOpen(!isTooltipOpen)}>
                <InfoIcon />
              </button>
            </div>
          )}
        </label>

        {type === 'textarea' ? (
          <textarea
            b={`1 solid rounded-8px ${error ? 'red-500' : 'gray-200 focus:blue'}`}
            bg="white disabled:gray-300"
            cursor={disabled ? 'not-allowed' : 'text'}
            data-field={name}
            disabled={disabled}
            focus={`border-${error ? 'red-500' : 'white'} bg-gray-900`}
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
            text={disabled ? 'gray-500 sm:14px 12px' : 'gray-800 sm:14px 12px'}
            transition="all 200"
            value={value ?? ''}
            w="full"
            onBlur={(e) => {
              setIsTooltipOpen(false)
              onBlur?.(e)
            }}
            onChange={onChange}
            onFocus={() => tooltipContent && setIsTooltipOpen(true)}
            {...rest}
          />
        ) : (
          <input
            appearance="none"
            b={`1 solid rounded-8px ${error ? 'red-500' : 'gray-200 focus:blue'}`}
            bg="white disabled:gray-300"
            className="input appearance-none"
            color="gray-600"
            cursor={disabled ? 'not-allowed' : 'text'}
            data-field={name}
            disabled={disabled}
            font="300"
            h="40px"
            id={name}
            line-height="tight"
            max-h="40px"
            outline="none"
            p="x-15px"
            placeholder=" "
            ref={ref as any}
            shadow="focus:sm"
            text={disabled ? 'gray-500 sm:14px 12px' : 'gray-800 sm:14px 12px'}
            transition="all 200"
            type={type}
            value={value ?? ''}
            w="full"
            onBlur={(e) => {
              setIsTooltipOpen(false)
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
              text="12px red-500"
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

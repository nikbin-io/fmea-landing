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
  touched?: boolean
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
          color="gray-500"
          flex="~ items-center justify-between"
          htmlFor={name}
          mb="5px"
          text="sm:14px 12px">
          {label}

          {required && (
            <span color="red" op={disabled ? '40' : '100'}>
              *
            </span>
          )}

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
            b={`1 solid rounded-8px ${disabled ? 'gray-700' : error ? 'red-500' : 'gray-500 focus:white'}`}
            bg="white"
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
            text={disabled ? 'gray-500 sm:14px 12px' : 'white sm:14px 12px'}
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
            b={`1 solid rounded-8px ${disabled ? 'gray-700' : error ? 'red-500' : 'gray-200 focus:gray-300'}`}
            bg="white"
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
            text={disabled ? 'gray-500 sm:14px 12px' : 'white sm:14px 12px'}
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
          {error && (
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              data-type="error"
              exit={{ opacity: 0, y: -10 }}
              font="500"
              initial={{ opacity: 0, y: -10 }}
              key="error-message"
              left="5px"
              m={type === 'textarea' ? 'l-5px' : ''}
              position={type === 'textarea' ? '' : 'absolute'}
              text="12px red"
              top={type === 'textarea' ? '120px' : '100%'}
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

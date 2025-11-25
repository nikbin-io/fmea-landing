import { useState, useRef, useMemo, forwardRef, JSX } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { useClickAway } from 'react-use'
import { InputTooltip } from '~/components'
import { ChevronDown, CrossIcon, InfoIcon } from '~/components/Icons'

interface Option {
  value: string | number
  label: string
  disabled?: boolean
}

interface SelectBoxProps {
  options: Option[]
  value?: string | number | (string | number)[]
  name: string
  placeholder?: string
  required?: boolean
  maxSelection?: number
  multiple?: boolean
  clearable?: boolean
  disabled?: boolean
  error?: string
  tooltipContent?: JSX.Element
  onChange: (value: any) => void
  onBlur?: () => void
}

const SelectBox = forwardRef<HTMLInputElement, SelectBoxProps>(
  (
    {
      options: initialOptions,
      value,
      name,
      placeholder,
      required,
      maxSelection,
      multiple = false,
      clearable,
      disabled = false,
      tooltipContent,
      error,
      onChange,
      onBlur
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false)
    const tooltipRef = useRef<HTMLButtonElement>(null)
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
    const selectRef = useRef<HTMLDivElement>(null)
    const options = useMemo(() => [...initialOptions], [initialOptions])

    useClickAway(tooltipRef, () => {
      setIsTooltipOpen(false)
    })

    const mappedOptions = useMemo(() => {
      return options?.reduce<{ [key: string | number]: string }>(
        (acc, item) => {
          acc[item.value] = item.label
          return acc
        },
        {}
      )
    }, [options])

    const hasValue = useMemo(() => {
      if (Array.isArray(value)) {
        return value.length > 0
      }
      return (
        value !== undefined &&
        value !== null &&
        value !== '' &&
        (typeof value === 'string' || typeof value === 'number')
      )
    }, [value])

    const selectedLabels = useMemo(() => {
      if (!hasValue) return ''
      if (Array.isArray(value)) {
        return value.map((v) => mappedOptions[v]).join(', ')
      }
      return mappedOptions[value as string]
    }, [value, mappedOptions, hasValue])

    useClickAway(selectRef, () => {
      if (open) {
        setOpen(false)

        onBlur?.()
      }
    })

    const handleChange = (newValue: string | number) => {
      if (disabled) return

      if (multiple) {
        const currentValues = Array.isArray(value) ? value : []
        const updatedValues = currentValues.includes(newValue)
          ? currentValues.filter((v) => v !== newValue)
          : maxSelection && maxSelection === currentValues.length
            ? [...currentValues]
            : [...currentValues, newValue]

        onChange(updatedValues)
      } else {
        onChange(newValue)
        setOpen(false)
      }
    }

    const handleReset = (e: React.MouseEvent) => {
      if (!disabled) {
        e.stopPropagation()
        onChange(multiple ? [] : '')
        onBlur?.()
      }
    }

    const menuVariants = {
      open: { opacity: 1, display: 'block', zIndex: 1, y: 0 },
      closed: {
        opacity: 0,
        y: -5,
        zIndex: 0,
        transitionEnd: { display: 'none' }
      }
    }

    return (
      <div position="relative" ref={selectRef} w="full">
        <input
          data-field={name}
          name={name}
          ref={ref}
          type="hidden"
          value={Array.isArray(value) ? value.join(',') : value || ''}
        />

        <div
          color="gray-500"
          flex="~ items-center justify-between"
          font="500"
          mb="10px"
          text="sm:sm xs">
          {placeholder}

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
        </div>

        <div
          b={`1 solid rounded-8px ${disabled ? 'gray-700' : error ? 'red-500' : 'gray-200 focus:gray-300'}`}
          bg="white"
          cursor={disabled ? 'not-allowed' : 'pointer'}
          flex="~ items-center"
          gap="10px"
          h="40px"
          justify={hasValue ? 'between' : 'end'}
          op={disabled ? '90' : '100'}
          outline="none"
          p={!(hasValue && clearable) ? 'l-15px sm:r-30px r-15px' : 'x-15px'}
          w="full"
          onClick={() => {
            if (!disabled) {
              setOpen(!open)
              if (open) {
                onBlur?.()
              }
            }
          }}>
          {hasValue && (
            <span
              color={disabled ? 'gray-500' : 'gray-800'}
              font="300"
              text="sm:sm xs"
              transition="colors duration-300">
              {selectedLabels}
            </span>
          )}

          {hasValue && clearable ? (
            <button
              b="none"
              bg="transparent"
              className="[&>svg]:w-18px hover:[&>svg]:scale-103"
              color={disabled ? 'gray-500' : 'gray-500 hover:gray-800'}
              cursor={disabled ? 'not-allowed' : 'pointer'}
              flex="~ items-center justify-center"
              p="0"
              transition="all 200"
              onClick={handleReset}>
              <CrossIcon />
            </button>
          ) : (
            <>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <div
                  color={disabled ? 'gray-500' : 'white'}
                  flex="~ items-center justify-center">
                  <ChevronDown />
                </div>
              </motion.div>
            </>
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
                left="15px"
                position="absolute"
                text="xs red"
                top="105%"
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}>
                {error}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          animate={open ? 'open' : 'closed'}
          b="1 solid gray-200 rounded-8px"
          bg="white"
          initial="closed"
          overflow="hidden"
          position="absolute left-0  top-full"
          shadow="lg"
          transition={{ duration: 0.3 }}
          variants={menuVariants}
          w="full"
          z="2">
          <div
            className="custom-scrollbar-small"
            flex="~ col"
            max-h="165px"
            overflow-y="auto"
            p="x-10px y-10px">
            {options?.map((item, index) => (
              <div bg="inherit" flex="~ items-center" key={index}>
                <label
                  bg="hover:gray-100"
                  color={
                    multiple
                      ? Array.isArray(value) && value.includes(item.value)
                        ? 'blue'
                        : 'gray-600 hover:white'
                      : value === item.value
                        ? 'gray-800'
                        : 'gray-600 hover:gray-800'
                  }
                  cursor={item.disabled ? 'not-allowed' : 'pointer'}
                  flex="~ items-center justify-between row-reverse 1"
                  font="300"
                  htmlFor={`select-${name}-${item.label}`}
                  line-height="20px"
                  op={item.disabled ? '40' : '100'}
                  p="5px"
                  pointerEvents={item.disabled ? 'none' : ''}
                  rounded="md"
                  text="sm:sm xs nowrap"
                  transition="colors 300"
                  z="4">
                  <span order="3">{item.label}</span>

                  <input
                    checked={
                      multiple
                        ? Array.isArray(value) && value.includes(item.value)
                        : value === item.value
                    }
                    cursor="pointer"
                    disabled={item.disabled}
                    id={`select-${name}-${item.label}`}
                    m="0"
                    name={name}
                    op="0"
                    type={multiple ? 'checkbox' : 'radio'}
                    onChange={() => handleChange(item.value)}
                  />
                </label>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }
)

export default SelectBox

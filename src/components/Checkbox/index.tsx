import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label?: ReactNode
  error?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, checked, onChange, ...rest }, ref) => {
    return (
      <>
        <div
          flex="~ items-start"
          gap="10px"
          position="relative"
          text="gray-700 left sm">
          <input
            accent="blue"
            checked={checked}
            cursor="pointer"
            h="20px"
            m="0"
            ref={ref}
            type="checkbox"
            onChange={(e) => onChange?.(e.target.checked)}
            {...rest}
          />
          {label && <label>{label}</label>}

          <AnimatePresence mode="wait">
            {error && (
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                data-type="error"
                exit={{ opacity: 0, y: -10 }}
                font="300"
                initial={{ opacity: 0, y: -10 }}
                key="error-message"
                line-height="19px"
                position="absolute"
                text="12px red-500"
                top="full"
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut'
                }}>
                {error}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </>
    )
  }
)

export default Checkbox

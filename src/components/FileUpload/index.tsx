import { forwardRef, JSX, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { InfoIcon, CrossIcon } from '~/components/Icons'
import { AnimatePresence, motion } from 'framer-motion'
import { InputTooltip } from '~/components'
import Image from 'next/image'

interface FileUploadProps {
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  tooltipContent?: JSX.Element
  required?: boolean
  error?: string
  accept?: 'pdf' | 'image'
  maxSize?: number
  value?: File | null
  onChange?: (file: File | null) => void
  onBlur?: () => void
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      name,
      label,
      placeholder = 'Drag and drop files here',
      required,
      tooltipContent,
      disabled = false,
      error,
      accept = 'pdf',
      maxSize = 20,
      value,
      onChange,
      onBlur
    },
    ref
  ) => {
    const tooltipRef = useRef<HTMLButtonElement>(null)
    const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useClickAway(tooltipRef, () => {
      setIsTooltipOpen(false)
    })

    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const acceptedExtensions =
      accept === 'pdf' ? '.pdf' : '.jpg,.jpeg,.png,.gif,.webp'

    const validateFile = (file: File): string | null => {
      const fileType = file.type
      const fileSize = file.size / (1024 * 1024)

      if (accept === 'pdf' && fileType !== 'application/pdf') {
        return 'Only PDF files are allowed'
      }

      if (accept === 'image' && !fileType.startsWith('image/')) {
        return 'Only image files are allowed'
      }

      if (fileSize > maxSize) {
        return `File size must be less than ${maxSize}MB`
      }

      return null
    }

    const handleFileChange = (file: File | null) => {
      if (!file) {
        onChange?.(null)
        setPreviewUrl(null)
        return
      }

      const validationError = validateFile(file)
      if (validationError) {
        return
      }

      // Create preview URL for images
      if (accept === 'image' && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
      } else {
        setPreviewUrl(null)
      }

      onChange?.(file)
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) {
        setIsDragging(true)
      }
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      if (disabled) return

      const files = e.dataTransfer.files
      if (files && files.length > 0) {
        handleFileChange(files[0])
      }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        handleFileChange(files[0])
      }
    }

    const handleBrowseClick = () => {
      if (!disabled) {
        fileInputRef.current?.click()
      }
    }

    const handleRemoveFile = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!disabled) {
        // Cleanup preview URL
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        handleFileChange(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }
    }

    return (
      <div position="relative" w="full">
        <label
          bg="transparent"
          color="gray-500"
          flex="~ items-center justify-between"
          htmlFor={name}
          mb="10px"
          text="sm:base sm">
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

        <input
          accept={acceptedExtensions}
          data-field={name}
          disabled={disabled}
          id={name}
          name={name}
          ref={(node) => {
            if (typeof ref === 'function') {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
            ;(fileInputRef as any).current = node
          }}
          style={{ display: 'none' }}
          type="file"
          onChange={handleInputChange}
        />

        <div
          b={`2 ${isDragging ? 'solid' : 'dashed'} rounded-8px ${
            disabled
              ? 'gray-700'
              : error
                ? 'red-500'
                : value
                  ? 'blue'
                  : isDragging
                    ? 'gray-400'
                    : 'gray-200'
          }`}
          bg={isDragging ? 'gray-50' : 'white'}
          cursor={disabled ? 'not-allowed' : 'pointer'}
          flex="~ col items-center justify-center"
          min-h="180px"
          p="20px"
          transition="all 200"
          w="full"
          onBlur={onBlur}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
          <>
            <span
              color={disabled ? 'gray-400' : 'gray-600'}
              font="400"
              m="b-10px"
              text={value ? 'xs' : 'center base'}>
              {placeholder}
            </span>

            <span
              color="gray-400"
              font="300"
              m={value ? 'b-10px' : 'b-20px'}
              text="center xs">
              Limit {maxSize}MB per file • {accept.toUpperCase()}
            </span>

            <button
              b="1 solid gray-300 rounded-8px"
              bg="white hover:gray-50"
              color={disabled ? 'gray-400' : 'gray-700'}
              cursor={disabled ? 'not-allowed' : 'pointer'}
              font="400"
              h={value ? '32px' : '40px'}
              outline="none"
              p="x-20px"
              text={value ? 'xs' : 'bsm'}
              transition="all 200"
              type="button"
              onClick={handleBrowseClick}>
              Browse files
            </button>
          </>

          {value && (
            <div flex="~ col items-center" gap="15px" w="full">
              {/* Image Preview */}
              {previewUrl && accept === 'image' && (
                <div position="relative" w="full">
                  <Image
                    alt="Preview"
                    b="1 solid gray-200 rounded-8px"
                    max-h="200px"
                    object="contain"
                    src={previewUrl}
                    w="full"
                  />
                  {!disabled && (
                    <button
                      b="none"
                      bg="white hover:red-50"
                      className="[&>svg]:w-16px [&>svg]:h-16px"
                      color="red-500 hover:red-600"
                      cursor="pointer"
                      flex="~ items-center justify-center"
                      h="32px"
                      outline="none"
                      position="absolute top-10px right-10px"
                      rounded="full"
                      shadow="md"
                      transition="all 200"
                      type="button"
                      w="32px"
                      onClick={handleRemoveFile}>
                      <CrossIcon />
                    </button>
                  )}
                </div>
              )}

              {/* File Info */}
              <div
                b="1 solid gray-200 rounded-8px"
                bg="gray-50"
                flex="~ items-start justify-between nowrap"
                gap="10px"
                mt="10px"
                p="x-15px y-5px"
                w="full">
                <div flex="~ col" gap="5px" mt="1px" text="truncate xs">
                  <p color="gray-800" font="500" text="truncate">
                    {value.name}
                  </p>
                  <span color="gray-500">
                    {(value.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>

                {!disabled && !previewUrl && (
                  <button
                    b="none"
                    bg="transparent hover:red-100"
                    className="[&>svg]:w-16px [&>svg]:h-16px"
                    color="red-500 hover:red-600"
                    cursor="pointer"
                    flex="~ shrink-0 items-center justify-center"
                    outline="none"
                    rounded="4px"
                    transition="colors 200"
                    type="button"
                    onClick={handleRemoveFile}>
                    <CrossIcon />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

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
              text="12px red"
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
    )
  }
)

export default FileUpload

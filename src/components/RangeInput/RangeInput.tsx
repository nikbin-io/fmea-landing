import {
  forwardRef,
  InputHTMLAttributes,
  JSX,
  useMemo,
  useState,
  useEffect
} from 'react'

interface RangeInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  required?: boolean
  tooltipContent?: JSX.Element
  min?: number
  max?: number
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (
    {
      label,
      required,
      tooltipContent,
      disabled = false,
      value: propValue, // Dışarıdan gelen değeri propValue olarak aldık
      defaultValue,
      min = 25,
      max = 200,
      className,
      style,
      id,
      name,
      onChange, // onChange'i buradan ayıkladık
      ...rest
    },
    ref
  ) => {
    // Başlangıç değeri: Varsa value, yoksa defaultValue, o da yoksa max
    const initialValue =
      propValue !== undefined
        ? Number(propValue)
        : defaultValue !== undefined
          ? Number(defaultValue)
          : max

    // İçerideki state
    const [localValue, setLocalValue] = useState<number>(Number(initialValue))

    // Eğer dışarıdan "value" prop'u değişirse (controlled component durumu), state'i güncelle
    useEffect(() => {
      if (propValue !== undefined) {
        setLocalValue(Number(propValue))
      }
    }, [propValue])

    // Slider hareket ettiğinde çalışacak fonksiyon
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setLocalValue(newValue) // Kendi state'imizi güncelle (UI anında tepki verir)

      if (onChange) {
        onChange(e) // Eğer parent component bir fonksiyon yolladıysa onu da tetikle
      }
    }

    // İlerleme çubuğu hesabını localValue üzerinden yapıyoruz
    const progressPercent = useMemo(() => {
      const val = localValue
      const safeMin = Number(min)
      const safeMax = Number(max)
      // Sıfıra bölünme hatasını önlemek için kontrol
      if (safeMax - safeMin === 0) return 0
      return ((val - safeMin) * 100) / (safeMax - safeMin)
    }, [localValue, min, max])

    return (
      <div className={className} position="relative" w="full">
        <label
          color={disabled ? 'gray-dark/50' : 'gray-dark'}
          flex="~ items-center justify-between"
          font="400"
          htmlFor={id ?? name}
          mb="20px"
          text="sm gray-dark">
          <span>
            {label}
            {required && <span ml="2px">*</span>}
          </span>
          {tooltipContent && <div>{tooltipContent}</div>}
          <div flex="~ items-center justify-end">({localValue}) </div>
        </label>

        <div flex="~ col" gap="6px" w="full">
          <input
            {...rest}
            accent="brand"
            appearance="none"
            bg="transparent"
            className={`
              disabled:opacity-50
              [&::-webkit-slider-runnable-track]:(h-6px rounded-full )
              [&::-moz-range-track]:(h-6px rounded-full )
              [&::-moz-range-progress]:(h-6px rounded-full)
              [&::-webkit-slider-thumb]:(appearance-none w-10px h-10px rounded-full bg-white border-3 border-solid border-gray/20 shadow-sm transition-transform hover:scale-110)
            `}
            cursor={disabled ? 'not-allowed' : 'pointer'}
            disabled={disabled}
            h="6px"
            id={id ?? name}
            max={max}
            min={min}
            name={name}
            outline="none"
            ref={ref}
            style={
              {
                ...style,
                '--range-progress': `${progressPercent}%`
              } as React.CSSProperties
            }
            type="range"
            value={localValue}
            w="full"
            onChange={handleInputChange}
          />

          <div flex="~ items-center justify-between" mt="2px" text="xs gray">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        </div>
      </div>
    )
  }
)

RangeInput.displayName = 'RangeInput'

export default RangeInput

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
  tooltipContent?: JSX.Element
}

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  (
    {
      label,
      tooltipContent,
      value: propValue,
      className,
      style,
      id,
      name,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState<number>(Number(200))

    useEffect(() => {
      if (propValue !== undefined) {
        setLocalValue(Number(propValue))
      }
    }, [propValue])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setLocalValue(newValue)

      if (onChange) {
        onChange(e)
      }
    }

    const progressPercent = useMemo(() => {
      const val = localValue
      const safeMin = Number(25)
      const safeMax = Number(200)
      if (safeMax - safeMin === 0) return 0
      return ((val - safeMin) * 100) / (safeMax - safeMin)
    }, [localValue])

    return (
      <div className={className} position="relative" w="full">
        <label
          color="gray-dark"
          flex="~ items-center justify-between"
          font="400"
          htmlFor="range-input"
          mb="20px"
          text="sm gray-dark">
          <span>{label}</span>
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
            cursor="pointer"
            h="6px"
            id="range-input"
            max={200}
            min={25}
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

          <div
            flex="~ items-center justify-between"
            mt="2px"
            text="xs gray-dark">
            <span>25</span>
            <span>200</span>
          </div>
        </div>
      </div>
    )
  }
)

export default RangeInput

interface SwitchButtonProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  defaultChecked?: boolean
}

const SwitchButton = ({
  disabled,
  onChange,
  checked,
  defaultChecked
}: SwitchButtonProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <div flex="~ items-center justify-between" w="full">
      <label
        cursor={disabled ? 'auto' : 'pointer'}
        flex="~ items-center"
        htmlFor="demo-switch-button"
        position="relative">
        <input
          checked={checked}
          className="sr-only peer"
          defaultChecked={defaultChecked}
          disabled={disabled}
          id="demo-switch-button"
          type="checkbox"
          onChange={handleChange}
        />
        <div
          after="absolute top-[2px] left-[2px] rounded-full h-22px w-22px transition-all"
          after-bg={disabled ? 'gray-lighter' : 'white'}
          b="rounded-full"
          bg={disabled ? 'gray' : 'brand'}
          className=" after:content-['']"
          h="26px"
          peer-checked={
            disabled
              ? 'after:translate-x-24px bg-gray'
              : 'after:translate-x-24px bg-brand'
          }
          w="50px"
        />
      </label>
    </div>
  )
}

export default SwitchButton

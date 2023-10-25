/* eslint-disable unicorn/consistent-function-scoping */
import { useMemo } from 'react'
type ButtonType = 'small' | 'medium' | 'large'
////
interface ButtonProperties {
  primary?: boolean
  backgroundColor?: string
  size?: ButtonType
  label: string
  onClick?: () => void
}

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block bg-pink-600'

const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...properties
}: ButtonProperties) => {
  const getSizeClasses = (size: ButtonType) => {
    switch (size) {
      case 'small': {
        return 'px-4 py-2.5'
      }
      case 'large': {
        return 'px-6 py-3'
      }
      default: {
        return 'px-5 py-2.5'
      }
    }
  }

  const getModeClasses = (isPrimary: boolean) =>
    isPrimary
      ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
      : 'text-slate-700 bg-green-600 border-slate-700 dark:text-white dark:border-white'

  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary)
    const sizeClass = getSizeClasses(size)

    return [modeClass, sizeClass].join(' ')
  }, [primary, size])

  return (
    <button
      type={'button'}
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...properties}
    >
      {label}
    </button>
  )
}

export default Button

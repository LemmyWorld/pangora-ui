import IconProps from '@/types/IconProps'

export default function MinusIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -11 24 24"
      width={width}
      fill="currentColor"
    >
      <path d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path>
    </svg>
  )
}

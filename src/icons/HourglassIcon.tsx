import IconProps from '@/types/IconProps'

export default function HourglassIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-6 -2 24 24"
      width={width}
      fill="currentColor"
    >
      <path d="M3 2v4a3 3 0 1 0 6 0V2H3zm8 16a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2v-4a4.99 4.99 0 0 1 2-4 4.992 4.992 0 0 1-2-4V2a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2v4a4.992 4.992 0 0 1-2 4 4.99 4.99 0 0 1 2 4v4zm-2 0v-4a3 3 0 0 0-6 0v4h6z"></path>
    </svg>
  )
}

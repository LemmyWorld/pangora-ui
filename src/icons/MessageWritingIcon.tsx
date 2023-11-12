import IconProps from '@/types/IconProps'

export default function MessageWritingIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2.5 24 24"
      width={width}
      fill="currentColor"
    >
      <path d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3zm6.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3.013L9.378 12zM13 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
    </svg>
  )
}

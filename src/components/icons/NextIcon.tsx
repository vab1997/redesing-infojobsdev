import { JSX, SVGProps } from "react"

export function NextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlSpace="preserve" 
      width="800" 
      height="800" 
      viewBox="0 0 24 24" 
      className="pt-[2px]"
      {...props}
    >
      <path d="m6.8 23.7-1.4-1.4L15.7 12 5.4 1.7 6.8.3 18.5 12z" fill="currentColor" />
    </svg>
  )
}
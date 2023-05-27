'use client'

import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ScrollToTop () {
  const chivatoRef = useRef<HTMLDivElement | null>(null)
  const [isIntersecting] = useIntersectionObserver({ elementRef: chivatoRef })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cls = !isIntersecting ? 'opacity-100 visible' : 'blur-sm opacity-0 invisible'
  
  return (
    <>
      <div
        className={`opacity-0 h-[1px] left-[1px] absolute top-[250px] w-[1px]`}
        ref={chivatoRef}
      />
      <svg
        fillRule="evenodd" 
        strokeLinejoin="round" 
        strokeMiterlimit="2" 
        clipRule="evenodd" 
        viewBox="0 0 24 24"
        width="60"
        height="60"
        fill="currentColor"
        className={`cursor-pointer fixed transition-all duration-500 bottom-8 right-8 ${cls}`}
        onClick={handleClick}
      >
        <path
          fillRule="nonzero"
          d="M2.019 11.993c0 5.518 4.48 9.998 9.998 9.998 5.517 0 9.997-4.48 9.997-9.998s-4.48-9.998-9.997-9.998c-5.518 0-9.998 4.48-9.998 9.998zm1.5 0c0-4.69 3.808-8.498 8.498-8.498s8.497 3.808 8.497 8.498-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498zm4.715-1.528 3.259-3.255a.749.749 0 0 1 1.06 0c1.754 1.753 3.259 3.254 3.259 3.254a.752.752 0 0 1-1.061 1.061l-1.978-1.978v6.694a.75.75 0 0 1-1.5 0V9.547l-1.978 1.979a.747.747 0 0 1-1.055-.007.75.75 0 0 1-.006-1.054z"
        />
      </svg>
    </>
  )
}
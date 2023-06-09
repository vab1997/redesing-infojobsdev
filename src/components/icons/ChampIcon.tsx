import { JSX, SVGProps } from "react"

export function ChampIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='800'
      height='800'
      className='si-glyph si-glyph-champion-cup'
      viewBox='0 -0.5 17 17'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11.969 1H3.082v1.031h-3.09v4.836c0 1.869 2.086 3.407 4.133 3.567.672.72 1.854 1.243 2.906 1.466v1.264c-1.006.309-2.803 1.035-2.906 1.826h6.904c-.104-.791-2.084-1.518-3.092-1.826V11.9c1.056-.223 2.291-.746 2.964-1.466 2.046-.16 4.04-1.698 4.04-3.567V2.031h-2.972V1ZM.941 2.947H3.01v4.166c0 .822.212 1.604.585 2.308C2.047 8.928.941 7.658.941 6.172V2.947Zm8.104 5.081-1.544-.851-1.546.851.295-1.8L5 4.954l1.727-.263.774-1.636.772 1.636L10 4.954 8.75 6.228l.295 1.8Zm2.295 1.526c.375-.736.59-1.55.59-2.411V2.974h2.074V6.16c0 1.553-1.111 2.879-2.664 3.394Z'
        className='si-glyph-fill'
      />
    </svg>
  );
}

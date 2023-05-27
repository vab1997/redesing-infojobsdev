import { JSX, SVGProps } from 'react';

export function ArrowLeft(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      clipRule='evenodd'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='nonzero'
        d='M12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zM10.489 8.21l-3.255 3.259a.748.748 0 0 0 0 1.061l3.254 3.258a.74.74 0 0 0 .526.217.753.753 0 0 0 .531-.221.748.748 0 0 0 .003-1.057L9.571 12.75h6.693a.75.75 0 0 0 0-1.5H9.571l1.978-1.979a.754.754 0 0 0-.536-1.276c-.19 0-.38.071-.524.215z'
      />
    </svg>
  );
}

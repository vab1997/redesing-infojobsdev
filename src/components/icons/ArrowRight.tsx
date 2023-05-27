import { JSX, SVGProps } from 'react';

export function ArrowRight(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
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
        d='M12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zM13.54 8.21l3.255 3.259a.751.751 0 0 1 0 1.061l-3.254 3.258a.742.742 0 0 1-.527.217.753.753 0 0 1-.534-1.278l1.978-1.977H7.764a.75.75 0 0 1 0-1.5h6.694l-1.979-1.979a.746.746 0 0 1 .006-1.054.754.754 0 0 1 .531-.222c.19 0 .38.071.524.215z'
      />
    </svg>
  );
}

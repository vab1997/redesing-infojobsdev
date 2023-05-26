import { JSX, SVGProps } from 'react';

export function ArrowRight(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='800'
      height='800'
      viewBox='0 0 16 16'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='m6.05 10.157 2.122-2.121L6.05 5.914 7.464 4.5 11 8.036 7.464 11.57 6.05 10.157zM8 0c4.418 0 8 3.59 8 8 0 4.418-3.59 8-8 8-4.418 0-8-3.59-8-8 0-4.418 3.59-8 8-8zm0 2C4.693 2 2 4.686 2 8c0 3.307 2.686 6 6 6 3.307 0 6-2.686 6-6 0-3.307-2.686-6-6-6z'
      />
    </svg>
  );
}

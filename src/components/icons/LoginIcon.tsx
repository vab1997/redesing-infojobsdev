import { JSX, SVGProps } from 'react';

export function LoginIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='800'
      height='800'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path
        d='M21 7v10a5.006 5.006 0 0 1-5 5h-4a1 1 0 0 1 0-2h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-4a1 1 0 0 1 0-2h4a5.006 5.006 0 0 1 5 5Zm-6.293 4.293-4-4a1 1 0 1 0-1.414 1.414L11.586 11H4a1 1 0 0 0 0 2h7.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414Z'
        data-name='log-in-Filled'
      />
    </svg>
  );
}

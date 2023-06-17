import React from 'react';

export default function IconMenu({
  w = 24,
  h = 24,
  fill = 'var(--on-surface)',
}) {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 12H21'
        stroke={fill}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3 6H21'
        stroke={fill}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3 18H21'
        stroke={fill}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

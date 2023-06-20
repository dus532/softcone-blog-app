import React from 'react';

export default function IconX({ w = 24, h = 24, fill = 'var(--on-surface)' }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 6L6 18'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 6L18 18'
        stroke={fill}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
}

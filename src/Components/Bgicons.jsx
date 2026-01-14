import React from 'react'

export default function Bgicons({ className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path d="M50 5 V50 L10 25" stroke="currentColor" strokeWidth="3" />
      <path d="M50 50 L90 25" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

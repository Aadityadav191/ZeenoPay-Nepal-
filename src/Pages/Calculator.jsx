import React from 'react'

export default function Calculator() {
  return (
    <>
      <div className="page">
        <h1>Welcome to Our Calculator  </h1>
      </div>

      <style>
        {`
          .page {
            flex: 1;
            min-height: calc(80vh - 120px); 
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .home-page h1 {
            font-size: 28px;
          }
        `}
      </style>
    </>
  )
}

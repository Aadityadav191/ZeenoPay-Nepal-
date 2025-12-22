import React from 'react'

export default function Guides() {
  return (
    <>
      <div className="GuidesPage ">
        <h1>Welcome to Our Guides GuidesPage   </h1>
      </div>

      <style>
        {`
          .GuidesPage  {
            flex: 1;
            min-height: calc(80vh - 120px); 
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .home-GuidesPage  h1 {
            font-size: 28px;
          }
        `}
      </style> 
    </>
  )
}

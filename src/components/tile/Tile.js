import React from 'react'

export default function Tile({obj}) {
  // console.log(Object.values(obj));
  return (
    <div className='tile-container'>
      {Object.values(obj)
        .map((el, index) => (<p key={index} className={index===0 ? 'tile-title' : 'tile'}>{el}</p>)
        )}
    </div>
  )
}

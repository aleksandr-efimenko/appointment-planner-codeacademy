import React from 'react'

export default function Tile({obj, deleteObj}) {
  const handleDelete = (e) => {
    deleteObj(obj.id);
  }
  const objWithoutId = {
    ...obj,
    id: undefined
  };
  console.log(Object.values(objWithoutId).filter(e => e));
  return (
    <div className='tile-container'>
      {Object.values(objWithoutId).filter(Boolean)
        .map((el, index) => 
        (<p key={index} className={index===0 ? 'tile-title' : 'tile'}>{el}</p>)
        )}
        <button onClick={handleDelete}> Delete </button>
    </div>
  )
}

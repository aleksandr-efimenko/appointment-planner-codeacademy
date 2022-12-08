import React from 'react'
import Tile from '../tile/Tile';

export default function TileList({ list, deleteObj }) {
  return (
    <div>
      {
        list.map(el => (
          <Tile deleteObj={deleteObj} obj={el} key={el.id} />
        ))
      }
    </div>
  )
}

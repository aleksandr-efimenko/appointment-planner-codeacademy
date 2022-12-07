import React from 'react'
import Tile from '../tile/Tile';

export default function TileList({ list }) {
  return (
    <div>
      {
        list.map(el => (
          <>
            <Tile obj={el} key={el.id} />
          </>
        ))
      }
    </div>
  )
}

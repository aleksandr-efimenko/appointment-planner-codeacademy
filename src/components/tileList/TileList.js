import React from 'react'
import Tile from '../tile/Tile';

export default function TileList({ list }) {
  return (
    <div>
      {
        list.map((el, index) => (
          <Tile obj={el} key={index} />
        ))
      }
    </div>
  )
}

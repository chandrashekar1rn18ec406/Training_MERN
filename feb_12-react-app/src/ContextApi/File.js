import React from 'react'
import noteContext from './Context'
import { useContext } from 'react'

export default function File() {
    const a=useContext(noteContext)
  return (
    <div>
        This {a.name} but {a.message}
    </div>
  )
}

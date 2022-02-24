import React from 'react'

export default function Footer() {
  return (
    <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            ALL
          </label>
          <p>You have 0 to do</p>
          <button id='delete'>Delete</button>
        </div>
  )
}

import React, { useRef } from 'react'

import { usePeopleStore } from '../store'

export default function Input() {
  const inputRef = useRef()
  const addPerson = usePeopleStore((state) => state.addPerson)

  const add = () => {
    addPerson(inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Person</button>
    </div>
  )
}

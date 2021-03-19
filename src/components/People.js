import React from 'react'

import { usePeopleStore } from '../store'

export default function People() {
  const people = usePeopleStore((state) => state.people)

  return (
    <div>
      <p>We have {people.length} people in our DB</p>
      <ul>
        {people.map((p) => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  )
}

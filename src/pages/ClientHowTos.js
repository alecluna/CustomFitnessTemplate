import React from 'react'
import CardComponent from '../components/cardcomponent'

const muscleGroups = ['Biceps', 'Triceps', 'Shoulders', 'Core', 'Legs']

export default function ClientHowTos() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
        {muscleGroups.map((muscles, index) => {
          return (
            <li style={{ listStyle: 'none' }} key={index.toString()}>
              <CardComponent
                text={muscles}
                linkto={`/musclegroups/${muscles}/`}
                className="grow"
              />
            </li>
          )
        })}
      </div>
    </div>
  )
}
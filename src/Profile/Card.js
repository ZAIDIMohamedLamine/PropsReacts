import React from 'react'

export default function Card(props) {

  return (
      <div id='my_skills' >
          <h2 style={{marginTop:'-20px'}}>{props.skill}</h2>
          <p style={{ marginTop: '20px'}}>{props.bio}</p>
    </div>
    )
}

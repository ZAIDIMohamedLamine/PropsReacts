import React from 'react'

export default function Contact(props) {
  return (
    <div>
          <h1 style={{ color: '#d5c455', marginTop: '100px' }}>Contact us</h1>
          <h3 style={{ marginTop: '20px' }}>Email : <span style={{ color:'grey'}}>{props.email}</span></h3>
          <h3 style={{marginTop:'20px'}}>Phone# :  <span style={{ color:'grey'}}>{props.cell}</span></h3>
          <h3 style={{marginTop:'20px'}}>Address:  <span style={{ color:'grey'}}>{props.address}</span></h3>
    </div>
  )
}

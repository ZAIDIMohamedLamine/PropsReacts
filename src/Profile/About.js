import React from 'react'

export default function About(props) {
    return (
      <>
      
    <div style={{ marginTop: '200px',display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto'}}>
          <h1 style={{color: '#d5c455' }}>About me</h1>
          <div className="about">
              <h2 style={{marginTop:'20px',fontSize:'30px'}}>I'm a professional {props.title}</h2>
              <p style={{ marginTop: '20px', fontSize: '20px' }}>{props.detail}</p>
              <h2 style={{ marginTop: '20px' }}>My Skills</h2>
              <div style={{marginTop:'50px',display:'grid',gridTemplateRows:'repeat(auto-fit, minmax(100px, 1fr)'}} className="skills">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="s1">
                      <div style={{margin:'0px 20px'}}>   
                            <label htmlFor="">{props.skill1}</label>
                            <input style={{ backgroundColor: 'black', width: '200px' }} type="range" max={100} value={95} disabled />
                      </div>
                      <div style={{margin:'0px 20px'}}>   
                            <label htmlFor="">{props.skill2}</label>
                            <input style={{ backgroundColor: 'black', width: '200px' }} type="range" max={100} value={80} disabled />
                      </div>
                      <div style={{margin:'0px 20px'}}> 
                            <label htmlFor="">{props.skill3}</label>
                            <input style={{ backgroundColor: 'black', width: '200px' }} type="range" max={100} value={85} disabled /> 
                      </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'20px' }} className="s2">
                      <div style={{margin:'0px 20px'}}>   
                            <label htmlFor="">{props.skill4}</label>
                            <input style={{ backgroundColor: 'black', width: '200px' }} type="range" max={100} value={70} disabled />
                      </div>
                      <div style={{margin:'0px 20px'}}>   
                            <label htmlFor="">{props.skill5}</label>
                            <input style={{ backgroundColor: 'black', width: '200px' }} type="range" max={100} value={80} disabled />
                      </div>
                      <div style={{margin:'0px 20px'}}> 
                            <label htmlFor="">{props.skill6}</label>
                            <input style={{ backgroundColor: 'black', width: '200px' }} type="range" max={100} value={60} disabled /> 
                      </div>
                  </div>
              </div>
          </div>
          
     </div>
           
    </>
  )
}

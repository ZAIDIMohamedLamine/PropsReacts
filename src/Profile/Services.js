import React from 'react'
import Card from './Card'

export default function Services() {
    return (
      <>
    <div style={{marginTop:'100px',display:'grid',gridTemplateColumns:'1fr',gridTemplateRows:'auto'}}>
          <h1 style={{ color: '#d5c455' }}>Services I provide are below</h1>
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(auto-fit, minmax(200px, 1fr)',marginTop:'50px'}}>
              <div style={{ display: 'flex',justifyContent:'center',alignItems:'center'}}>     
                <Card skill="HTML5" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum dolorum voluptatem. Repudiandae accusantium rem soluta commodi accusamus, dolorem inventore." />
                <Card skill="CSS3" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum dolorum voluptatem. Repudiandae accusantium rem soluta commodi accusamus, dolorem inventore." />
                <Card skill="JavaScript" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum dolorum voluptatem. Repudiandae accusantium rem soluta commodi accusamus, dolorem inventore." />
              </div>
               <div style={{ display: 'flex',justifyContent:'center',alignItems:'center'}}>     
                <Card skill="Figma" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum dolorum voluptatem. Repudiandae accusantium rem soluta commodi accusamus, dolorem inventore." />
                <Card skill="React" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum dolorum voluptatem. Repudiandae accusantium rem soluta commodi accusamus, dolorem inventore." />
                <Card skill="Node" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum dolorum voluptatem. Repudiandae accusantium rem soluta commodi accusamus, dolorem inventore." />
              </div>
         
          </div>    
    </div>

    </>
  )
}


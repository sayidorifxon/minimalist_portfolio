import React from 'react'

function HeroImage({image}) {
  return (
    <section className='heroimg'>
      <div className="container">
        <img src={image} alt="" />
      </div>
    </section>
  )
}

export default HeroImage

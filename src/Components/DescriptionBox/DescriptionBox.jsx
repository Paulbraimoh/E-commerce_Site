import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An eommerce website is an onine platform that facilitates buying and selling of products or services over the internet. This serves as a virtal marketplace where businesses and individuals showcase their producsts, interact with customers and conduct transactions withot the need for a physical presence. E-commerce websites have gained immense popularity due to their conveniece, accessibility, and the global reach they offer.</p>
        <p>
          E-commerce websites typically display products or services and their detailed description, images, prices, and any available variants (e.g., sizes, colors). Each product usually have its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox

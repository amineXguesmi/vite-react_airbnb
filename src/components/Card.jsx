import React from 'react'
import star from '../assets/Star 1.png'
const Card = (props) => {
  return (
    <div>
      
      <div className="card">
        <div className="containerBox" >
        { props.openSpots === 0 && <div className="card-sold">
                                      <h4>SOLD OUT</h4> 
                                  </div>}
          <img src={ props.img } />
        </div>
        <div className="card-stats">
            <img src={star} alt="" />
            <span>{props.rate}</span>
            
            <span>({props.reviewCount}) •</span>
            <span>USA</span>
        </div>
        <p>{props.eldesc}</p>
        <p>From {props.price} / person</p>
      </div>
    </div>
  )
}

export default Card

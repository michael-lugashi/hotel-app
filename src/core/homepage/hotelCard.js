import React from 'react';

class HotelCard extends React.Component {
 render() {
  return (
   <div className="hotelCard">
    <img className="hotelImage" alt="hotel" src={this.props.img} />
    <span>{this.props.hotelName}</span>
   </div>
  );
 }
}

export default HotelCard;

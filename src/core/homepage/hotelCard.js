import React from 'react';
import { Link } from 'react-router-dom';
import kebabCase from '../helpers/kababCase';

class HotelCard extends React.Component {
 render() {
  return (
   <Link
    style={{ textDecoration: 'none' }}
    to={encodeURI(kebabCase(this.props.hotelName))}
   >
    <div className="hotelCard">
     <img className="hotelImage" alt="hotel" src={this.props.img} />
     <span>{this.props.hotelName}</span>
    </div>
   </Link>
  );
 }
}

export default HotelCard;

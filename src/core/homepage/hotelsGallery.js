import React from 'react';
import HotelCard from './hotelCard';
import '../../styles/homepage.css';

class HotelGallery extends React.Component {
 render() {
  return (
   <div className="homepage">
    <h1 className="hompageTitle">Hotels</h1>
    <div className="hotelGallery">
     {console.log(this.props.hotelsData)}
     {this.props.hotelsData.map((hotelData) => {
      return <HotelCard img={hotelData.img} hotelName={hotelData.name}/>;
     })}
    </div>
   </div>
  );
 }
}

export default HotelGallery;

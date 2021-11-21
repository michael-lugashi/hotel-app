import React from 'react';

class HotelGallery extends React.Component {
 render() {
  return (
   <div>
    <h1>Hotels</h1>
    {console.log(this.props.hotelsData)}
   </div>
  );
 }
}

export default HotelGallery;

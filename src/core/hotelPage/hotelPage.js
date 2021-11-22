import React from 'react';
import '../../styles/hotelPage.css'

class HotelPage extends React.Component {
 constructor(props) {
  super(props);
  this.name = this.props.hotelData.name
  this.img = this.props.hotelData.img
  this.phone = this.props.hotelData.phone
  this.address = `${this.props.hotelData.number} ${this.props.hotelData['street name']}`
 }

 callNumber = () => {
     window.open('tel:' + this.phone)
 }
 render() {
  return (
   <div>
    <h1 className="hotelPageTitle">{this.name}</h1>
    <img alt='hotel' src={this.img}/>
    <p>Look at this beautiful hotel!</p>
    <div>Address: {this.address}</div>
    <button onClick={()=>{this.callNumber()}}>Call Now!</button>
   </div>
  );
 }
}

export default HotelPage;

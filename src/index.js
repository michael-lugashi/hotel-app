import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './core/model/hotelData';
import HotelGallery from './core/homepage/hotelsGallery';
import HotelPage from './core/hotelPage/hotelPage';
// import kebabCase from './core/helpers/kababCase';
// Link

class App extends React.Component {
//  constructor(props) {
//   super(props);
//  }

 render() {
  return (
   <Router>
    <div>
     <Routes>
      <Route exect path="/homepage" element={<HotelGallery hotelsData={data} />} />
      <Route exect path="/hotelName" element={<HotelPage/>} />

     </Routes>
    </div>
   </Router>
  );
 }
}

ReactDOM.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
 document.getElementById('root')
);

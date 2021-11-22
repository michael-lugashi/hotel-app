import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './core/model/hotelData';
import HotelGallery from './core/homepage/hotelsGallery';
import HotelPage from './core/hotelPage/hotelPage';
import './styles/index.css';
import kebabCase from './core/helpers/kababCase';

class App extends React.Component {
 render() {
  return (
   <Router>
    <Routes>
     <Route exect path="/" element={<HotelGallery hotelsData={data} />} />
     {data.map((hotelData) => {
      return (
       <Route
        key={hotelData.name + 'Link'}
        exect
        path={'/' + encodeURI(kebabCase(hotelData.name))}
        element={<HotelPage key={hotelData.name} hotelData={hotelData} />}
       />
      );
     })}
    </Routes>
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

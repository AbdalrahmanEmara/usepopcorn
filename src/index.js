import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return <div>
    <StarRating onSetRating={setMovieRating} />
    <p>This movie was rated {movieRating} stars</p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    {/* <App /> */}

    <StarRating maxRating={10}/>
    <StarRating color='red' size={50} className="test" messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]} defaultRating={3}/>
    <StarRating color='green' size={70} messages={['I', 'II', 'III', "IV", 'V']} />

    <Test />
  </React.StrictMode>
);

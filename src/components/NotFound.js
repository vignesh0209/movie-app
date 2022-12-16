import React from 'react';
import notfound from '../Assets/notfound.jpg'

const NotFound = () => {
  return (
    <div className="notfound">
      <div className='inner-notfound'>
        <img src={notfound} alt="notfound" />
      </div>
    </div>
  );
}

export default NotFound
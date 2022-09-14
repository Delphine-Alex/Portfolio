import React from 'react';

import Detectbrowsers from '../components/detectbrowsers/detectbrowsers';
import Audio from '../components/audio/audio';

const Home = () => {
  return (
    <div className='home_page'>
        <h1>Home Page</h1>
        <Detectbrowsers />
        <Audio />
     </div>
  );
}

export default Home;


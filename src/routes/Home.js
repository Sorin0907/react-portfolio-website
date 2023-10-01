import React from 'react';
import Navbar from '../components/Navbar';
import MainImage from '../components/MainImage';
import Footer from '../components/Footer';

const Home = () => {
  const ref = React.useRef();
  return (
    <div ref={ref}>
      <MainImage />
    </div>
  )
}

export default Home

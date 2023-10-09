import React from 'react';
import Introduction from '../components/Introduction';

const Home = () => {
  const ref = React.useRef();
  return (
    <div ref={ref}>
      <Introduction />
    </div>
  )
}

export default Home

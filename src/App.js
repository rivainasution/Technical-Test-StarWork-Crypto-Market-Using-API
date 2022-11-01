import React from 'react';
import { 
  Banner, 
  Featured, 
  Footer, 
  NavigationBar, 
  Price, 
  PriceMarquee, 
  Registration 
} from './component';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <PriceMarquee />
      <Price />
      <div className='bg-dark'>
        <Featured />
        <Registration />
        <Footer />
      </div>
     
      
    </div>
  );
}

export default App;

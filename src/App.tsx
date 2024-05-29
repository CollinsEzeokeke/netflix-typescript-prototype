import { useState,useEffect } from 'react';
import Header from './component/Pages/home/header'
import Batch from './component/Pages/home/batch'
import Footer from './component/Pages/home/footer'
import NetflixIntro from './component/Pages/home/netflixIntro';



const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 5000); 

  return () => clearTimeout(timer);
}, []);

function App() {
  return (

    <>

{isLoading ? (
        <NetflixIntro letter="N" />
      ) : (
        <div>
        <Header/>
        <Batch/>
        <Footer/>
        </div>
      )}
    </>
  );
}

export default App;
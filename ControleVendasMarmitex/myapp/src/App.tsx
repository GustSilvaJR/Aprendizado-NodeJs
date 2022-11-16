import React from 'react';

//Components
import { Header } from './Components/header';
import { BodyValues } from './Components/bodyValues/bodyValues';
import { Footer } from './Components/footer/footer';

//Styles
import { GlobalStyle } from './css/app';


function App() {
  return (
    <>
      <Header></Header>
      <GlobalStyle></GlobalStyle>

      <div className='mb-3 mt-5 border row'>

        <div className="d-flex justify-content-center border col-md-5">
          <p>teste</p>
        </div>

        <div className="col-md-7">
          <BodyValues></BodyValues>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

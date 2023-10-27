import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Segments/ScrolToTop';
import Loader from "./components/Segments/Loader";

const App = () => {
  
  return (
    <div className="App">
      <Components />
      <ScrolToTop/>
      {/* TODO: implement loader within react instead of Jquery
      <Loader/> */}
    </div>
  );
}

export default App;

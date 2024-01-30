import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

import VSA from './pages/VSA';
import Home from './pages/Home';
import Research from './pages/Research';
import Opportunity from './pages/Opportunity';
import Takeaway from './pages/Takeaway';
import Valentines from './pages/Valentines';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/takeaway" element={<Takeaway />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/research" element={<Research />} />
        <Route path="/vsa" element={<VSA />} />
        <Route path="/val" element={<Valentines/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;

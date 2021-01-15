import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/homes/home';
import About from './routes/abouts/about';


function App() {
  return(
    <HashRouter>
      {/* exact 경로에 관련된 다른것들을 무시해준다 */}
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </HashRouter>
  );
}

export default App;
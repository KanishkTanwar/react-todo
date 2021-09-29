import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/home.component';
import Create from './pages/create/create.component';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/create" component={Create}/>
      </BrowserRouter>
     </div>
  );
}

export default App;

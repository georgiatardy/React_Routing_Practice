import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//Import Components//
import Menu from './components/Menu';
import About from './components/About';
import Findus from './components/Findus';
import Baselayout from './components/Layout';

ReactDOM.render(
<BrowserRouter>
  <Baselayout>
    <Switch>
     <Route path="/findus" component={Findus} />
       <Route path="/menu" component={Menu} />
       <Route path="/" component={About}/>
      </Switch>
     </Baselayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

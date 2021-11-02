import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact'
import '../css/AppStyles.css'


export default function App() {
    return (
      <React.Fragment>
      <main className="content">

      <Navbar/>
      <Switch>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
       <Route path="/" component={Home}/>

      </Switch>
      </main>

      </React.Fragment>
      
    )
}

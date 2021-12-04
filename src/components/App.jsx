import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Location from './Location';
import MenuBasic from './MenuBasic';
import MenuFeatured from './MenuFeatured';
import MenuBlendedBev from './MenuBlendedBev';
import '../css/app.css'
import Story from './Story';
import Footer from './Footer';



export default function App() {
    return (
      <React.Fragment>
      

      
      <Switch>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/menu-basic" component={MenuBasic}></Route>
        <Route path="/menu-featured" component={MenuFeatured}></Route>
        <Route path="/menu-blended" component={MenuBlendedBev}></Route>
        <Route path="/story" component={Story}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/location" component={Location}/>
       <Route path="/" exact component={Home}/>

      </Switch>
      <Footer/>

      </React.Fragment>
      
    )
}

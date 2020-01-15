import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import JumbotronHeader from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Form_contact/Form_contact';
import Error from './components/Error/Error';
import Menus from './components/Menus/Menus';
import Gallery from './components/Gallery/Gallery';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Chatbot from './components/Chatbot/Chatbot';
import { createBrowserHistory } from "history";

let history = createBrowserHistory()
console.log('APPJSpathanme:', history.location.pathname)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pathname: "Home" }
  };

  changeRouteHandler(route){
    
    var r = route;
    console.log(r)
    this.setState({
       pathname: r
    });
  }

  render() {
    return (      
       <BrowserRouter>
          <NavigationBar changeRoute={this.changeRouteHandler.bind(this)} />
          <JumbotronHeader pathname={this.state.pathname} /> 
            <Switch>
              <Redirect from="/" to="/home" exact/>
              <Route path="/home" component={Home} exact/>
              <Route path="/Menus" component={Menus}/>
              <Route path="/Gallery" component={Gallery}/>
              <Route path="/About" component={About}/>
              <Route path="/Contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
          <Chatbot />
          <Footer /> 
      </BrowserRouter>
    );
  }
}
 
export default App;

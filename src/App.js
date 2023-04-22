import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  pageSize=6;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
        <Switch>
        <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Home" pagesize={this.pageSize} country="in" catagory="general" /></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={this.pageSize} country="in" catagory="business" /></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={this.pageSize} country="in" catagory="entertainment" /> </Route>
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pageSize} country="in" catagory="general" /> </Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pageSize} country="in" catagory="health" /> </Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={this.pageSize} country="in" catagory="science" /> </Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={this.pageSize} country="in" catagory="sports" /> </Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={this.pageSize} country="in" catagory="technology" /> </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


import React, { Component } from 'react'
import Navbar from './com/Navbar'
import Newsfild from './com/Newsfild'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div>
                <Navbar/>
                  <Newsfild/>

      </div>
    )
  }
}




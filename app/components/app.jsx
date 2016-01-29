import React, { Component } from 'react'
import request from 'superagent'
import { Button } from 'react-bootstrap'
import { append, map } from 'ramda'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Button bsStyle="success">
          Something
        </Button>
      </div>
    ) 
  }
}

export default App
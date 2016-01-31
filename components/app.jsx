import React, { Component } from 'react'
import request from 'superagent'

import { append, map } from 'ramda'

import Game from './game.jsx!'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = { games: [] }
  }

  // componentWillMount () {
  //   request.get('http://localhost:3000/games').end((err, res) => {
  //     this.setState({
  //       games: map((game) => game, JSON.parse(res.text))
 	// 	})
  // }

  handleClick (_) {
    const newWord = this.refs.newWord.value
    this.refs.newWord.value = ''

    this.setState({
      games: append(newWord, this.state.games)
    })

    // request.post('http://localhost:3000/games')
    //   .send({ content: newWord })
    //   .end((err, res) => {
    //     this.setState({
    //       games: append(res, this.state.games)
    //     })
    //   })
  }

	render () {
  	return <div>
    	<Game games={this.state.games} />

      <input ref="newWord" type="text" placeholder="Add new word" autofocus={true} />

      <button onClick={this.handleClick.bind(this)}>Add</button>
  	</div>
	}
}

export default App
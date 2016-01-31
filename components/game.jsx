import React, { Component } from 'react'
import { addIndex, map } from 'ramda'

const mapIndexed = addIndex(map)

class Game extends Component {
  render () {
    const games = mapIndexed((game, idx) => {
      return <li key={idx}>{game}</li>
    }, this.props.games)

    return <ul>{games}</ul>
  }
}

export default Game
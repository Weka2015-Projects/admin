// import React from 'react'
// import ReactDOM from 'react-dom'

'use strict'
import $ from ('jquery')

console.log('hello (again)')

$('#admin-action').on('submit', (e) => {
  e.preventDefault()
  let gameName = $('#admin-action input[word=word]').val()
  $.post('http://localhost:3000/words', {word: gameName})
})

$.get("server/db.json", function (data) {
  for (let i = 0; i < data.words.length; i++) {
    $("p").append(data.words[i].word + "<br>")
  }
}, "json")

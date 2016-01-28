// import React from 'react'
// import ReactDOM from 'react-dom'

'use strict'

$(document).ready(function(){
  $('#admin-action').on('submit', function(e) {
  e.preventDefault()
  var gameName = $('#input').val()
  $.post('http://localhost:3000/player', {name: gameName})
  console.log(gameName)
  })
})

console.log("poohs")

// $.get("server/db.json", function (data) {
//   for (let i = 0; i < data.words.length; i++) {
//     $("p").append(data.words[i].word + "<br>")
//   }
// }, "json")

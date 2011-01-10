#!/usr/bin/env node
/*
  invert.js
  
  given two lines of interlinear linguistic annotation on stdin, like:

  Ehiwac    c-a-kәri    sәgәbehem    h-ә-k-ec    әrɨgeh=i.
  spirit:8PL   8PL-R-say   spirit:7PL   7PL-R-give-8PL   sick=REL

  return a data structure like this:

[
  {
    'word': 'Ehiwac',
    'gloss': 'spirit'
  },
  {
    'word': 'c-a-kәri',
    'gloss': '8PL-R-say'
  }
  // etc
]

*/

require('./text');

var lines = [],
    words = [],
    glosses = [], 
    stdin = process.openStdin();
    //sys = require('sys');
    
stdin.setEncoding('utf8');

stdin.on('data', function (data) {
  var lines = extractLines(data);

  //var a = tokenize(lines[0]);
  //var b = tokenize(lines[1]);
  
  var a = lines[0].split(' ');
  var b = lines[1].split(' ');

  var matrix = zip(a, b);

  for(var i=0; i<matrix.length; i++){ 
    console.log(matrix[i][0] + '\t' + matrix[i][1]); 
  }
});


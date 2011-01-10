#!/usr/bin/env node
/*
  invert.js
  
  given two lines of Oswalt-style linguistic annotation on stdin, like:


   šoq̓oʔ@1 k̓oṭó·manne·@2 kaho·n@3 li@4. 
   I@2s hear@2s a mouse@1 (or mice) moving@2 around in@4 the box@3. 

  return aligned words like:

šoq̓oʔ
mouse

k̓oṭó·manne·
moving-I-hear

kaho·n
box

li
in
   


*/

require('./text');

var lines = [],
    words = [],
    glosses = [], 
    stdin = process.openStdin();
    //sys = require('sys');
    
stdin.setEncoding('utf8');

function parseNumberedWord(word){
  var parts = word.split('@');
  return [parts[1], parts[0]];
}

function sortByAtNumber(words){
  var sorted = [];

  for(var i=0; i<words.length; i++){ 
    var word = words[i];

    if((/@/).test(word)){ 
      sorted.push( parseNumberedWord(word) )
    }
    sorted.sort()
  }
  return sorted;
}

stdin.on('data', function (data) {
  var lines = extractLines(data);

  var a = lines[0].split(' '),
      b = lines[1].split(' '),
      ;

  
  for(var i=0; i<matrix.length; i++){ 
    console.log(matrix[i][0] + '\t' + matrix[i][1]); 
  }
});




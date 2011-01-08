$(document).ready(function(){

  $('#box').autogrow();

  var chunks = [],
      gloss = {},
      text = $('#box').val(),
      lines = $.trim(text).split(/\n\n+/),
      sentence = lines.shift(),
      translation = lines.pop(),
      stanza = lines.join('\n\n');

  function parseGlosses(stanza){
    var pairs = stanza.split(/\n\n+/),
        glosses = [];

    $.each(pairs, function(i, pair){
      var parts = $.trim(pair).split(/\n/),
          word = $.trim(parts[0]),
          morph = $.trim(parts[1]);
     
      glosses.push(
        {'word': word, 'morph': morph}
      );
    }) 

    return glosses;
  }

  gloss = {
    'sentence' : sentence,
    'translation' : translation,
    'glosses' : parseGlosses(stanza)
  }
     
  if (console.log) { 
    console.log('sentence: ' + sentence);
    console.log('translation: ' + translation);
    console.log(gloss);
  }


  $('#box').keydown(function(){


  })

})

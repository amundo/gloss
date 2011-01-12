$(document).ready(function(){

  $('#box').focus();

  $('#box').autogrow();

  function renderGloss(){
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
    };

    function createUUID(){
      // http://www.ietf.org/rfc/rfc4122.txt
      var s = [];
      var hexDigits = "0123456789ABCDEF";
      for (var i = 0; i < 32; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[12] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[16] = hexDigits.substr((s[16] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    
      var uuid = s.join("");
      return uuid;
    };

    gloss = {
      'uuid' : createUUID(),
      'sentence' : sentence,
      'translation' : translation,
      'glosses' : parseGlosses(stanza)
    }
       
    return gloss;
  }


  function saveGloss(gloss){
    if(!localStorage.glossIndex){
      localStorage.glossIndex = JSON.stringify([]);
    }

    index = JSON.parse(localStorage.glossIndex);
    index.push(gloss.uuid);
    localStorage.glossIndex = JSON.stringify(index);
    localStorage['gloss_' + gloss.uuid] = JSON.stringify(gloss);
 
  }


  $('#box').keydown(function(event){
    //if ( event.which == 13 && event.shiftKey ) {
    if ( event.which == 27 ) {
      gloss = renderGloss();
      saveGloss(gloss);
      $("#gloss").html($( "#glossTemplate" ).tmpl( gloss ));
    }
  })

})

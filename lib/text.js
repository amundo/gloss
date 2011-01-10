(function(){

  trim = function(text){
    var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
    return (text || "").replace( rtrim, "" );
  };
  
  extractLines = function(text){
    return trim(text).split(/\n+/);
  };
  
  depunctuate = function(text){
    return text.replace(/[\.\?\!]/g, ' ');
  };

  tokenize = function(line){
    return trim(depunctuate(line)).toLowerCase().split(/[ ]+/);
  };
  
  zip = function(a, b){
    // like python zip
    result = [];
    for(var i=0; i<a.length;i++){
      result.push( [a[i], b[i]] );
    }
    return result;
  };
  

  if(typeof(exports) !== 'undefined' && exports !== null) {
    exports.trim = trim; 
    exports.extractLines = extractLines; 
    exports.depunctuate = depunctuate; 
    exports.zip = zip; 
  }
  
  //console.log(zip('a b c'.split(' '), '1 2 3'.split(' ')));
})()

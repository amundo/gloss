/*

var Glossbin = {

   index: 1,

   init: function(){

     if(!localStorage['glossList']){
       localStorage['glossList'] = []
     }
   }  

};

Glossbin.saveGloss = function (gloss){
    if (!window.localStorage){
        return;
    }

    if (!localStorage.getItem("gloss" + gloss.id)){
        localStorage.setItem("gloss" + gloss.id, JSON.stringify(gloss));
    }

    var index = localStorage.getItem("index::" + keyword);

    if (index){
        index = JSON.parse(index);
    } else {
        index = [];
    }

    if (!index.contains(gloss.id)){
        index.push(gloss.id);
        localStorage.setItem("index::"+keyword, JSON.stringify(index));
    } 
}

Glossbin.init();

*/

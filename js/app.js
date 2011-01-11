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

/*
var Gloss = {

  getProjectName : function(){
    return 'kashaya'
  },
  projectIndex = function(){
    if 
  },

}


var Project = {
  index = [],
  current = index[0],
  name = 'kashaya',
  save = function(){
    localStorage[this.name] = JSON.stringify(this)
  }
}


if(gloss.id){
  localStorage[gloss.id] = JSON.stringify(gloss);
} else { 
  var projectList = JSON.parse(localStorage.project)
  localStorage[project].push(gloss.id);

*/

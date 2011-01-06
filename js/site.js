$(document).ready(function(){

   function compare(){
     var Acount = $('#A').val().split(/ +/).length;
     var Bcount = $('#B').val().split(/ +/).length;
     return Acount == Bcount;
   }

   function zip(a,b){
     var zipped = [];
     for(var i=0;i<a.length;i++){
       zipped.push( [a[i], b[i]] ) ; 
     } 
     console.log(zipped);
     return zipped;
   }

   function gloss(){
     var Awords = $.trim($('#A').val()).split(/ +/);
     var Bwords = $.trim($('#B').val()).split(/ +/);
     var zipped = zip(Awords, Bwords);
   }
  
   $('#A, #B').keydown(function(ev){
     $this = $(this);
     if (ev.which ==  13){
       if(compare()){
         gloss();
       };
       $this.val($.trim($this.val()));
       return false; 
     } 
   })


})

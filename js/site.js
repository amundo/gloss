$(document).ready(function(){

   function compare(){
     var Acount = $('#A').val().split(/ +/).length;
     $('#Acount').html(Acount);
     var Bcount = $('#B').val().split(/ +/).length;
     $('#Bcount').html(Bcount);
     if(Acount == Bcount) 
       $('#status span').addClass('sameLength');
     return Acount == Bcount;
   }

   function zip(a,b){
     var zipped = [];
     for(var i=0;i<a.length;i++){
       zipped.push( [a[i], b[i]] ) ; 
     } 
     return zipped;
   }

   function makePairs(){
     var Awords = $.trim($('#A').val()).split(/ +/);
     var Bwords = $.trim($('#B').val()).split(/ +/);
     return zip(Awords, Bwords);
   }

   function assembleGlosses(pairs){
    
     var glosses = [];
     for(var i=0;i<pairs.length;i++){
       var word = pairs[i][0];
       var morph = pairs[i][1];

       glosses.push(
         {'word': word, 'morph': morph}
       );

     }
     return glosses;
   }

   compare();

   function renderGloss(gloss){
     $("#gloss").html($( "#glossTemplate" ).tmpl( gloss ));
   }

   $('#A, #B').keydown(function(ev){
     $this = $(this);
     if (ev.which ==  13){
       if(compare()){

         var pairs = makePairs();
         var glosses = assembleGlosses(pairs);

         gloss = {
           'glosses' : glosses,
           'sentence' : $('#A').val(),
           'translation' : $('#B').val()
         };

         renderGloss(gloss);
 
         $this.val($.trim($this.val()));

         return false; 
       } 
     } 
   })

})

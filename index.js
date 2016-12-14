// JavaScript File
var currPage = 0; 
setTimeout(function () {
       $('h2').css("opacity","1");
       $('h2').css("left","0");

       $('h1').css("opacity","1");
       $('h1').css("left","0");
       
       $('h11').css("opacity","1");
       $('h11').css("top","200");
}, 1000);

$('body').bind('mousewheel', function(e){


     if(e.originalEvent.deltaY > 75) {
         //scroll down
         if (currPage==0){
         $('h2').css("opacity","0");
         $('h2').css("top","-50");
         
         $('h1').css("opacity","0");
         $('h1').css("top","-50");
         
         $('h122').css("opacity","0");
         $('h122').css("top","150");
         
         $('h11').css("opacity","0");
       $('h11').css("top","150");
         
         setTimeout(function () {
         $('h132').css("opacity",".15");
         $('h132').css("top","200");
         }, 200);
         
         $('#circle1').css("width","7.5");
         $('#circle1').css("height","7.5");
         $('#circle1').css("opacity",".25");
         
         currPage++;
         
         setTimeout(function () {
         $('h4').css("opacity","1");
         $('h4').css("top","0");
         
         $('h3').css("opacity","1");
         $('h3').css("top","0");
         
         $('h31').css("opacity","1");
         $('h31').css("top","200");
         
         $('#line').css("width","47.5");
         
         $('#rectangle2').css("height","37.5");
         
         $('visit').css("opacity","1");
         
         $('#circle2').css("width","15");
         $('#circle2').css("height","15");
         $('#circle2').css("opacity","1");
         
         
         
         }, 600);
         
         }
         
          console.log("scrolldn");
           console.log(e.originalEvent);
           
         }
     
     
     if (e.originalEvent.deltaY < -75)  {
         //scroll up
          console.log("scrollup");
          
          if(currPage==1)
          {
           
             
             
             $('h4').css("opacity","0");
         $('h4').css("top","50");
         
         $('h3').css("opacity","0");
         $('h3').css("top","50");
         
         $('h31').css("opacity","0");
         $('h31').css("top","250");
         
         $('#line').css("width","0");
         
         $('#rectangle2').css("height","0");
         
         $('visit').css("opacity","0");
         
         $('#circle2').css("width","7.5");
         $('#circle2').css("height","7.5");
         $('#circle2').css("opacity",".25");
         
         $('h132').css("opacity","0");
         $('h132').css("top","250");
         
         setTimeout(function () {
         
         $('h122').css("opacity",".15");
         $('h122').css("top","200");
         }, 200);
         
            currPage--; 
           setTimeout(function () {
             $('h2').css("opacity","1");
             $('h2').css("top","0");
             
             $('h1').css("opacity","1");
             $('h1').css("top","0");
             
             $('#circle1').css("width","15");
         $('#circle1').css("height","15");
         $('#circle1').css("opacity","1");
         
         $('h11').css("opacity","1");
       $('h11').css("top","200");
           }, 600);
            
            
          }
          
          
          
     }


     //prevent page fom scrolling
     return false;
 });
// JavaScript File
var currPage = 0; 
var canScroll = true;
setTimeout(function () {
       $('h2').css("opacity","1");
       $('h2').css("left","0");

       $('h1').css("opacity","1");
       $('h1').css("left","0");
       
       $('h11').css("opacity","1");
       $('h11').css("top","200");
       
       $('h122').css("opacity",".15");
       
       $('#circle1').css("width","15");
         $('#circle1').css("height","15");
         setTimeout(function () {
         $('#circle2').css("width","8");
         $('#circle2').css("height","8");
         }, 100);
         
          setTimeout(function () {
         $('#circle3').css("width","8");
         $('#circle3').css("height","8");
          }, 200);
          
          setTimeout(function () {
         $('#circle4').css("width","8");
         $('#circle4').css("height","8");
          }, 300);
}, 1200);
console.log(currPage);
$('body').bind('mousewheel', function(e){


     if(e.originalEvent.deltaY > 75) {
         //scroll down
         
         if (currPage==0){
             if(canScroll){
             canScroll=false;
         $('h2').css("opacity","0");
         $('h2').css("top","-50");
         
         $('h1').css("opacity","0");
         $('h1').css("top","-50");
         
         $('h122').css("opacity","0");
         $('h122').css("top","150");
         
         $('h11').css("opacity","0");
       $('h11').css("top","150");
       
         $('#circle1').css("width","8");
         $('#circle1').css("height","8");
         $('#circle1').css("opacity",".3");
         
         setTimeout(function () {
         $('h132').css("opacity",".15");
         $('h132').css("top","200");
         
         $('#circle2').css("width","15");
         $('#circle2').css("height","15");
         $('#circle2').css("opacity","1");
         }, 200);
         
         
         
         currPage=1;
         
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
         
         
         
         canScroll=true;
         
         }, 600);
         console.log(currPage);
         }
         }
         
         if (currPage==1){
             if(canScroll){
              canScroll=false;
         $('h4').css("opacity","0");
         $('h4').css("top","-50");
         
         $('h3').css("opacity","0");
         $('h3').css("top","-50");
         
         $('h31').css("opacity","0");
         $('h31').css("top","150");
         
         $('#line').css("width","0");
         
         $('#rectangle2').css("height","0");
         
         $('visit').css("opacity","0");
         
         $('#circle2').css("width","8");
         $('#circle2').css("height","8");
         $('#circle2').css("opacity",".3");
         
         $('h132').css("opacity","0");
         $('h132').css("top","150");
         
         setTimeout(function () {
         $('h142').css("opacity",".15");
         $('h142').css("top","200");
         
         $('#circle3').css("width","15");
         $('#circle3').css("height","15");
         $('#circle3').css("opacity","1");
         }, 200);
         
         currPage=2;
         
         setTimeout(function () {
         $('h5').css("opacity","1");
         $('h5').css("top","0");
         
         $('h51').css("opacity","1");
         $('h51').css("top","0");
         
         $('h52').css("opacity","1");
         $('h52').css("top","200");
         
         $('#line').css("width","47.5");
         
         $('#rectangle2').css("height","37.5");
         
         $('visit2').css("opacity","1");
         
         canScroll=true;
         }, 600);
         console.log(currPage);
         }
         
          console.log("scrolldn");
          
           console.log(e.originalEvent);
           
         }
         
         if (currPage==2){
             if(canScroll){
              canScroll=false;
          $('h5').css("opacity","0");
         $('h5').css("top","-50");
         
         $('h51').css("opacity","0");
         $('h51').css("top","-50");
         
         $('h52').css("opacity","0");
         $('h52').css("top","150");
         
         $('#line').css("width","0");
         
         $('#rectangle2').css("height","0");
         
         $('visit2').css("opacity","0");
         
         $('#circle3').css("width","8");
         $('#circle3').css("height","8");
         $('#circle3').css("opacity",".3");
         
         $('h142').css("opacity","0");
         $('h142').css("top","150");
         
         setTimeout(function () {
         
         $('h152').css("opacity",".15");
         $('h152').css("top","200");
         
         $('#circle4').css("width","15");
         $('#circle4').css("height","15");
         $('#circle4').css("opacity","1");  
         }, 200);
         
         currPage=3;
         
         setTimeout(function () {
         $('h6').css("opacity","1");
         $('h6').css("top","0");
         
         $('h61').css("opacity","1");
         $('h61').css("top","0");
         
         $('h62').css("opacity","1");
         $('h62').css("top","200");
         
         $('#line').css("width","47.5");
         
         $('#rectangle2').css("height","37.5");
         
         $('visit3').css("opacity","1");
         
         canScroll=true;
         }, 600);
         console.log(currPage);
         }
         
          console.log("scrolldn");
          
           console.log(e.originalEvent);
           
         }
     
     }
     if (e.originalEvent.deltaY < -75)  {
         //scroll up
          console.log("scrollup");
          
          if(currPage==1)
          {
              if(canScroll){
           canScroll=false;
             
             
             $('h4').css("opacity","0");
         $('h4').css("top","50");
         
         $('h3').css("opacity","0");
         $('h3').css("top","50");
         
         $('h31').css("opacity","0");
         $('h31').css("top","250");
         
         $('#line').css("width","0");
         
         $('#rectangle2').css("height","0");
         
         $('visit').css("opacity","0");
         
         $('#circle2').css("width","8");
         $('#circle2').css("height","8");
         $('#circle2').css("opacity",".3");
         
         $('h132').css("opacity","0");
         $('h132').css("top","250");
         
         setTimeout(function () {
         
         $('h122').css("opacity",".15");
         $('h122').css("top","200");
         
          $('#circle1').css("width","15");
         $('#circle1').css("height","15");
         $('#circle1').css("opacity","1");
         }, 200);
         
            currPage=0; 
           setTimeout(function () {
             $('h2').css("opacity","1");
             $('h2').css("top","0");
             
             $('h1').css("opacity","1");
             $('h1').css("top","0");
         
         $('h11').css("opacity","1");
       $('h11').css("top","200");
       canScroll=true;
           }, 600);
            
            
          }
          
          
          
     }
     
     if(currPage==2)
          {
              if(canScroll){
           canScroll=false;
             
             
             $('h5').css("opacity","0");
         $('h5').css("top","50");
         
         $('h51').css("opacity","0");
         $('h51').css("top","50");
         
         $('h52').css("opacity","0");
         $('h52').css("top","250");
         
         $('#line').css("width","0");
         
         $('#rectangle2').css("height","0");
         
         $('visit2').css("opacity","0");
         
         $('#circle3').css("width","8");
         $('#circle3').css("height","8");
         $('#circle3').css("opacity",".3");
         
         $('h142').css("opacity","0");
         $('h142').css("top","250");
         
         setTimeout(function () {
         
         $('h132').css("opacity",".15");
         $('h132').css("top","200");
         
         $('#circle2').css("width","15");
         $('#circle2').css("height","15");
         $('#circle2').css("opacity","1");  
         }, 200);
         
            currPage=1; 
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
         
         canScroll=true;
           }, 600);
            
            
          }
          
          
          
     }
     
     if(currPage==3)
          {
              if(canScroll){
           canScroll=false;
             
             
             $('h6').css("opacity","0");
         $('h6').css("top","50");
         
         $('h61').css("opacity","0");
         $('h61').css("top","50");
         
         $('h62').css("opacity","0");
         $('h62').css("top","250");
         
         $('#line').css("width","0");
         
         $('#rectangle2').css("height","0");
         
         $('visit3').css("opacity","0");
         
         $('#circle4').css("width","8");
         $('#circle4').css("height","8");
         $('#circle4').css("opacity",".3");
         
         $('h152').css("opacity","0");
         $('h152').css("top","250");
         
         setTimeout(function () {
         
         $('h142').css("opacity",".15");
         $('h142').css("top","200");
         
         $('#circle3').css("width","15");
         $('#circle3').css("height","15");
         $('#circle3').css("opacity","1");  
         }, 200);
         
            currPage=2; 
           setTimeout(function () {
             $('h5').css("opacity","1");
         $('h5').css("top","0");
         
         $('h51').css("opacity","1");
         $('h51').css("top","0");
         
         $('h52').css("opacity","1");
         $('h52').css("top","200");
         
         $('#line').css("width","47.5");
         
         $('#rectangle2').css("height","37.5");
         
         $('visit2').css("opacity","1");
         
         canScroll=true;
           }, 600);
            
            
          }
          
          
          
     }

}
     //prevent page fom scrolling
     console.log(canScroll);
     console.log(currPage)
 });
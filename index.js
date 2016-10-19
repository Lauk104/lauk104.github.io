// JavaScript File
$('#elem').bind('mousewheel', function(e){
     if(e.originalEvent.wheelDelta < 0) {
         //scroll down
          alert("scrolldn");
     }else {
         //scroll up
          alert("scrollup");
     }

     //prevent page fom scrolling
     return false;
 });
var numbers = ["01","02","03","04","05","06","07","08","09","10","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var actualNumbers = ["01","02","03","04","05","06","07","08","09","10"];
var gotoActualNumbers = ["01","02","03","04","05","06","07","08","09","10"];

var box1S = false;
var box2S = false;
var box3S = false;

var arrived = false;

var test = false;

var startFloor = "0" + Math.floor((Math.random() * 10)+1);
var roll = gotoActualNumbers.splice(startFloor-1, 1);
var gotoFloor = gotoActualNumbers[Math.floor(Math.random()*gotoActualNumbers.length)];
console.log(gotoFloor);
console.log(roll);

$('h2').html("[" + startFloor + "]");
$('h4').html("[" + gotoFloor + "]");

setTimeout(function () {
	$('h1').css("opacity","1");
    $('h1').css("left","1400px");

    $('h2').css("opacity","1");
    $('h2').css("left","1490px");

    $('h3').css("opacity","1");
    $('h3').css("top","0px");

    $('h4').css("opacity","1");
    $('h4').css("top","9px");
	}, 500);


window.setInterval(function(){
  /// call your function here
  if (box1S)
  {
  	$('.box1text').html("[" + numbers[Math.floor(Math.random()*numbers.length)] + "]");
  }

  if (box2S)
  {
  	$('.box2text').html("[" +numbers[Math.floor(Math.random()*numbers.length)]+ "]");
  }

  if (box3S)
  {
  	$('.box3text').html("[" +numbers[Math.floor(Math.random()*numbers.length)]+ "]");
  }

}, 69);

function start() {
        if (!box1S && !box2S && !box3S && !arrived) {
        box1S = true;
        box2S = true;
        box3S = true;

        $('.box1text').css("opacity","0.3");
        $('.box2text').css("opacity","0.3");
        $('.box3text').css("opacity","0.3");

        setTimeout(function () {
        	box1S = false;
        	var num1 = actualNumbers[Math.floor(Math.random()*actualNumbers.length)];
        	$('.box1text').html("[" + num1 + "]");
        	$('.box1text').css("opacity","1");
        	console.log ("first" + num1);
        	if (num1 == startFloor || test )
        	{
        		$('.elevator1highlight').css("width","89px");
        		$('.callLine').css("width","100px");
        		arrived = true;
        		setTimeout(function () {
        			$('.elevator1anim').css("height","340px");
        			setTimeout(function () {
        			$('.elevator1anim').css("width","240px");
        			$('.elevator1anim').css("margin-left","-120px");
        				setTimeout(function () {
        					$('.elevator1circle').css("width","80px");
        					$('.elevator1circle').css("height","80px");
        					$('.elevator1circle').css("margin-left","-40px");
        					$('.elevator1circle').css("margin-top","-40px");
        					$('.elevator1circle').css("opacity","1");
        					$('.elevator1circle').css("-webkit-transition-duration","4s");
        				}, 1000);
        		}, 1000);
        		}, 2000);
        		
        	}
   		}, 2000);

   		setTimeout(function () {
        	box2S = false;
        	var num2 = actualNumbers[Math.floor(Math.random()*actualNumbers.length)];
        	$('.box2text').html("[" + num2+ "]");
        	$('.box2text').css("opacity","1");
        	console.log ("second" + num2);
        	if (num2 == startFloor || test)
        	{
        		$('.elevator2highlight').css("width","89px");
        		$('.callLine').css("width","100px");
        		arrived = true;
        		setTimeout(function () {
        			$('.elevator2anim').css("height","340px");
        			setTimeout(function () {
        			$('.elevator2anim').css("width","240px");
        			$('.elevator2anim').css("margin-left","-120px");
        				setTimeout(function () {
        					$('.elevator2circle').css("width","80px");
        					$('.elevator2circle').css("height","80px");
        					$('.elevator2circle').css("margin-left","-40px");
        					$('.elevator2circle').css("margin-top","-40px");
        					$('.elevator2circle').css("opacity","1");
        					$('.elevator2circle').css("-webkit-transition-duration","4s");
        				}, 1000);
        		}, 1000);
        		}, 2000);
        	}
   		}, 3000);

   		setTimeout(function () {
        	box3S = false;
        	var num3 = actualNumbers[Math.floor(Math.random()*actualNumbers.length)];
        	$('.box3text').html("[" + num3 + "]");
        	$('.box3text').css("opacity","1");
        	console.log ("third" + num3);
        	if (num3 == startFloor || test)
        	{
        		$('.elevator3highlight').css("width","89px");
        		$('.callLine').css("width","100px");
        		arrived = true;
        		setTimeout(function () {
        			$('.elevator3anim').css("height","340px");
        			setTimeout(function () {
        			$('.elevator3anim').css("width","240px");
        			$('.elevator3anim').css("margin-left","-120px");
        				setTimeout(function () {
        					$('.elevator3circle').css("width","80px");
        					$('.elevator3circle').css("height","80px");
        					$('.elevator3circle').css("margin-left","-40px");
        					$('.elevator3circle').css("margin-top","-40px");
        					$('.elevator3circle').css("opacity","1");
        					$('.elevator3circle').css("-webkit-transition-duration","4s");
        				}, 1000);
        		}, 1000);
        		}, 2000);
        	}
   		}, 4000);
      }
}

function first() {
	if ( gotoFloor <= 3 )
		window.location.href = "end.html";
	}

function second() {
	if ( gotoFloor >= 4 && gotoFloor <= 7 )
		window.location.href = "end.html";
	}

function third() {
	if ( gotoFloor >=8 )
		window.location.href = "end.html";
	}

function WhichButton(event) {
    
    if (!test){
    if (event.button == 2)
    {
    	test = true;
    	alert("test mode")
    }
}
}
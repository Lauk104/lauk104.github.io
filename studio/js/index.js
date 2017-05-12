$("input").on('focus', function() {
  $("body").css('background', 'whitesmoke');
});

$("input").on('focusout', function() {
  $("body").css('background', 'white');
});

var name = "n";
var botname = null;
var askedName = false;

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
}

function sendMessage() {
    var msg = document.getElementById("textField").value;
    if (msg=="") {return;};
    
    console.log(msg);
    printMessage(msg, "user");
    clearInputField();
    //showIsTyping();
    var list = ["hi", "hello", "hey", "yo", "sup"];
    //document.getElementById("typing-indicator").style.display = 'table';
    setTimeout(function() {$(".typing-indicator").css('display', 'table');}, Math.floor(Math.random() * (1500 - 500)) + 500);
    console.log("check3");
    setTimeout(function() {chatBotAnswer(msg); $(".typing-indicator").css('display', 'none');
    if (!askedName) {
        if (containsAnyOnList(msg, list)){  
         setTimeout(function() {$(".typing-indicator").css('display', 'table');}, Math.floor(Math.random() * (1500 - 500)) + 500);
        setTimeout(function() {askedName = true; printMessage("What's your name?"); $(".typing-indicator").css('display', 'none');}, Math.floor(Math.random() * (3250 - 1500)) + 1500);
        }    
    }
    }, Math.floor(Math.random() * (3250 - 1500)) + 1500);
}

function clearInputField() {
    document.getElementById("textField").value = ""; document.getElementById("textField").focus();    
    //gotoBottom();
}

function printMessage(msg, user, search) {
	if (search != null) {
	var newMsg = document.createElement('a');
     
    newMsg.className = 'chatBotMessageLink';
  	//var res = msg.substring(6);
  	newMsg.appendChild(document.createTextNode(search));
  	document.getElementById("chatText").appendChild(newMsg);
  	console.log(search);
  	newMsg.setAttribute('href', 'https://www.google.com/#q=' + search);
    newMsg.setAttribute('target', '_blank');

  } else {
  	var newMsg = document.createElement('div');
     
    if (user == "user") {
        newMsg.className = 'userMessage';

    } else {
      newMsg.className = 'chatBotMessage';
    }
  
  newMsg.appendChild(document.createTextNode(msg));
  document.getElementById("chatText").appendChild(newMsg);
  }
  scroll();
  //window.scrollTo(0, 500);
}

function scroll() {
    $("#chatBox").scrollTop($("#chatText").height());
}

function chatBotAnswer(msg) {
    //document.getElementById("isTyping").style.visibility = "hidden";
    var chatBotAnswer = getRandomMessage(msg);
    //if (chatBotAnswer.includes("search")){
    var list = ["what", "who", "when", "where", "why", "how", "wt", "wut", "dont hurt me,"];
    	if ( containsAnyOnListSearch(msg, list)){
    		return;
            console.log("check2");
    	} else {
    	console.log(msg);
    	
    //} else {
    	printMessage(chatBotAnswer);
    }
    //}
    //gotoBottom();
}

function getRandomMessage(msg) {
    var greetings = ["How are you?", "Hey there!", "Hello!", "Hi!", "Greetings!"];
    var ifQuestion = ["That is an interesting question.", "I wonder that myself too every now and then.", "I don't know.", "I'd say... Wait. No, I don't know.", "I dunno.", "Hm...", "I'm not sure.", "Idk."];
    var ifSwear = ["Woah chill.", ":(", ":'(", "What did i do?", "That's not very nice...", "..."];
    var general = ["I'm not sure what you're saying.", "I didn't quite catch that.", "I'm not sure what you're talking about.", "What do you mean?"];
    var ifThank = ["My pleasure!", "No problem!", "You're welcome!", ":)", "Anytime!"];
    var ifSorry = ["It's fine.", "It's okay.", "You should be, but I forgive you.", "Don't worry about it.", "It's alright."];
    var ifSearch = ["I've looked that up for you.", "I've searched that up for you.", "Is this what you're looking for?", "Here's what you're looking for."];
    var ifMath = ["So easy.", "C'mon, gimme some challenge.", "ez pz", "Try something harder", "Psh, that was so easy", "Lmao that was ez af.", "Gimme something more challenging."]
    var ifLove = ["Baby don't hurt me,","No more."];
    var ifUserName = ["Nice to meet you,", "Pleased to meet you,", "Sup,", "It's a Pleasure to meet you,", "What's poppin',", "Wassup,", "What's crackin',", "How's it hangin',", "What's clicking,", "How you doing,", "What's new,"]
    var ifAskUserName = ["What's your name?"]
    var answerTypes = [general, greetings, ifQuestion, ifSwear, ifThank, ifSorry, ifSearch, ifMath, ifLove, ifUserName, ifAskUserName];
    
    //var selectedAnswerType = answerTypes[0];
    //isQuestion(msg);
    
    //if (msg.includes("my name is")) {
     //   selectedAnswerType = ifUserName;

    //};
    
    if (name == "n" && askedName) {
        selectedAnswerType = ifUserName;
        name == msg;
        console.log(name);
    } else {
        selectedAnswerType = general;
    }
    if (isSwear(msg)) {
        selectedAnswerType = ifSwear;
    }

    if (isGreetings(msg)) {
        selectedAnswerType = greetings;
    }

    if (isThank(msg)) {
        selectedAnswerType = ifThank;
    }

    if (isSorry(msg)) {
        selectedAnswerType = ifSorry;
    }

    if (isQuestion(msg)) {
        selectedAnswerType = answerTypes[2]; // Selects answer type 'ifQuestion';
    };

    if (isMath(msg)) {
        selectedAnswerType = ifMath; // Selects answer type 'ifQuestion';
    };

    if (isSearch(msg)) {
        selectedAnswerType = ifSearch; // Selects answer type 'ifQuestion';
    };

    if (msg.includes("hello")) {};

    if (msg.includes("what is love?")) {
    	selectedAnswerType = ifLove;
    	printMessage(ifLove[0]);
    };
    if (msg.includes("dont hurt me,")) {
    	selectedAnswerType = ifLove;
    	printMessage(ifLove[1]);
    }; 

    if (msg.includes("askusername")) {
        //selectedAnswerType = ifUserName;
        //askedName = true;
        //selectedAnswerType = ifAskUserName;
        //printMessage(ifAskUserName[0]);
        //console.log(selectedAnswerType);
    };

    
    
    if (selectedAnswerType != ifLove){
        console.log(selectedAnswerType);
    var selectedPhrase = selectedAnswerType[Math.floor(Math.random()*selectedAnswerType.length)];
    if (selectedAnswerType == ifSearch){
    	if (msg.includes("who"))
    	{
    	var srch = msg.substring(7);
    		printMessage(selectedPhrase);
    		if (msg.includes("?"))
    		{
    			var srch2 = srch.substring(0,srch.length-1);
    			printMessage(selectedPhrase, 0, srch2);
    		}
    		else {
    			printMessage(selectedPhrase, 0, srch);
    		}
    	}
    	if (msg.includes("what"))
    	{
    	var srch = msg.substring(8);
    		printMessage(selectedPhrase);
    		if (msg.includes("?"))
    		{
    			var srch2 = srch.substring(0,srch.length-1);
    			if (msg.includes("+")){
    				var srch3 = srch2.replace(/[+]/g, "%2B");
    				printMessage(selectedPhrase, 0, srch3);
    			} else {
    				printMessage(selectedPhrase, 0, srch2);
    			}
    		}
    		else {
    			if (msg.includes("+")){
    				var srch3 = srch.replace(/[+]/g, "%2B");
    				printMessage(selectedPhrase, 0, srch3);
    			} else {
    				printMessage(selectedPhrase, 0, srch);
    			}
    		}
    	}
    	if (msg.includes("when"))
    	{
    	var srch = msg.substring(7);
    		printMessage(selectedPhrase);
    		if (msg.includes("?"))
    		{
    			var srch2 = srch.substring(0,srch.length-1);
    			printMessage(selectedPhrase, 0, srch2);
    		}
    		else {
    			printMessage(selectedPhrase, 0, srch);
    		}
    	}
    	if (msg.includes("where"))
    	{
    	var srch = msg.substring(8);
    		printMessage(selectedPhrase);
    		if (msg.includes("?"))
    		{
    			var srch2 = srch.substring(0,srch.length-1);
    			printMessage(selectedPhrase, 0, srch2);
    		}
    		else {
    			printMessage(selectedPhrase, 0, srch);
    		}
    	}
    	if (msg.includes("how"))
    	{
    	var srch = msg.substring(7);
    		printMessage(selectedPhrase);
    		if (msg.includes("?"))
    		{
    			var srch2 = srch.substring(0,srch.length-1);
    			var const1 = srch2.substring(srch2.length-3,srch2.length-2);
    			var vow1 = srch2.substring(srch2.length-2,srch2.length-1);
    			var const2 = srch2.substring(srch2.length-1,srch2.length);

    			console.log(const1.search(/(?![aeiou])^[a-z]/));
    			console.log(vow1.search(/^[aeiou]$/));
    			console.log(const2.search(/(?![aeiou])^[a-v,z]/));

    			if (msg.includes("to")){
    				if ((const1.search(/(?![aeiou])^[a-z]/) > -1) && (vow1.search(/^[aeiou]$/)>-1) && (const2.search(/(?![aeiou])^[a-v,z]/)>-1)) {
    					printMessage(selectedPhrase, 0, srch2+const2+"ing");
    				} else if (const2.search(/^[e]/)>-1){
						var srche = srch2.substring(0,srch2.length-1);
						printMessage(selectedPhrase, 0, srche+"ing");
    				} else {
    					printMessage(selectedPhrase, 0, srch2+"ing");
    				}
    			} else {
    				printMessage(selectedPhrase, 0, srch2);
    			}
    		}
    		else {
    			var const1 = srch.substring(srch.length-3,srch.length-2);
    			var vow1 = srch.substring(srch.length-2,srch.length-1);
    			var const2 = srch.substring(srch.length-1,srch.length);

    			console.log(const1.search(/(?![aeiou])^[a-z]/));
    			console.log(vow1.search(/^[aeiou]$/));
    			console.log(const2.search(/(?![aeiou])^[a-v,z]/));
    			if (msg.includes("to")){
    				if ((const1.search(/(?![aeiou])^[a-z]/) > -1) && (vow1.search(/^[aeiou]$/)>-1) && (const2.search(/(?![aeiou])^[a-v,z]/)>-1)) {
    					printMessage(selectedPhrase, 0, srch+const2+"ing");
    				} 
    				else if (const2.search(/^[e]/)>-1){
						var srche = srch.substring(0,srch.length-1);
						printMessage(selectedPhrase, 0, srche+"ing");
    				} else {
    				printMessage(selectedPhrase, 0, srch+"ing");
    				}
    			} else {
    				printMessage(selectedPhrase, 0, srch);
    			}
    		}
    	}
    	if (msg.includes("why"))
    	{
    	var srch = msg.substring(7);
    		printMessage(selectedPhrase);
    		if (msg.includes("?"))
    		{
    			var srch2 = srch.substring(0,srch.length-1);
    			printMessage(selectedPhrase, 0, srch2);
    		}
    		else {
    			printMessage(selectedPhrase, 0, srch);
    		}
    	}
    	//return("search" + selectedPhrase, srch2);
    	
    } else if (selectedAnswerType == ifMath) {
    	var ans = math.eval(msg);
    	setTimeout(function() {$(".typing-indicator").css('display', 'table');}, Math.floor(Math.random() * (1500 - 500)) + 500);
        setTimeout(function() {$(".typing-indicator").css('display', 'none');printMessage(selectedPhrase);}, Math.floor(Math.random() * (3250 - 1500)) + 1500);
        return(ans);
    } else if (selectedAnswerType == ifUserName) {
        return(selectedPhrase + " " + msg);
    }else if (selectedPhrase == ifSorry[3]) {
        setTimeout(function() {$(".typing-indicator").css('display', 'table');}, Math.floor(Math.random() * (1500 - 500)) + 500);
        setTimeout(function() {$(".typing-indicator").css('display', 'none');printMessage("For now.");}, Math.floor(Math.random() * (3250 - 1500)) + 1500);
        return(selectedPhrase = ifSorry[3]);
    }else {
    	return(selectedPhrase);
    }
}
}


function isQuestion(msg) {
    var list = ["?", "what", "when"];
    return containsAnyOnList(msg, list);
}

function isGreetings(msg) {
    if (msg.includes("shit")){
        return false;
    } else {
    var list = ["hi", "hello", "hey", "sup", "howdy"];
    return containsAnyOnList(msg, list);
}
}
function isSwear(msg) {
    var list = ["fuck", "fucker", "fk", "fucking", "fking", "shit"];
    return containsAnyOnList(msg, list);   
}

function isThank(msg) {
    var list = ["thank", "thx"];
    return containsAnyOnList(msg, list);
}

function isSorry(msg) {
    var list = ["sry", "sorry"];
    return containsAnyOnList(msg, list);
}

function isMath(msg) {
    var list = ["+", "/", "*", "-", "^"];
    return containsAnyOnList(msg, list);
}

function isSearch(msg) {
    var list = ["what", "who", "when", "where", "why", "how", "wt", "wut"];
    return containsAnyOnListSearch(msg, list);
}

function containsAnyOnList(msg, listToBeComparedTo) {
    var contains = false;
    for (i = 0; i < listToBeComparedTo.length; i++) {
        if (msg.includes(listToBeComparedTo[i])) {
            contains = true;
        };
    };
    return contains;
}

function containsAnyOnListSearch(msg, listToBeComparedTo) {
    var contains = false;
    for (i = 0; i < listToBeComparedTo.length; i++) {
        if (msg.includes(listToBeComparedTo[i]) && ( msg.includes("is") || msg.includes("do") || msg.includes("are") || msg.includes("to"))) {
            contains = true;
        };
    };
    return contains;
}
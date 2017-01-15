// JOJO THE GAME

// API for facebook-chat-api
var login = require("facebook-chat-api");
// Implements a map of letters with accents to letters without accents
var prompt = require('prompt');
// Implements a map of letters with accents to letters without accents
var af = require('./accent-fold.js');
// Parse the db of jojos
var jj = require('./jojothegame_db.js')
var jojoDB = jj.db;


prompt.start();

prompt.get(['username', 'password'], function (err, result) {
if (err) { return console.error(err) }

var game = new Object();
game.onStatus = false;
game.scoreboard = new Object();

login({email: result.username, password: result.password}, function callback (err, api) {
    if(err) return console.error(err);
 	
 	// Enable listening to yourself
 	api.setOptions({selfListen: true});
 	// Enable listening to events
 	api.setOptions({listenEvents: true})

	api.getFriendsList(function(err, friendsList) {
		if(err) return console.error(err);
		allowedUsers_init = [
						"Diogo Almeida", 
						"David Nogueira", 
						"Tomás Ferreirinha", 
						"Sebastião Miranda",
						"Francisco Gaspar",
						"Bernardo Lemos Caldas"
						];

		allowedUsers = getAllowedUsersID (api, allowedUsers_init, friendsList, true);
		console.log("no of allowed users = " + allowedUsers.ID.length)
	});


    api.listen(function callback(err, event) {
    	if(event.type == "message"){
	    	if(event.body != undefined){
	    		var indexID = allowedUsers.ID.indexOf(event.senderID);
	    		if (indexID != -1){
	    			if (event.body == "jojothegame" && game.onStatus == false){
	    				api.sendMessage("Hi " + allowedUsers.name[indexID] + "! You have activated JOJO THE GAME. The main purpose of the game is to find all the jojos in this chat world. All of them are unique and have some distinctive properties. \nYou will be notified whenever you find a jojo (even if you just use it in a sentence) and a scoreboard will be kept to see who finds the most jojos. When all the jojos are found, the game will stop. \n\nFor more info type \"jojothegame help\".", 
			    			event.threadID)
	    				game.onStatus = true;
	    			} else if (game.onStatus == true) {
		    			if (event.body == "jojothegame" && game.onStatus == true) {
		    				api.sendMessage("Hi " + allowedUsers.name[indexID] + "! JOJO THE GAME is already active in this chat. \n\n For more info type \"jojothegame help\".", 
				    			event.threadID)
		    			} else if (event.body == "jojothegame help") {
		    				api.sendMessage("To have different commands be recognized please precede them by the keyword \"jojothegame\". This way, unnecessary spam is avoided. The list of commands is:\n    help - Displays all the commands\n    scoreboard - Displays the current scoreboard\n    history [name_of_jojo] - Displays the history related to that jojo\n", 
				    			event.threadID)
		    			} else if (event.body == "jojothegame scoreboard") {
		    				var numCaught = 0;
		    				var message = [];
		    				for (var k in game.scoreboard){
	    					    if (game.scoreboard.hasOwnProperty(k)) {
							        message += 'Name: ' + k + '-- Score: ' + game.scoreboard[k] + "\n";
							        numCaught += game.scoreboard[k];
							    }
		    				}
		    				api.sendMessage(message + numCaught +" jojos have been caught. " + (jojoDB.length - numCaught) + " still remaining.",
		    					event.threadID);
		    			} else if (event.body.search(/^jojothegame history/) > -1) {
		    				var jojoFound = false;
		    				for(i = 0; i < jojoDB.length; i++){
		    					if(event.body.substring("jojothegame history ".length) == jojoDB[i].name){
		    						api.sendMessage(jojoDB[i].name + ", " + jojoDB[i].description + ". " + jojoDB[i].history,
		    							event.threadID);
		    						jojoFound = true;
		    						break;
		    					}
		    				}
		    				if (jojoFound = false){
		    					api.sendMessage("Sorry this jojo is not a valid jojo.",
		    							event.threadID);
		    				}
		    			} else if (af.accent_fold(event.body).search(/jojo/i) > -1) {
		    				index_start = af.accent_fold(event.body).search(/jojo/i);
		    				for(i = 0; i < jojoDB.length; i++){
		    					if(event.body.substring(index_start, index_start+4) == jojoDB[i].name && !jojoDB[i].isCaught){
		    						api.sendMessage("Congratulations, " + allowedUsers.name[indexID] + "! You have caught " + jojoDB[i].name + ", " + jojoDB[i].description +".", 
				    					event.threadID);
		    						jojoDB[i].isCaught = true;
		    						jojoDB[i].caughtBy = allowedUsers.name[indexID];
		    						if (!game.scoreboard.hasOwnProperty(allowedUsers.name[indexID])){
		    							game.scoreboard[allowedUsers.name[indexID]] = 1;
		    						} else {
		    							game.scoreboard[allowedUsers.name[indexID]] +=1;
		    						}
		    					}
		    				}
		    			}
	    			}
		    	}
		    }
		}
    });
});
});

function getAllowedUsersID (api, allowedUsers, friendsList, includeSelf) {
	allowedUsersID = [];
	allowedUsersFullName = [];
	for (i = 0; i < friendsList.length; i++){
		for (j = 0; j < allowedUsers.length; j++){
			if (friendsList[i].fullName == allowedUsers[j]){
				allowedUsersID.push(friendsList[i].userID);
				allowedUsersFullName.push(friendsList[i].fullName);
			}
		}
	}
	if (includeSelf == true){
		allowedUsersID.push(api.getCurrentUserID());
		allowedUsersFullName.push("jojo");
	}

	return {
		ID: allowedUsersID,
		name: allowedUsersFullName
	}
};

function isInArray(arr,obj) {
    return (arr.indexOf(obj) != -1);
}






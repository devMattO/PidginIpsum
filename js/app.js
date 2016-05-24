window.onload = function(){

	var randomPidgin = ['If can, can. No can, no can. You dunno, no even…','Hey, braddah can you pass me the dakine?','Sh00ts braddah','Ho, no be lidat, braddah.','So what you like grind? We no moa da kine. No worries, brah, I grind any kine.','Ku`ulei get shmall kine cho cho lips yeah?','Ho, after pounding three plate lunches I got one huge kanak-attack!','Put ‘em away when you are pau.','Local people, dey get togeddah fo’ party, wedding, baby luau, whatevahs, dey gotta talk story, yeah? An’ how you can talk story wid’out pidgin? Cannot! Pidgin someting from da heart!'];

	function displayRandomPidgin(){
			var randomPidginPhrase = randomPidgin[Math.floor(Math.random()*randomPidgin.length)];
			var paraElement = document.getElementById('words');
			paraElement.innerHTML = randomPidginPhrase;
			var paraHere = document.getElementById('paraHere');
			paraHere.appendChild(paraElement);
	}
	
	function button(){
		var randomPidginButton = document.getElementById('createMoPidgin');
		randomPidginButton.addEventListener('click',displayRandomPidgin);
		paraHere.appendChild(randomPidginButton);
	} //closes button function

	button();


};
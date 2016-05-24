window.onload = function(){

	var randomPidgin = ['If can, can. No can, no can. You dunno, no even…','Hey, braddah can you pass me the dakine?','Sh00ts braddah','Ho, no be lidat, braddah.','So what you like grind? We no moa da kine. No worries, brah, I grind any kine.','Ku`ulei get shmall kine cho cho lips yeah?','Ho, after pound three plate lunches I had a huge kanak-attack'];

	function displayRandomPidgin(){
		for (var i = 0; i < 1; i++) {
			var randomPidginPhrase = randomPidgin[Math.floor(Math.random()*randomPidgin.length)];
			paraElement = document.createElement('p');
			paraElement.id = 'words';
			paraElement.innerHTML = randomPidginPhrase;
			var paraHere = document.getElementById('paraHere');
			paraHere.appendChild(paraElement);

			console.log(randomPidginPhrase);
		}
	}

	console.log(displayRandomPidgin());

	







};
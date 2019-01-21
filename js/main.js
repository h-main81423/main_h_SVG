(() => {
 	//self-invoking anonymous function (or Lamda)
 	
 		//1-1 connection, selects one element
		var badge = document.querySelector('#badge');

		//this is a 1-many connection, gets a collection of elements
		var allTheBadges = document.querySelectorAll('.isabadge');

		//what do we want it to do
		function logMyID(argument) {
			// log some stuff to dev tools
			console.log(this.id);
			debugger;
		}

		//how do we want to do that?
		//1-1 event handling
		badge.addEventListener("click", logMyID);

		allTheBadges.forEach(currentbadge => currentbadge.
			addEventListener("click", logMyID));

 	//var => means create a variable
 	//whatever comes after the equal sign is what the variable
 	//
 	//document is always the webpage
 	//after the dot is always a method or a property

})();

(() => {
 	
		var iconOne = document.querySelector('#icon1');

		
		var allTheIcons = document.querySelectorAll('.iconSet');


		function logIcon(argument) {
			console.log(this.id);
			debugger;
		}

	

		iconOne.addEventListener("click", logIcon);

		allTheIcons.forEach(currentIcon => currentIcon.addEventListener("click", logIcon));


})();
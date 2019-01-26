(() => {
 		
		let iconOne = document.querySelector("#iconOne");

		function logThisiconOne() {
			console.log(this.id);
		}

		iconOne.addEventListener("click", logThisIconOne);
})();
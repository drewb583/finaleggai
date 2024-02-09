// This listens for when the DOM (page) content gets loaded, and then calls for a random image
document.addEventListener('DOMContentLoaded', (event) => {
	let imgEl = document.getElementById("image");
	const srcArray = ["images/eggman1.gif", "images/eggman2.gif", "images/eggman3.gif"];
	
	// Refreshes page when image clicked
	imgEl.addEventListener('click', () => {
		window.location.reload();
	});
	
	function randomImage() {
		const randomIndex = Math.floor(Math.random()*srcArray.length);

		if (localStorage.getItem('currentIndex') !== String(randomIndex)) {
		// Checks if current index in local storage is NOT equal to new randm value (as string)...
			
			imgEl.src = srcArray[randomIndex];
			//...if so, set random value as new image src...

			localStorage.setItem('currentIndex', randomIndex);
			//...and save as current index value in local storage

		} else {
		  // random value and current index value match...

			randomImage();
			// ... so call random image function again

		}
	}

	// Now that everything is defined, call for a random image
	randomImage();
});
(function() {
	var nav__trigger = document.querySelector(".nav--trigger");
	var nav = document.querySelector(".nav__inner");
	var body = document.querySelector("body");

	function open__menu() {
		nav__trigger.classList.toggle("open");
		nav.classList.toggle("open");
		body.classList.toggle("open");
	}

	nav__trigger.addEventListener("click", open__menu)
})();
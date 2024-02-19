
// select box menu ----------------------------------------------
const selectBox = document.querySelectorAll(".select-box");
selectBox.forEach(selectBox => {
	const select = selectBox.querySelector(".select");
	const caret = selectBox.querySelector(".caret");
	const menu = selectBox.querySelector(".menu");
	const options = selectBox.querySelectorAll(".menu li");
	const selected = selectBox.querySelector(".selected");

	select.addEventListener("click", () => {
		select.classList.toggle("select-clicked");
		caret.classList.toggle("caret-rotate");
		menu.classList.toggle("menu-open");
	});
	options.forEach(option => { 
		option.addEventListener("click", () => {
			selected.innerText = option.innerText;
			select.classList.remove("select-clicked");
			caret.classList.remove("caret-rotate");
			menu.classList.remove("menu-open");
			options.forEach(option => {
				option.classList.remove("active");
			});
			option.classList.add("active");
		});
	});
});
// select box menu ----------------------------------------------
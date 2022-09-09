export function themeToggle(){
    document.querySelector("#switch").oninput = () => {
	if (document.querySelector("#switch").checked == true) {
		document.querySelector("html").dataset.theme = 'dark'
	} else {
        document.querySelector("html").dataset.theme = 'light'
	}
};
}

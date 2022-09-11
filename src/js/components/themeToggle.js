const html = document.querySelector("html");
const siwtchToggle = document.querySelector("#switch");
let theme = window.localStorage.getItem("data-theme");

export function themeToggle() {
  if (theme) {
    html.dataset.theme = theme;
    siwtchToggle.checked = theme === "dark" ? true : false;
  } else {
    theme = html.dataset.theme;
    changeThemeInLocalStorage(theme);
  }

  siwtchToggle.oninput = () => {
    if (siwtchToggle.checked == true) {
      html.dataset.theme = "dark";
	  changeThemeInLocalStorage('dark');
    } else {
      html.dataset.theme = "light";
	  changeThemeInLocalStorage('light');
    }
  };
}

function changeThemeInLocalStorage(theme) {
  window.localStorage.setItem("data-theme", theme);
}

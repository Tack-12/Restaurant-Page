import "./style.css";
import { Pages } from "./pages.js";

function loadPage() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", checkPage)
    });

    Pages.homepage();

}

function checkPage(e) {
    const inner_html = e.target.innerHTML;
    console.log(inner_html);

    if (inner_html == "HOME") {
        removePrevious();
        Pages.homepage();

    }
    else if (inner_html == "MENU") {
        removePrevious();
        Pages.menu();
    }
    else if (inner_html == "ABOUT US"){
        removePrevious();
        Pages.aboutUs();
    }
}


function removePrevious() {
    const container = document.querySelector("#content");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

loadPage();
import homepage from "./views/home";
import aboutpage from "./views/about";
import navbar from "./navbar";

navbar();

const doc = document.querySelector("#app");

const homebutton = document.querySelector("#homebutton");
homebutton.addEventListener("click", (e) => {
    doc.innerHTML = "";
    homepage();
});

const aboutbutton = document.querySelector("#aboutbutton");
aboutbutton.addEventListener("click", (e) => {
    doc.innerHTML = "";
    aboutpage();
});

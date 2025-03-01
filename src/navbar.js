const navbar = () => {
    const doc = document.querySelector("header");
    const div = document.createElement("nav");

    const but1 = document.createElement("button");
    but1.innerText = "Home";
    but1.classList.add("navbutton");
    but1.id = "homebutton";
    div.appendChild(but1);

    const but2 = document.createElement("button");
    but2.innerText = "About";
    but2.classList.add("navbutton");
    but2.id = "aboutbutton";
    div.appendChild(but2);

    doc.appendChild(div);
};

export default navbar;

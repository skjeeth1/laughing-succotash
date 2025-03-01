const aboutpage = () => {
    const doc = document.querySelector("#app");
    const div = document.createElement("div");

    const details = document.createElement("div");
    details.classList.add("details");
    div.appendChild(details);

    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = "About Kisha's Kitchen";
    details.appendChild(h1);

    const p1 = document.createElement("p");
    p1.classList.add("description");
    p1.innerText =
        "Kisha's Kitchen is a renowned restaurant where culinary dreams come true. Founded by Kisha, a passionate chef with a love for creating delicious and innovative dishes, our restaurant has become a beloved destination for food enthusiasts.";
    details.appendChild(p1);

    const p2 = document.createElement("p");
    p2.classList.add("description");
    p2.innerText =
        "At Kisha's Kitchen, we believe in using the freshest ingredients to craft our dishes. Our menu features a variety of options, from classic comfort foods to modern culinary creations, all prepared with care and attention to detail.";
    details.appendChild(p2);

    const p3 = document.createElement("p");
    p3.classList.add("description");
    p3.innerText =
        "Our cozy dining area is perfect for family gatherings, romantic dinners, and special occasions. We take pride in providing exceptional service and a warm, inviting atmosphere for our guests.";
    details.appendChild(p3);

    const p4 = document.createElement("p");
    p4.classList.add("description");
    p4.innerText =
        "Join us at Kisha's Kitchen and explore the world of flavors. Whether you're a regular or a first-time visitor, we look forward to serving you and making your dining experience memorable.";
    details.appendChild(p4);

    const location = document.createElement("div");
    location.classList.add("details");
    div.appendChild(location);

    const ti = document.createElement("h1");
    ti.innerText = "Location";
    location.appendChild(ti);

    const loc = document.createElement("p");
    loc.innerText = ": [Insert Address Here]";
    location.appendChild(loc);

    const contact = document.createElement("div");
    contact.classList.add("details");

    const head = document.createElement("h1");
    head.innerText = "Contact us";
    contact.appendChild(head);

    const add = document.createElement("div");
    contact.appendChild(add);
    add.innerHTML = `
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@kishaskitchen.com</p>
    `;
    div.appendChild(contact);

    doc.appendChild(div);
};

export default aboutpage;

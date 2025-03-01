const homepage = () => {
    const doc = document.querySelector("#app");
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = "WELCOME TO KISHA's KITCHEN";
    div.appendChild(h1);

    const p = document.createElement("p");
    p.classList.add("description");
    p.innerText =
        "Kisha's Kitchen is a renowned restaurant where culinary dreams \
    come true. We offer a variety of delicious dishes, exceptional service, and a \
    warm, inviting atmosphere. Join us and explore the world of flavors at Kisha's \
    Kitchen!";
    div.appendChild(p);

    const album = document.createElement("div");
    album.classList.add("album");
    div.appendChild(album);

    const photoTexts = [
        "Our cozy dining area, perfect for family gatherings and romantic dinners.",
        "A glimpse of our open kitchen where culinary magic happens.",
        "Our beautifully plated signature dish, a feast for both the eyes and the palate.",
    ];

    for (let i = 0; i < 3; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const pic = document.createElement("div");
        pic.classList.add("pic");

        const text = document.createElement("div");
        text.classList.add("text");
        text.innerText = photoTexts[i];

        card.appendChild(pic);
        card.appendChild(text);

        album.appendChild(card);
    }

    doc.appendChild(div);
};

export default homepage;

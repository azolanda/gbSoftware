"use strict";

const routes = {
    "/" : "/pages/home.html",
    "/index.html" : "/pages/home.html",
    "/#/settings" : "/pages/settings.html",
    "/#/about" : "/pages/about.html",
    "/#/products" : "/pages/products.html",
    "/#/contacts" : "/pages/contacts.html",
    "/#/home" : "/pages/home.html",
    404 : "/pages/404.html", 
}

const route = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const path = window.location.pathname + window.location.hash;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((page) => page.text());
    document.getElementById("main-page").innerHTML = html;
    // console.log("handle");
    // console.log(route);
    if(route == "/pages/products.html") {
        const dataArticlesField = document.querySelector(".product-cards");

        getRecipes(dataArticlesField);
    }
};

window.onpopstate = handleLocation;

handleLocation();

// POST
const inputSearch = document.querySelector(".form-search");
// console.log(inputSearch);
const searchButton = document.querySelector(".btn-search");
searchButton.addEventListener('click', postSearch);

async function postSearch(e) {
    e.preventDefault();

    if(inputSearch == '') {
        return;
    }

    const res = await fetch(baseUrl,
        {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                    searchValue: inputSearch.value
                }
            )
        });

    console.log(baseUrl);
}

const setYear = () => {
    const year = new Date().getFullYear ();
    document.querySelector(".data-year").innerHTML = year;
}

setYear();
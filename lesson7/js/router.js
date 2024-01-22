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

        getData(dataArticlesField);
    }
};

window.onpopstate = handleLocation;

handleLocation();

// ====================FOR SEARCH=========================

// =======================================================

const setYear = () => {
    const year = new Date().getFullYear ();
    document.querySelector(".data-year").innerHTML = year;
}

setYear();
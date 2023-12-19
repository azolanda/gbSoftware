"use strict";

const routes = {
    "/lesson7/" : "/lesson7/pages/home.html",
    "/lesson7/settings" : "/lesson7/pages/settings.html",
    "/lesson7/about" : "/lesson7/pages/about.html",
    "/lesson7/products" : "/lesson7/pages/products.html",
    "/lesson7/contacts" : "/lesson7/pages/contacts.html",
    404 : "/lesson7/pages/404.html", 
}

const route = (event) => {
    // event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((page) => page.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;

// window.route = route;
handleLocation();

const setYear = () => {
    const year = new Date().getFullYear ();
    document.querySelector(".data-year").innerHTML = year;
}

setYear();
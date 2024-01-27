"use strict";

// POST
const inputSearch = document.querySelector(".form-search");
// console.log(inputSearch);
const searchButton = document.querySelector(".btn-search");
searchButton.addEventListener('click', postSearch);

async function postSearch(e) {
    e.preventDefault();

    if(inputSearch.value == '') {
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
            })
        });  

    const elementForPushSearchResults = document.querySelector("#main-box");

    if(document.querySelector(".product-cards") != null) {
        elementForPushSearchResults.querySelector("h1").innerHTML = "Результаты поиска";
        getSearchData(document.querySelector(".product-cards"));
    } else {
        elementForPushSearchResults.innerHTML = '<h1 class="mt-5 mb-4">Результаты поиска</h1><div class = "cards product-cards row justify-content-center"></div>';
        getSearchData(document.querySelector(".product-cards"));
    }
}

async function getSearchData(dataArticlesField) {    
    const res = await fetch(baseUrl + 'search/natalie?key=search', {
        method: 'GET'
    })
    console.log(res);

    const searchData = await res.json();
    dataArticlesField.innerHTML = "";
    inputSearch.value = "";
    renderData(searchData , dataArticlesField);
}
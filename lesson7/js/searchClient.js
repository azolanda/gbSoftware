"use strict";

// POST
const inputSearch = document.querySelector(".form-search");
const searchButton = document.querySelector(".btn-search");

searchButton.addEventListener('click', async (event) => {
    new Promise(async (res, rej) => {
        postSearch(event);

        const elementForPushSearchResults = document.querySelector("#main-box");

        if (document.querySelector(".product-cards") != null) {
            elementForPushSearchResults.querySelector("h1").innerHTML = "Результаты поиска";

        } else {
            elementForPushSearchResults.innerHTML = '<h1 class="mt-5 mb-4">Результаты поиска</h1><div class = "cards product-cards row justify-content-center"></div>';
        }
        res();
    }).then(() => getSearchData(document.querySelector(".product-cards")))
});

async function postSearch(e) {
    e.preventDefault();

    if (inputSearch.value == '') {
        return;
    }

    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            searchValue: inputSearch.value
        })
    });
}

async function getSearchData(dataArticlesField) {
    let searchData = null;

    await fetch(baseUrl + 'search/natalie?key=search', {
        method: 'GET'
    }).then(result => {
        return result.json()
    }).then((resultData) => {
        searchData = resultData;
    });

    dataArticlesField.innerHTML = "";

    setTimeout(() => {
        inputSearch.value = "";
    }, 200);

    renderData(searchData, dataArticlesField);
}
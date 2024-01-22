"use strict";

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
    getSearchData(document.querySelector(".product-cards"));
}

async function getSearchData(dataArticlesField) {    
    const res = await fetch(baseUrl + 'search/natalie?key=search', {
        method: 'GET'
    })
    console.log(res);

    const searchData = await res.json();
    dataArticlesField.innerHTML = "";
    renderData(searchData , dataArticlesField);
}
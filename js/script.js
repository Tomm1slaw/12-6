'use strict';

// global variable

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

// when click button then start function

document.getElementById('search').addEventListener('click', searchCountries);

// function to search countries

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

// function to show result of search countries

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
}
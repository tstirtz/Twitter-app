'use strict'

const twitterUrl = 'https://api.twitter.com/1.1/search/tweets.json';

function handleSearchButton(){
$('.js-search-button').on('click', function(event){
    event.preventDefault();
    let searchTerm = $(this).prev().val();
    let encodedSearch = encodeURI(searchTerm);
    requestToTwitter(encodedSearch);
});
}




function requestToTwitter(query){
    const settings = {
        q: query,
        lang: "en",
        dataType: 'json',
        always: 'request finished'
    }

    $.get(twitterUrl, settings, renderRequestResults);
}




function renderRequestResults(results){
    console.log(results);
}




$(handleSearchButton);

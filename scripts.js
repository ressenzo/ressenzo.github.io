const params = new URLSearchParams(window.location.search);
const language = params.get('l');

const portugueseContent = {
    country: "Brasil"
};

const englishContent = {
    country: "Brazil"
};

var selectedContent = {};
if (language === "en") {
    selectedContent = englishContent;
} else {
    selectedContent = portugueseContent;
}

const countryTag = document.querySelector("#country");
countryTag.innerHTML = selectedContent.country;

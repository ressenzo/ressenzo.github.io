const params = new URLSearchParams(window.location.search);
const language = params.get('l');

if (language === "en") {
    hiddeBlock('#l-pt');
} else {
    hiddeBlock('#l-en');
}

function hiddeBlock(name) {
    var languageBlock = document.querySelector(name);
    languageBlock.style.display = 'none';
}

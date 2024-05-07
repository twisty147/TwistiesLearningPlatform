// Function to retrieve the value of a URL parameter by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// Get the title parameter from the URL
var title = getParameterByName('title');

// Get the quiz title element
var quizTitleElement = document.querySelector('.quiz-title');

// Set the retrieved title as the text content of the quiz title element
if (title) {
    quizTitleElement.textContent = title + ' Quiz';
}
function removeLinksFromText(inputText) {
    const withoutLinks = inputText.replace(/(https?:\/\/[^\s]+)/g, '');
    return withoutLinks.replace(/\n/g, '<br>');
}

document.getElementById('removeLinksBtn').addEventListener('click', function () {
    const textInput = document.getElementById('textInput').value;
    const withoutLinksText = removeLinksFromText(textInput);
    document.getElementById('output').innerHTML = withoutLinksText;
});

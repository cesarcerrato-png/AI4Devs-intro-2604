const textInput = document.getElementById('textInput');
const reverseButton = document.getElementById('reverseButton');
const result = document.getElementById('result');

function reverseString(value) {
    return Array.from(value).reverse().join('');
}

reverseButton.addEventListener('click', () => {
    reverseButton.classList.add('pressed');
    const reversed = reverseString(textInput.value);
    result.textContent = reversed || 'Reversed text appears here.';

    setTimeout(() => {
        reverseButton.classList.remove('pressed');
    }, 150);
});

textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        reverseButton.click();
    }
});

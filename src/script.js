const button = document.querySelector('#check-btn');
const input = document.querySelector('#text-input');


const regex = (/[^a-zA-Z0-9]/g, '')

function isValid(e) {
    const para = document.querySelector('#result');
    if (input.value === '') {
        alert('Please enter a value');
        return;
    } else {
        const inputValue = input.value.toLowerCase();

        const reverseValue = inputValue.toLowerCase().replace(regex, '').split('').reverse().join('');
        if (inputValue === reverseValue) {
            document.getElementById('result').innerHTML = `Yes, ${inputValue} is a palindrome`;
        } else {
            para.innerHTML = `No, ${inputValue} is not a palindrome`;
        }
        console.log(reverseValue);
    }

} button.addEventListener('click', isValid);
input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        isValid();
    }
});
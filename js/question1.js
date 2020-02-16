const firstName = document.querySelector('#firstName');
const firstNameError = document.querySelector('.error');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    firstName.value.length < 2 ? firstNameError.style.display = 'block' : firstNameError.style.display = 'none';
});




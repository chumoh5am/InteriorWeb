const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit'), (e) => {
    const errors = [];
    if (password.ariaValueMax.length < 4){
        errors.push('Password must be at least 4 characters long');
    }
    if(email.value.trim() == ''){
        errors.push('Please enter your email');
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join('\n');
    }
}
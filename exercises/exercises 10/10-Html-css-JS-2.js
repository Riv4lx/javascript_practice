const allButtons = document.querySelectorAll('.gaming-button');
        
function isToggleBtn(button) {

    if (button.classList.contains('is-toggled')) {
        button.classList.remove('is-toggled')
    } else {

        allButtons.forEach((btn) => {
        btn.classList.remove('is-toggled');
    });

    button.classList.add('is-toggled');
    }
    
    /* if (button.classList.contains('is-toggled') === true) {
        button.classList.remove('is-toggled');
    }
else {
    button.classList.add('is-toggled')
} */
}
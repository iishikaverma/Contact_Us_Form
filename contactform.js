const submit_button = document.getElementById('submit');
submit_button.addEventListener('click', OnSubmit);

function OnSubmit(e){
    e.preventDefault();
    window.alert('MESSAGE SENT! Thanks for completing the form. We will be in touch soon!');
}

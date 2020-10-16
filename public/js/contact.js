// Clear inputs after sending a message

function clearInputs(name, lastName, message) {
    name = '';
    lastName = '';
    message = '';
}

// Unblock button and remove animation class

function clearBtnAndAnimation(submitBtn, messageInfoBox) {

    setTimeout(() => {
        submitBtn.style.pointerEvents = 'auto';
        messageInfoBox.classList.remove('contact__message-info-box--active');
    }, 3000);

}

// Send message to Database

function sendMessage(event) {
    event.preventDefault();

    const messageInfoBox = document.querySelector('.contact__message-info-box');
    const messageInfo = document.querySelector('.contact__message-info');
    const submitBtn = document.querySelector('.form__button');

    const name = document.querySelector('.form__input--name').value;
    const lastName = document.querySelector('.form__input--last-name').value;
    const message = document.querySelector('.form__input--textarea').value;

    submitBtn.style.pointerEvents = 'none';

    let body = {};

    body.name = name;
    body.lastName = lastName;
    body.message = message;

    if (name && lastName && message != '') {

        fetch('/api/messages/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {

                    clearInputs(name, lastName, message);

                    messageInfoBox.classList.add('contact__message-info-box--active');
                    messageInfo.innerHTML = 'Wiadomość została wysłana. Odpowiem tak szybko jak mogę.'

                    clearBtnAndAnimation(submitBtn, messageInfoBox);
                }
            })

    } else {

        messageInfoBox.classList.add('contact__message-info-box--active');
        messageInfo.innerHTML = 'Uzupełnij wszystkie pola.';

        clearBtnAndAnimation(submitBtn, messageInfoBox);
    }
}
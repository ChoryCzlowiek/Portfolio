// Clear inputs after sending a message

function clearInputs(name, lastName, message) {
    name = '';
    lastName = '';
    message = '';
}

// Send message to Database

function sendMessage(event) {
    event.preventDefault();

    const name = document.querySelector('.form__input--name').value;
    const lastName = document.querySelector('.form__input--last-name').value;
    const message = document.querySelector('.form__input--textarea').value;

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
                    alert('Wiadomość została wysłana. Odpowiem tak szybko jak mogę.')
                }
            })

    } else alert('Uzupełnij wszystkie pola!')
}
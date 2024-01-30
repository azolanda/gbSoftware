"use strict"

function contactsForm() {
    let form = document.getElementById('contact__form');
    let formRequired = document.querySelectorAll('._required');

    for (let i = 0; i < formRequired.length; i++) {
        let input = formRequired[i];
        input.addEventListener('blur', function () {
            formRemoveError(input);
        })
    }

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            // отправка формы
            form.classList.add('_sending');

            const response = await fetch(baseUrl + 'sendmail', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();

                setTimeout(() => {
                    console.log(result.message);
                    if (result.message == "received") {
                        // let successMess = document.getElementById('contact__form__message');
                        // successMess.classList.remove('no-visible');
                        form.classList.remove('_sending');
                        form.reset();
                        alert("Ваше сообщение успешно отправлено");
                        // form.classList.add('no-visible');
                    } else {
                        alert("Ошибка отправки сообщения:" + result.message);
                        form.classList.remove('_sending');
                    }
                }, 500);
            } else {
                alert("Error. Message was not send.");
                form.classList.remove('_sending');
            }
        } else alert("Please, complete required fields for send!");
    }

    function formValidate(form) {
        let error = 0;

        let formRequired = document.querySelectorAll('._required');

        for (let i = 0; i < formRequired.length; i++) {
            let input = formRequired[i];

            formRemoveError(input);

            if (input.value === '' && getComputedStyle(input).display != 'none') {
                formAddError(input);
                error++;
            } else if (input.classList.contains('_name')) {
                if (nameTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_company') || input.classList.contains('_comments')) {
                if (companyTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                }
            }
        }

        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function nameTest(input) {
        return !/^[a-zA-Zа-яА-я- \-]*$/i.test(input.value);
    }

    function emailTest(input) {
        return !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(input.value);
    }

    function companyTest(input) {
        return !/^[0-9a-zA-Zа-яА-я- \-\.\+\"\_\@\,\#\!\?\:\;\(\)\№\&\/]*$/i.test(input.value);
    }
}
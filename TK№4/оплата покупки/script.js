function validatePayment(event){
    event.preventDefault();
    const cardNumber = document.querySelector('#cardNumber').value;
    const cardHolderName = document.querySelector('#cardHolderName').value;
    const Date = document.querySelector('#Date').value;
    const cardType = document.querySelector('#cardType').value;
    const errors = [];

    if(!cardNumber || !cardHolderName || !Date || !cardType){
        alert("Пожалуйста, заполните все поля");
    } else {
        const cardPatterns = {
            'visa': /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/,
            'mastercard': /^5[1-5]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/,
            'unionpay': /^(62[0-9]{14,17})$/
        };

        if (!cardPatterns[cardType].test(cardNumber)){
            errors.push("Введите корректный номер карты для выбранного типа!");
        }

        if (!/^[a-zA-Z\s]+$/.test(cardHolderName)){
            errors.push("Имя держателя должно содержать только буквы!");
        }

        if (!/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/.test(Date)){
            errors.push("Введите корректную дату в формате dd.mm.yyyy!");
        }

        const errorMessages = document.querySelector('#errorMessages');
        errorMessages.innerHTML = errors.join("<br>");

        if (errors.length === 0){
            alert("Оплата прошла успешно!");
            
        }
    }
}

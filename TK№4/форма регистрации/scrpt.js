function validateForm(event){
    event.preventDefault();
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const phone = document.querySelector('#phone').value;
    const errors = [];

    if(!login || !password || !confirmPassword || !email || !name || !age || !phone){
        alert("Пожалуйста, заполните все поля");
    }else{
        if (!/^[a-zA-Z0-9]{5,10}$/.test(login)){
            errors.push("Логин должен содержать 5-10 символов и только латинские буквы (заглавные или строчные) и цифры!");
        }

        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9_-])[a-zA-Z0-9_-]{0,15}$/.test(password)){
            errors.push("Пароль должен содержать буквы, цифры и символы 0, _ или -, одну заглавную букву, одну строчную букву и одну цифру!");
        }

        if (password !== confirmPassword){
            errors.push("Подтвержденный пароль не совпадает с паролем");
        }

        if (!/^[-\w.]+@(A-z0-9[-A-z0-9]+\.)+[A-z]{2,4}$/.test(email)){
            errors.push("Введите корректный адрес электронной почты!");
        }

        if (!/^[а-яА-Я]+$/.test(name)) {
            errors.push("Имя должно содержать только буквы на русском языке!");
        }

        if (age < 18 || age > 80) {
            errors.push("Возраст должен быть в диапазоне от 18 до 80 лет!");
        }

        if (!/^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone)){
            errors.push("Номер телефона дожен содержать от 11 до 12 цифр и не содержать скобки!");
        }
        const errorMessages = document.querySelector('#errorMessages');
        errorMessages.innerHTML = errors.join("<br>");

        if (errors.length === 0){
        document.querySelector('#myForm').submit();
        window.location.href = "main.html";
    }
    }
}
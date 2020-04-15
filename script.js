let inputByn = document.getElementById("byn"),
    inputUsd = document.getElementById("usd");


inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', '/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            console.log(data);
            inputUsd.value = inputByn.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    })
})
function f(id) {
    var a =document.getElementById(id);
    var b = a.src.replace('small', 'big');

    var c = document.getElementById("big");
    c.src = b;
}

function ImageError() {
    alert("Ошибка! Изображение не найдено!");
}
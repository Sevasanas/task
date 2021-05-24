var answer, step = 0, wrongAnswer = 0, money = 0;
for (var i = 0; i < answers.length; i++) {
    answer = +prompt("Вопрос № " + (i + 1) + " " + answers[i].q + "\n" + answers[i].a1 + "\n" + answers[i].a2 + "\n" + answers[i].a3
    + "\n" + answers[i].a4 + "\n" + "Введите № правильного ответа.\nДля выхода введите -1");
    if (answer == -1) {
        break;
    }  if (answer > 4) {
        alert("Вы ввели некорректоное значение");
     } else if (answer == answers[i].correct) {
        money += (i + 1) * 100;
        alert("Поздравляем вы ответили правильно и получаете  за ответ " + ((i + 1) * 100) + " рублей");
        step++;
    } else {
        wrongAnswer++;
        alert("К сожалению вы ответили неверно\n У вас осталось " + (2-wrongAnswer) + " попытки");
        if (wrongAnswer == 2) {
            break;
        }
    }
}
alert("Вы  ответиили правильно на " + step + " вопросов из " + answers.length + " и заработали за игру " + money + " рублей"); 
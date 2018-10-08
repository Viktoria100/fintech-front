function guessNumberA()
{
    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let random=getRandomInt(1,101);
    let number = Number(window.prompt("Введи целое число от 1 до 100 :"));

    while (number!=random)
    {
        number=Number(prompt("Введи целое число от 1 до 100 :"));
        if (number.toLowerCase() > random)
        {
            alert("Слишком много");
            number=prompt("Попоробуй еще");
        }
        if (number.toLowerCase() < random)
        {
            alert("Слишком мало");
            number=prompt("Попоробуй еще");
        }
    }
    if(number==random)
    {
        alert("В точку!");
        console.log(random);
    }
}
guessNumberA();

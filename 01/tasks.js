/*=============================
=            РЕЛИЗ            =
=============================*/

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string)
{
    function getMaxOfArray(numArray)
    {
        return Math.max.apply(null, numArray);
    }
        function getMinOfArray(numArray)
        {
            return Math.min.apply(null, numArray);
        }
        const Arr = (string.split(/[А-я, !-, ,:-~ , / ]/));
    //console.log('max:' +' '+ getMaxOfArray(Arr));
   // console.log('min:'+' '+ getMinOfArray(Arr));
    return{min: getMinOfArray(Arr), max: getMaxOfArray(Arr)}
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x)
{
    if (x==0||x==1)
        return x;
    else
        return fibonacciSimple(x-2)+fibonacciSimple(x-1);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
let cache= new Map();
function fibonacciWithCache(x)
{
    if(cache.has(x)==true)
        return cache.get(x);
    else
      {
        if (x == 0 || x == 1)
        {
            cache.set(x, x);
            return x;
        }
        else
          {
            let f = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);
            cache.set(x, f);
            return f;
          }
      }
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols)
{
    let lines;
    let k=0;
    if ((max+1)% cols!=0)
        lines=Math.trunc((max+1)/cols)+1;
    else
        lines=(max+1)/cols;
    let x=new Array(lines);
    for (let i=0; i<lines;i++)
        x[i]=new Array(cols);

    for (let i=0; i<cols;i++)
    {
        for (let j = 0; j < lines; j++)
        {
            if(k<=max)
            {x[j][i] = k;
                k++;}
        }
    }


    for (let i=0; i<lines;i++)
    {
        console.log(x[i].join(' '));
    }

    return (x.join('\n'));

}


/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input)
{
    let Array=[];
    let k=1;
    for(let i=1; i<=input.length;i++)
    {
        if(input[i-1]==input[i])
        {
            k++;
        }
        else
        {
            Array.push(input[i-1]);
            if(k!=1)
            {
                Array.push(k);
            }
            k=1;
        }
    }
   // console.log(Array.join(''));
    return(Array.join(''))

    //не работает, если элементы повторяются
    /* for (let i=0;i<input.length; i++)
    {
       let k = input.lastIndexOf(input[i]);
        output.push(input[i]);
        if(k!=i)
        {
            output.push(k + 1-i);
            i = i + (k-i);
        }
    }*/
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/*=====  End of РЕЛИЗ  ======*/

/*========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
========================================*/

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA()
{
    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let k =0;
    let random=getRandomInt(1,101);
    let number = Number(window.prompt("Введи целое число от 1 до 100 :"));

    while (number!=random)
    {
        k++;
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
        k++;
        alert("В точку!");
        console.log("Угадал с " + k + " раза");
    }
}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
let best=Infinity;
function guessNumberB()
{
    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let k = 0;
    let random = getRandomInt(1, 101);
    let number = prompt("Введи целое число от 1 до 100 :");

    while (number != random)
    {
        k++;
        if (number.toLowerCase() > random)
        {
            alert("Слишком много");
            number = prompt("Попоробуй еще");
        }
        if (number.toLowerCase() < random)
        {
            alert("Слишком мало");
            number = prompt("Попоробуй еще");
        }
    }
    if (number == random)
    {
        k++;
        alert("В точку!");
        console.log("Угадал с " + k + " раза");
        if (k < best)
            best = k;
        console.log("Твой лучший результат: " + best);
    }
    let continuation = prompt("Хочешь сыграть еще?");
    if (continuation.toLowerCase() !== null)
        guessNumberB();
    else
      {
        console.log("Твой лучший результат: " + best);
      }
}

/*=====  End of НЕ ВОШЛО В РЕЛИЗ  ======*/

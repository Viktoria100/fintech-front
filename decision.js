//1 задание

    function getMinMax(string)
    {
        {function getMaxOfArray(numArray)
        {
            return Math.max.apply(null, numArray);
        }
        function getMinOfArray(numArray)
        {
            return Math.min.apply(null, numArray);
        }
        const Arr = (string.split(/[А-я, !-, ,:-~ , / ]/));
//console.log(Arr)
        console.log('min:'+' '+ getMinOfArray(Arr));
        console.log('max:' +' '+ getMaxOfArray(Arr));

    }

    /* const n = (' 100 и 500 -3; 17/8 или неточное ,  число 1.3232');
     getMinMax(n);*/
}

//2 задание

{function fibonacciSimple(x)
{
    if (x==0||x==1)
        return x;
    else
        return fibonacciSimple(x-2)+fibonacciSimple(x-1);
}
}
//console.log(fibonacciSimple(10));


//задание 3
let cache= new Map();
function fibonacciWithCache(x)
{
    if(cache.has(x)==true)
        return cache.get(x);
    else {
        if (x == 0 || x == 1) {
            cache.set(x, x);
            return x;
        }
        else {
            let f = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);
            cache.set(x, f);
            return f;
        }
    }

}
/*console.log(fibonacciWithCache(10));
for (let pair of cache)
{
    console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}*/

//задание 4
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
        console.log(x[i].join(' '));
}
//printNumbers(11,3);


//задание 5
function rle(input)
{
    let output=[];
    /* for (let i=0;i<input.length; i++)
     {
        let k = input.lastIndexOf(input[i]); //не работает, если элементы повторяются
         output.push(input[i]);
         if(k!=i)
         {
             output.push(k + 1-i);
             i = i + (k-i);
         }
     }*/
    let k=1;
    for(let i=1; i<=input.length;i++)
    {
        if(input[i-1]==input[i])
        {
            k++;
        }
        else
        {
            output.push(input[i-1]);
            if(k!=1)
            {
                output.push(k);
            }
            k=1;
        }
    }
    console.log(output.join(''));

}
//rle('LLLKKFJJJJJJJJJDDDDDSSKQQQNNAAAAAGG');

module.exports = {
    getMinMax,
    rle,
    printNumbers,
    fibonacciSimple,
    fibonacciWithCache
};
function Primo(n: number){
    let num: number = n;
    let con: number = 0;
    for(let i = num; i >= 1; i--){
        if(num % i == 0){
        con++;
        }
    }
    if(con == 2){
        console.log("True")
    }
    else
        console.log("False")
}
Primo(11);
//prblema 2
function invertirCadena(str: String){
    var cad: String = str.split("").reverse().join("");
    console.log(cad);
}
invertirCadena("hola mundo");
// problema 3
function palindromo(str: String){
    var cad: String = str.split("").reverse().join("");
    if(cad == str)
        console.log("True");
    else
        console.log("False");
}
palindromo("bangnab");
// problema 4
function productoGrande(arr: Array<number>){
    var num: Array<number> = arr;
    if(num.length > 1){
        var max: number = num[0]*num[1];
        var com: number;
        for(var i = 1; i < num.length - 1; i++){
            com = num[i] * (num[i+1]);
            if(max < com){
                max = com;
            }
        }
    console.log(max);
    }
    else
    {
        if(num.length == 1){
            var max: number = num[0];
            console.log(max);
        }
    }
}
productoGrande([4, 7, 6, 5]);
// problema 5
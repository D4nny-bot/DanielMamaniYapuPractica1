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
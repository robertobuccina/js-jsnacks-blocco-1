

var primaParola = prompt("inserisci la prima parola")

var secondaParola = prompt("inserisci la seconda parola")



if (primaParola > secondaParola){
    console.log(primaParola)
    console.log(secondaParola)
} else if (primaParola < secondaParola){
    console.log(secondaParola)
    console.log(primaParola)      
    
} else {
    alert ("parole uguali")
}
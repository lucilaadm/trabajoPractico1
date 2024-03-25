let numeroEj10 = parseInt (prompt ("Indique un número"))

document.write ("Su  número fue " + numeroEj10 + "<br>");


if (numeroEj10 % 2 === 0 || numeroEj10 % 3 === 0 || numeroEj10 % 5 === 0 || numeroEj10 % 7 === 0) {
    document.write ("El numero es divisible por 2, 3, 5 o 7")
    } else {
    document.write ("El numero no es divisible") }


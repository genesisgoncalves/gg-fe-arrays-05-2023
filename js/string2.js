let frase = prompt("Introduce una frase:");
let lista = frase.length;
let caracter;
let i;

for (i = 0; i < lista; i++) {
    caracter = frase.charAt(i);
    if (i == lista - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}
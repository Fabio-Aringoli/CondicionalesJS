
console.log("-----------------N1------------------------")
//Primer ejercicio

/* let primerNum = Number(prompt("Ingresar el primer numero"))
let segundoNum = Number(prompt("Ingresar el segundo numero"))

if(primerNum > segundoNum){
    console.log("El primer numero es mayor")
}else if(primerNum == segundoNum){
    console.log("Los numeros son iguales")
}else{
    console.log("El segundo numero es mayor")
} */

console.log("-----------------N2------------------------")

//Segundo ejercicio

/* let primerNumero = Number(prompt("Ingresar el primer numero"))
let segundoNumero = Number(prompt("Ingresar el segundo numero"))

if(primerNumero == segundoNumero){
    console.log("Los numeros son iguales")
} else if(primerNumero != segundoNumero){
    console.log("Los numeros son diferentes")
} */

console.log("-----------------N3------------------------")

//Tercer ejercicio

/* let primerN = Number(prompt("Ingresar el primer numero"))
let segundoN = Number(prompt("Ingresar el segundo numero"))

if(primerN > segundoN){
    console.log("Es mas grande el primer numero")
}else if(primerN < segundoN){
    console.log("Es mas grande el segundo numero")
}else if(primerN == segundoN){
    console.log("Los dos numeros son iguales")
}
 */
console.log("-----------------N4------------------------")

//Cuarto ejercicio

/* let primerNumber = Number(prompt("Ingresar el primer numero"))
let segundoNumber = Number(prompt("Ingresar el segundo numero"))
let tercerNumber = Number(prompt("Ingresar el tercer numero"))

if(primerNumber > segundoNumber && primerNumber > tercerNumber){
    console.log("El primer numero es el mas grande de los tres")
}else if(segundoNumber > primerNumber && segundoNumber > tercerNumber){
    console.log("El segundo numero es el mas grande de los tres")
}else if(tercerNumber > primerNumber && tercerNumber > segundoNumber){
    console.log("El tercer numero es el mas grande de los tres")
}else if(primerNumber == segundoNumber && primerNumber == tercerNumber){
    console.log("Los tres numeros son iguales")
}else if(segundoNumber == primerNumber && segundoNumber == tercerNumber){
    console.log("Los tres numeros son iguales")
}else if(tercerNumber == primerNumber && tercerNumber == segundoNumber){
    console.log("Los tres numeros son iguales")
} */

console.log("-----------------N5------------------------")

//Quinto ejercicio

/* let personaUno = {
    nombre: "Fabio",
    edad: 24,
    altura: "1.80mts"
}

let personaDos = {
    nombre: "Luciano",
    edad: 28,
    altura: "1.77mts"
}

if(personaUno.altura > personaDos.altura){
    prompt("Fabio es mas alto que Luciano")
    console.log("Fabio es mas alto que luciano")
}else{
    prompt("Luciano es mas alto que Fabio")
    console.log("Luciano es mas alto que Fabio")
}

if(personaUno.edad > personaDos.edad){
    prompt("Fabio tiene mas años que Luciano")
    console.log("Fabio tiene mas años que Luciano")
}else{
    prompt("Luciano tiene mas años que Fabio")
    console.log("Luciano tiene mas años que Fabio")
}
 */
console.log("-----------------N6------------------------")

//Sexto Ejercicio

/* let miNombre = String(prompt("Ingresar mi nombre"))
console.log(miNombre)
let miEdad = Number(prompt("Ingresar mi edad"))

if(miEdad === 18){
    console.log("Tengo la edad minima para manejar")
    let miAltura = Number(prompt("Ingresar mi altura"))
    if(miAltura = 1.50){
        console.log("Mido lo minimo para manejar")
    }else if(miAltura > 1.50){
        console.log("Tengo una buena altura para manejar")
    }else{
        console.log("No tengo la altura minima para manejar")
    }
    let miVision = Number(prompt("Ingresar mi vision"))
    if(miVision >= 8){
        console.log("Mi vision me permite manejar")
    } else(console.log("No tengo la vision minima para manejar"))
}else if(miEdad > 18){
    console.log("Puedo manejar")
}else{
    console.log("No tengo la edad minima para manejar")
}  */

console.log("-----------------N7------------------------")

/* let entrada = prompt("¿Posees entrada?")
if(entrada == "no"){
    alert("No podras ingresar entonces")
}else if(entrada == "si"){
    let usarEntrada = prompt("¿Queres usar la entrada?")
    if(usarEntrada === "si"){
        alert("¡Bienvenido!")
    }else if(usarEntrada === "no"){
        console.log("No podras ingresar entonces")
    }else{
        console.log("Respuesta invalida")
    }
}
 
 let nombre = prompt("Ingresar nombre")
console.log(nombre)
if(nombre === "Fabio" || nombre === "fabio"){
    console.log("Tenes pase libre por tener el mismo nombre")
    alert("¡Bienvenido!")
    let pase = prompt("Ingresar que tipo de pase tenes, vip o normal")
    console.log(pase)
    if(pase === "vip"){
        console.log("Tienes pase libre por tener vip")
        alert("¡Bienvenido!")
    }else if(pase === "normal"){}
}else if(nombre != "Fabio" || nombre != "fabio" && pase === "normal" && entrada === "no"){
    let queresComprar = prompt("¿Queres comprar un pase vip? sale $1000")
    if(queresComprar === "si"){
        let dineroDisponible = Number(prompt("Ingresar dinero disponible"))
        if(dineroDisponible >= 1000){
            alert("Compra realizada")
            alert("¡Bienvenido!")
        }else if(dineroDisponible <= 999){
            console.log("El dinero ingresado no es suficiente")
        }
    }else if(queresComprar === "no"){
        alert("¡Nos vemos la proxima!")
    }
} */
    

console.log("-----------------N8------------------------")


/* alert("Tendras tres intentos para adivinar el numero que se esconde del 1 al 10, suerte!")
let numeroIncognita = Number(prompt("Ingresar numero"))

if(numeroIncognita === 10){
    alert("Felicidades, encontraste al Messias")
    console.log("Felicidades, encontraste al Messias")
}else if(numeroIncognita < 10){
    alert("No, ese no es, te quedan dos intentos")
    console.log("No, ese no es, te quedan dos intentos")
}

numeroIncognita = Number(prompt("Ingresar numero"))

if(numeroIncognita === 10){
    alert("Felicidades, encontraste al Messias")
    console.log("Felicidades, encontraste al Messias")
}else if(numeroIncognita < 10){
    alert("No, ese no es, te queda un intento")
    console.log("No, ese no es, te queda un intento")
}

numeroIncognita = Number(prompt("Ingresar numero"))

if(numeroIncognita === 10){
    alert("Felicidades, encontraste al Messias")
    console.log("Felicidades, encontraste al Messias")
}else if(numeroIncognita < 10){
    alert("El messias no fue encontrado, perdiste el partido")
    console.log("El messias no fue encontrado, perdiste el partido")
}
 */
console.log("-----------------N9------------------------")

/* let edad = Number(prompt("Por favor ingresar su edad"))
if(edad < 13){
    alert("Sos un infante, te queda mucho por delante")
}if(edad > 12 && edad < 19){
    alert("Sos un adolecente, no te dejes pasar por encima")
}else if(edad > 18 && edad < 44){
    alert("Sos un joven adulto, no tengo mucho para explicarte, estoy por ahi")
}else if(edad > 44 && edad < 100 ){
    alert("Ya sos adulto, en este momento te toca explicarme cositas a mi ahora")
}else if(edad > 99){
    alert("No te creo que tengas cien pirulos")
}
 */
console.log("------------------N10------------------------")

/* let piedra = "piedra"
let papel = "papel"
let tijeras = "tijeras"

let Fabio = prompt("Te toca Fabio, piedra, papel, o tijeras")
let StaffMindhub = prompt("Te toca Staff de Mindhub, piedra, papel, o tijeras")

if(Fabio === "piedra" && StaffMindhub === "tijeras"){
    alert("Fabio gano la partida")
}else if(StaffMindhub === "piedra" && Fabio === "tijeras"){
    alert("el Staff de Mindhub gano la partida")
}else if(Fabio != "piedra" && Fabio != "papel" && Fabio != "tijeras"){
    alert("¡Fabio hizo trampa!")
}

if(Fabio === "papel" && StaffMindhub === "piedra"){
    alert("Fabio gano la partida")
}else if(StaffMindhub === "papel" && Fabio === "piedra"){
    alert("el Staff de Mindhub gano la partida")
}

if(Fabio === "tijeras" && StaffMindhub === "papel"){
    alert("Fabio gano la partida")
}else if(StaffMindhub === "tijeras" && Fabio === "papel"){
    alert("el Staff de Mindhub gano la partida")
}else if(StaffMindhub != "piedra" && StaffMindhub != "papel" && StaffMindhub != "tijeras"){
    alert("¡el Staff de MindHub hizo trampa!")
}

if(Fabio === StaffMindhub){
    alert("Empate, que cracks")
}
 */
console.log("------------------N11------------------------")

/* let colores = "Rojo" //Elegir un color (Blanco / Negro / Verde / Azul / Amarillo / Rojo / Marron)

switch (colores) {
    case "Blanco":
        console.log("Falta color")
        break;
    case "Negro":
        console.log("Falta color")
        break;
        case "Verde":
        console.log("El color de la naturaleza.")
        break;
        case "Azul":
        console.log("El color del agua.")
        break;
        case "Amarillo":
        console.log("El color del sol.")
        break;
        case "Rojo":
        console.log("El color del fuego.")
        break;
        case "Marron":
        console.log("El color de la tierra.")
        break;
    default:
        console.log("Exelente eleccion, no lo teniamos pensado.")
        break;
}
 */
console.log("------------------N12------------------------")



console.log("------------------N13------------------------")

/* let apellido = prompt("Apellido")
document.write(apellido)
document.write("<br>")
let nombre = prompt("Nombre")
document.write(nombre)
document.write("<br>")
let segundoNombre = prompt("Segundo nombre")
document.write(segundoNombre)
document.write("<br>")
let sexo = prompt("sexo")
document.write(sexo)
document.write("<br>")
let nacionalidad = prompt("nacionalidad")
document.write(nacionalidad)
document.write("<br>")
let ejemplar = prompt("ejemplar")
document.write(ejemplar)
document.write("<br>")
let fechaDeNacimiento = (prompt("Fecha de nacimiento"))
document.write(fechaDeNacimiento)
document.write("<br>")
let fechaDeEmision = (prompt("Fecha de emision"))
document.write(fechaDeEmision)
document.write("<br>")
let fechaDeVencimiento = (prompt("Fecha de vencimiento"))
document.write(fechaDeVencimiento)
document.write("<br>")
let dni = Number(prompt("DNI"))
document.write(dni)
document.write("<br>")
let numeroDeTramite = Number(prompt("Numero de tramite"))
document.write(numeroDeTramite)
document.write("<br>")
let cuil = Number(prompt("Cuil (sin guiones)"))
document.write(cuil)
document.write("<br>")
let domicilio = prompt("Domicilio")
document.write(domicilio) */
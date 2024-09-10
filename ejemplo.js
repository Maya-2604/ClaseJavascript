let num1=1

let num2=2.0

let cadena="hola"

console.log("num1") 
console.log("num2") 
console.log("cadena") 

console.log("hola")

const txt1 = new String("Hola a todos")
console.log(txt1) 
console.log('1.2.3.4.5'.split('.'))
console.log(txt1.split(' '))
console.log(txt1.length)
console.log(txt1.charAt(1))

var animales=['tigre','ballena','lobo','aguila']
console.log(animales.length)
console.log(animales)

let numeros=[11,10,5,4,12]
console.log(numeros.reverse()) //arreglo//

var juntar=numeros.join();
console.log(juntar) //variable//

let anio=[1995,1999,2024,2020]
function encontrar (item){
    return item>=2000
}
console.log(anio.some(encontrar))
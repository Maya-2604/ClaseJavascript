
//De un determinado arreglo con nombre y edad
//Buscar aquellas personas que tengan más de 5 años
//5 elementos

let personas=[
    {nombre: "Cesar",edad:4},
    {nombre: "Dieguito",edad:2},
    {nombre: "Gabito",edad:1},
    {nombre: "Fer",edad:20},
    {nombre: "Mario",edad:80},
]

let busqueda=personas.filter(persona=>persona.edad>5)

console.log(busqueda)

// Hacer una busqueda de 10 trabajadores donde sean developers

let trabajadores=[
    {trabajador: "Omar" ,area: "documentacion"},
    {trabajador: "Vieyra" ,area: "base de datos"},
    {trabajador: "Enain" ,area: "front"},
    {trabajador: "Jimmy" ,area: "back"},
    {trabajador: "Domingo" ,area: "planeacion"},
    {trabajador: "Polanco" ,area: "front"},
    {trabajador: "Almita" ,area: "planeacion"},
    {trabajador: "Armando" ,area: "back"},
    {trabajador: "Roman" ,area: "base de datos"},
    {trabajador: "Chucho" ,area: "documentacion"},

]

let busqueda1=trabajadores.filter(trabajador=>trabajador.area="base de datos")
 console.log(busqueda1)
 
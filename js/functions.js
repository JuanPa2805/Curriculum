//alert("Hola soy un alert desde un achivo")

//console.log("Hola soy una alerta");

//document.write("Hola soy la consola");
Swal.fire("Hola soy una alerta de libreria");



// VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //DECIMAL
var name = "Juan"; // STRING
let edad = 18; // ENTERO
let edad_string = "18"; //STRING
var bool = true; // FALSE BOOLEANOS


// OPERADORES BASICOS  + - / * %
var suma = 5+2;
console.log(suma);
console.log(edad_string + suma);
var one = 10;
var two = 20;
console.log(one + two);
console.log(one - two);
console.log(one * two);
console.log(one / two);
console.log(one % two);

//OPERADORES DE COMPARACION 
// > < >= <= <>
// = Asignacion
// == Comparacion 5 == "5"
// === Comparacion 5 == "5"
//OPERADORES LOGICOS 
// AND %% OR 


console.log("Mi nombre" + name + "tiene como edad" + edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        showConfirmButton: false
       
      });
}

function send_info(){
    let name = document.getElementById("name").value;
    let Last_name = document.getElementById("Last_name").value;
    let Password = document.getElementById("Password").value;
    let Repeat_password = document.getElementById("Repeat_password").value;

    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Campos vacios",
            text: "Alguno de los campos se encuentra vacio",
            icon: "error"
          });
          if(name.length == 0){
            document.getElementById("name").style.border = "2px solid red"
          }
          if(last_name.length == 0){
            document.getElementById("Last_name").style.background = "red"
          }
         

    }else{
        document.getElementById("print").innerHTML = <strong>name + Last_name </strong>

    }
    if(Password.length != Repeat_password){
        Swal.fire("Contraseña incorrecta");
      }

}
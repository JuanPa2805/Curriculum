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
      document.getElementById("valores").value =array_ejm;
      document.getElementById("fecha").value =new Date();
      let fecha = new Date();

      document.getElementById("dia").innerText = fecha.getDay();
      
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
 //Array
 var dias_sem = ["Lunes ", "Martes", "Miercoles", "Jueves ", "Viernes" , "Sabado", "Domingo"];
 var array_num = [1,2,3,4,5,6,7,8,9];
 var array_mix = [1,2,5,"abc"];
 var array_mul = [
   {name:"Juan",age:18,color:"blue"},
   {name:"Diego",age:18,color:"red"},
   {name:"David",age:19,color:"black"},
   {name:"Andre",age:18,color:"grenn"}
   

 ]

 var json_ejm = {

   name:"Juan",
   lastname:"Paredes",
   phone:"3156665194",
   email:"jeparedesf@ufpso.edu.co"
 }
 
 console.log(dias_sem);
 console.log( array_num);
 console.log(array_mix);
 console.log(array_mul);

 
 for(let i = 0; i< dias_sem.length;i++){

   console.log(dias_sem[i]);

 }

 var j = 0;

 while(j < array_num.length){

   console.log(array_num(j));

   j++;

 }

var accu = 0;

 for(let h = 0; h < array_num.length; h++){

  accu+= array_num(j);


 }

 console.log(accu);

 var suma_age = 0;
 
 for(let k =0; k < array_mul.length; h++){

  suma_age += array_mul[a].age;

 }

 console.log(suma_age);
 document.getElementById("print_age").innerText = "El valor de la suma es: " + suma_age;
 document.getElementById("print_age_eti").innerHTML = "<strong> El valor de la suma es: " +suma_age;

 function limpiar(){
  document.getElementById("valores").value = "";
  document.getElementById("print_age").innerText = "";
  document.getElementById("print_age_eti").innerHTML = "";
 }


 var array_ejm = [1,2,3,4,5,6,7,8,9];

 function eliminar(){
  array_ejm.pop();

  document.getElementById("valores").value = array_ejm;

 }
 function agregar(){
  array_ejm.push(20);

  document.getElementById("valores").value = array_ejm;
 }

 
 var array_ejm = [1,2,3,4,5,6,7,8,9];

 function eliminar2(){
  array_ejm.shift();

  document.getElementById("valores2").value = array_ejm;

 }
 function agregar2(){
  array_ejm.unshift(20);

  document.getElementById("valores2").value = array_ejm;
 }
 function limpiar2(){
  document.getElementById("valores2").value = "";
  document.getElementById("print_age").innerText = "";
  document.getElementById("print_age_eti").innerHTML = "";
 }


 ////// Funcion para enviar el nombre concatenado //////

 function send_name(){
  let name_one = document.getElementById("name_one").value;
  let name_two = document.getElementById("name_two").value;
  let search_var = document.getElementById("search_var").value;
  let name_com = name_one.toUpperCase() + name_two.toUpper.toUpperCase();
  //let variable = name_com.indexOf("I");
  //let variable = name_com.lastIndexOf("I");
  //let variable = name_com.charAt(3);
  let variable = name_com.charAt(search_var);
  if(search_var <= name_com.length && search_var != 0){
    
    //console.log(variable)
    //Swal.fire(variable);
    document.getElementById("print_name").innerText = "La letra correspondiente al a "+search_var+" es:" +variable; 
    
  }
  else{
    swal.fire{
      icon: "error";
      title: "El valor supera la cantidad de letras del texto";
    }
  }
  document.getElementById("print_name").innerText = "La letra correspondiente al a "+search_var+" es:" +variable; 
}
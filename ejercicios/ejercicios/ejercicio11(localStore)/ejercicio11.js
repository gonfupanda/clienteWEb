let arrayPrueba =[];
let a="a";
for(i=0;i<4;i++){
a=a+"a";
arrayPrueba.push(a);
}
let objeto={
    dni:"1234545",
    nombre:"gonza",
    apellido:"padierna",
    edad:"20"
}

function mostrar() {//funcion que saca las diferentes funciones
    alert("Nombre:"+localStorage.getItem("dato"));//getItem para recoger
    console.log(localStorage.getItem("array"));
    console.log(localStorage.getItem("objeto"));  

  
}
function guardarLocalStorage() {//funcion en la que introduzco un dato en la local storage
    localStorage.setItem("dato",document.getElementById("dato").value);//setItem para introducir
    localStorage.setItem("array",JSON.stringify(arrayPrueba));
    localStorage.setItem("objeto",JSON.stringify(objeto));
    //console.log(localStorage.getItem("dato")); 
    mostrar();
}



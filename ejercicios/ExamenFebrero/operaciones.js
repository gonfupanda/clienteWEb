
/*let barco ={//Objeto de barcos
    pantalan:patalann,
    atraque :atraquee,
    mano:manoo,
    matriculaBarco:matriBarco,
    marcaBarco:marcaBarcoo,
    modeloBarco:modeloBarco,
    nifPropietario:nifPropietarioo,
    nifPadron:nifPatronn,
};
let patron={//Objeto de patrones
    nifPadron:nifPatronn,
    nombrePatron:nombrePatronn,
    tlfPatron:telefPatron
};

let propietario ={//Objeto de usuarios
    nombre:nombree,
    nif:niff,
    contra:contrase,
    apellido: apellidoo,
    telefono: telefonoo,
    email:emaill,
    formaPago:forma,
    IBAN:iban,
    autorizado:true //true or false
};
*/
let barcos = [];//array de objetos
let patrones = [];
let propietarios = [];
let valido =true;
let barco;

function guardarLocalStorage(barcos) {//funcion en la que introduzco un dato en la local storage
    localStorage.clear();
    localStorage.setItem("vehiculos",JSON.stringify(barcos));
    //console.log(localStorage.getItem("dato")); 
}
function sacarLocalStorage(){//devuelve la localStorage
    let a=JSON.parse(localStorage.getItem("vehiculos"));
    return a;
}

function mostrarAlta(){

    ventanaAltas =document.getElementById("altasBarcos");
    ventanaMod =document.getElementById("modificaciones");
    ventanaCon =document.getElementById("consultas");
    menu =document.getElementById("menu");
    ventanaAltas.style.display ="block";
    ventanaMod.style.display ="none";
    ventanaCon.style.display ="none";
    menu.style.display ="none";
}
function mostrarBajas(){
    ventanaAltas =document.getElementById("altasBarcos");
    ventanaBajas =document.getElementById("bajas");
    ventanaMod =document.getElementById("modificaciones");
    ventanaCon =document.getElementById("consultas");
    menu =document.getElementById("menu");


    ventanaBajas.style.display ="block";
    ventanaAltas.style.display ="none";
    ventanaMod.style.display ="none";
    ventanaCon.style.display ="none";
    menu.style.display ="none";


}
function mostrarMod(){
    ventanaAltas =document.getElementById("altasBarcos");

    ventanaMod =document.getElementById("modificaciones");
    ventanaCon =document.getElementById("consultas");
    menu =document.getElementById("menu");

    ventanaAltas.style.display ="none";
    ventanaMod.style.display ="block";
    ventanaCon.style.display ="none";
    menu.style.display ="none";
}
function mostrarConsultas(){
    ventanaAltas =document.getElementById("altasBarcos");
    ventanaMod =document.getElementById("modificaciones");
    ventanaCon =document.getElementById("consultas");
    menu =document.getElementById("menu");

    ventanaAltas.style.display ="none";
    ventanaMod.style.display ="none";
    ventanaCon.style.display ="block";
    menu.style.display ="none";
}
function mostrarMenu(){
    ventanaAltas =document.getElementById("altasBarcos");
    ventanaMod =document.getElementById("modificaciones");
    ventanaCon =document.getElementById("consultas");
    menu =document.getElementById("menu");
    ventanaBajas =document.getElementById("bajas");
    ventanaPatron =document.getElementById("altasPatron");
    ventanaPropi =document.getElementById("altasPropietario");

    ventanaBajas.style.display ="none";
    ventanaAltas.style.display ="none";
    ventanaMod.style.display ="none";
    ventanaCon.style.display ="none";
    ventanaPatron.style.display ="none";
    ventanaPropi.style.display ="none";
    menu.style.display ="block";
}
function mostrarPatron(dni){
    ventanaAltas =document.getElementById("altasBarcos");
    ventanaPatron =document.getElementById("altasPatron");
    document.getElementById("nifPatron").value=dni;

    ventanaPatron.style.display ="block";
    ventanaAltas.style.display ="none";

}
function mostrarPropi(){
    ventanaAltas =document.getElementById("altasBarcos");
    ventanaPropi =document.getElementById("altasPropietario");
    ventanaPatron =document.getElementById("altasPatron");
    document.getElementById("nifPropi").value=barco.nifPropietario;

    ventanaPropi.style.display ="block";
    ventanaPatron.style.display ="none";
    ventanaAltas.style.display ="none";

}
///FUTURO USO
function buscarMatricula(){//busca una matricula y muestra los datos del objeto con esa matricula
    let matriculaa =document.getElementById("matriculaConsulta").value;
    let area = document.getElementById("textArea");
    if(barcos.length!=0){
        barcos =sacarLocalStorage();
        console.log(barcos);
        let vehiculooo;
        let esta=false;

        for(i=0;i<barcos.length;i++){
            if(barcos[i].matriculaBarco==matriculaa){
                vehiculooo=barcos[i];
                esta=true;
                i=barcos.length;
            }
        }
        if(esta){
            area.value ="Nombre: "+vehiculooo.nombre+"\nApellidos: "+
            vehiculooo.apellido1+" "+vehiculooo.apellido2+"\nEmail: "+
            vehiculooo.email+"\nTelefono: "+vehiculooo.telefono;
        }else{
            alert("No se ha encontrado la matricula");
            area.value="";
        }
    }else{
        alert("Introduce un vehiculo al taller primero");
    }
}
///FUUTO USO
function tipoReparacion(){//saco los vehiculos con un tipo de reparacion especifica

    if(barcos.length!=0){
        let area =document.getElementById("textArea2"); 
        area.value="";
        barcos =sacarLocalStorage();
        let selectRepa =document.getElementById("reparacionesConsulta");
        let repavalue =selectRepa.options[selectRepa.selectedIndex].value;

        for(i=0;i<barcos.length;i++){
            if(repavalue==barcos[i].reparaciones){
                area.value=area.value+" \n"+barcos[i].matricula+"  "+barcos[i].modelo;
            }                      
        }
    }
}
function sacarDni(dnii){ //sacar el dni con la letra
    let numeros = parseInt(dnii);
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var Posicion= numeros % 23;//calculo de la letra correcta
    var Letra = letras[Posicion];//La coje de la lista de opciones
    dnii =numeros+Letra;
    //console.log("Este es el resultado del dni final "+dnii);
    dniConLetra=dnii;
    return dniConLetra;
}
function buscarDni(dni){ //buscar el dni el la array(principalmente para el borrado)
    let bien=false;      
    dniConLetra= sacarDni(dni);
    for(i=0;i<usuarios.length;i++){//miro si ese dni ya existe en la array
        if(usuarios[i].dni==dniConLetra){
                bien=true;
                alert("Dni encontrado");             
        }
    } 
    return bien;     
}
function validarDni(dnii){//me aseguro que a introducido el dni correctamente por rangos
    let bien=true;
    numeros =parseInt(dnii);
    //dniConLetra= sacarDni(dnii);//para sacar el dni perfecto      
    if(bien){
        if(numeros>100000000 || numeros<0){// numeros.length!=8
             bien=false;
             alert("Los numeros del NIF no son correctos");
         }  
    }
    return bien;
}
//EN CREACION
function existePatron(barco){//compruebo que el patron exista. Si existe le evito volver a introducir los datos
    let esta=false;
    for(i=0;i<patrones.length;i++){
        if(barco.nifPadron ==patrones[i].nifPadron){
            esta=true;
            i=patrones.length;
        }
    }
    if(esta){
        existePropi();
    }else{
        alert("Ese patron no esta registrado ");
        mostrarPatron(barco.nifPadron);
    }

}
//EN CREACION
function existePropi(){//compruebo que el propietario exista. Si existe le evito volver a introducir los datos
    let esta=false;
    for(i=0;i<patrones.length;i++){
        if(barco.nifPropietario ==patrones[i].nifPropietario){
            esta=true;
            i=patrones.length;
        }
    }
    if(esta){
        //AQUI IRIA EL ALTA DEL BARCO 
    }else{
        alert("Ese propietario no esta registrado ");
        mostrarPropi();
    }

}
//EN CREACION
function crearBarco(){//EN REALIDAD ESTA FUNCION CREA EL OBJETO BARCO Y TE MANDA A LAS OTRAS ALTAS
    let pantalann = document.getElementById("pantalan").value; //una unica letra
    let atraquee = document.getElementById("atraque").value;
    let matriculaa = document.getElementById("matricula").value;
    let modeloo = document.getElementById("modelo").value;
    let manoo = document.getElementById("mano").value;

    let marcaa = document.getElementById("marca").value;
    let nifPropi = document.getElementById("nifPropietarioBarco").value;
    let nifPatronn = document.getElementById("nifPatronBarco").value;
    let a;
    validarMatricula(matriculaa);
    let okey=validarBarco();
    if(okey){
        let dniLetraPropi = sacarDni(parseInt(nifPropi)); 
        let dniLetraPatro = sacarDni(parseInt(nifPatronn)); 
        okey=validarDni(dniLetraPropi);
        if(okey){
            okey=validarDni(dniLetraPatro);
            if(okey){
                okey =validarMatricula(matriculaa);
                if(okey){
                    barco ={//Objeto de barcos
                        pantalan:pantalann,
                        atraque :atraquee,
                        mano:manoo,
                        matriculaBarco:matriculaa,
                        marcaBarco:marcaa,
                        modeloBarco:modeloo,
                        nifPropietario:nifPropi,
                        nifPadron:nifPatronn,
                    };
                    existePatron(barco);//tengo que llevarle el objeto barco a las otras capas?
                    //tengo que mirar y llevarle a las otras altas y luego volver para acabar de meter el barco

                }else{
                    console.log("fallo en la matricula del barco: "+matriculaa);
                    a = document.getElementById("matricula");
                    a.value="";
                    a.focus();
                }
            }else{
                console.log("fallo en el dni del patron: "+dniLetraPatro);
                a = document.getElementById("nifPatronBarco");
                a.value="";
                a.focus();
            }
        }else{
            console.log("fallo en el dni del propietario: "+dniLetraPropi);
            alert("NIF incorrecto");
            a = document.getElementById("nifPropietarioBarco");
            a.value="";
            a.focus();
        }


    }
}

function validarBarco(){//COMPRUEBO LOS DATOS DEL BARCO
    ///variables
    let pantalann = document.getElementById("pantalan").value; //una unica letra
    let atraquee = document.getElementById("atraque").value;
    let matriculaa = document.getElementById("matricula").value;
    let modeloo = document.getElementById("modelo").value;

    let marcaa = document.getElementById("marca").value;
    let nifPropi = document.getElementById("nifPropietarioBarco").value;
    let nifPatron = document.getElementById("nifPatronBarco").value;
    valido=true;
    let a;
    /////

    let dniLetraPropi = sacarDni(parseInt(nifPropi)); 
    let dniLetraPatro = sacarDni(parseInt(nifPatron)); 

    if(nifPropi.length!=9 ){//dniLetraPropi!=9
        valido = false;
        alert("NIF incorrecto");
        a = document.getElementById("nifPropietarioBarco");
        a.value="";
        a.focus();
    }else if(nifPatron.length!=9){//dniLetraPatro!=9
        valido = false;
        alert("NIF incorrecto");
        a = document.getElementById("nifPatronBarco");
        a.value="";
        a.focus();
    }else if(!isNaN(marcaa) || marcaa.length==0){
        valido = false;
        alert("Marca incorrecto");
        a = document.getElementById("marca");
        a.value="";
        a.focus();
    }else if(!isNaN(modeloo) ||modeloo.length==0){
        valido = false;
        alert("Modelo incorrecto");
        a = document.getElementById("modelo");
        a.value="";
        a.focus();
    }else if(isNaN(atraquee) || atraquee.length==0){
        valido = false;
        alert("Atraque incorrecto");
        a = document.getElementById("atraque");
        a.value="";
        a.focus();
    }else if(pantalann.length!=1){
        valido = false;
        alert("Pantalan incorrecto");
        a = document.getElementById("pantalan");
        a.value="";
        a.focus();
    }else if(!validarMatricula){
        valido = false;
        alert("Matricula incorrecto");
        a = document.getElementById("matricula");
        a.value="";
        a.focus();

    }
    return valido;
        //falta validar matricula

}
function validarMatricula(matricula){//COMPRUEBO LA MATRICULA DEL BARCO
    let bien=true;
    if(/[0-9]-[a-z]{2}-[0-9]-[0-9]{3}-[0-9]{2}/.test(matricula)){//me ha tocado a mi hacerla XD
        bien=true;
    }else{
        bien=false;
    }
    return bien;
}

function validarPatron(){//COMPRUEBO LOS DATOS DEL PATRON(MENOS EL NIF QUE SE COMPRUEBA ANTERIORMENTE)

    nombre=document.getElementById("nombrePatron").value;
    tele=document.getElementById("tlfPatron").value;
    //let num=parseInt(tele);
    let bien=true;
    if(nombre.length==""){
        alert("Nombre incorrecto");
        a = document.getElementById("nombrePatron");
        a.value="";
        a.focus();
        bien=false;
    }else if(tele.length!=9 || isNaN(tele) ){
        console.log(tele);
        alert("Telefono incorrecto");
        a = document.getElementById("tlfPatron");
        a.value="";
        a.focus();
        bien=false;
    }
    return bien;
}
function crearPatron(){
    nif=barco.nifPadron;
    nombre=document.getElementById("nombrePatron").value;
    tele=document.getElementById("tlfPatron").value;
    let bien=validarPatron();
    if(bien){
        let patron={//Objeto de patrones
            nifPadron:nif,
            nombrePatron:nombre,
            tlfPatron:tele
        };
        patrones.push(patron);
        existePropi(barco)

    }



}



//esto sirve para las validaciones(No entiendo del todo este codigo)!!!!!//NO VA PORQUE LOS BOTONES SON INPUTS
//de momento el email se valida mal y el select no me deja quitarle el validado
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
 })()

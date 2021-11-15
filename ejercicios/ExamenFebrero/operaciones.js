
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
let barcos = [];//array de barcos
let patrones = [];//array de patrones
let propietarios = [];//array de propietarios
let valido =true;
let barco;
let patron;//objeto que se usara para  usarlo en las modificaciones
let propietario;
let noAutorizados=[];//array de usuarios no autorizados
let Autorizados=[];//array de usuarios autorizados
let usuario;
let estaMod=false;//esta variable servira para cambiar la funcion a llamar de los botones de patron,propi y barcos de crear o mod

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
    ventanaPatron =document.getElementById("altasPatron");
    ventanaPropi =document.getElementById("altasPropietario");
    if(!estaMod){
        document.getElementById("nifPatronBarco").removeAttribute("disabled","disabled");//hacer una etiqueta sea editable
        document.getElementById("nifPropietarioBarco").removeAttribute("disabled","disabled");//hacer una etiqueta sea editable
        
        document.getElementById("pantalan").value="";
        document.getElementById("atraque").value="";
        //document.getElementById("mano").value="";//nose que hacer coon selects
        document.getElementById("modelo").value="";
        document.getElementById("matricula").value="";
        document.getElementById("marca").value="";
        document.getElementById("nifPatronBarco").value="";
        document.getElementById("nifPropietarioBarco").value="";
    }

    ventanaPropi.style.display ="none";
    ventanaPatron.style.display ="none";
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
    estaMod=false;

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
    if(!estaMod){//vaciar campos 
        document.getElementById("nombrePatron").value="";
        document.getElementById("passwdPatron").value="";
        document.getElementById("tlfPatron").value="";
    }
    ventanaPatron.style.display ="block";
    ventanaAltas.style.display ="none";

}
function mostrarPropi(){
    ventanaAltas =document.getElementById("altasBarcos");
    ventanaPropi =document.getElementById("altasPropietario");
    ventanaPatron =document.getElementById("altasPatron");
    document.getElementById("nifPropi").value=barco.nifPropietario;

    if(!estaMod){//vaciar los  campos 
        document.getElementById("nombrePropi").value="";
        document.getElementById("apellido1").value="";
        document.getElementById("passwd").value="";
        document.getElementById("tlfPropi").value="";
        document.getElementById("email").value="";
        document.getElementById("formaPago").value="";
        document.getElementById("IBAN").value="";
    }
    ventanaPropi.style.display ="block";
    ventanaPatron.style.display ="none";
    ventanaAltas.style.display ="none";

}
function patronMod(patron){//te manda a la capa de altas de mod con los datos introducidos y el moton cambia de funcion(Modificar)

    ventanaPatron =document.getElementById("altasPatron");

    ventanaMod =document.getElementById("modificaciones");
    //document.getElementById("nifPatron").setAttribute.disable(true);
    document.getElementById("nifPatron").value=patron.nifPadron;
    document.getElementById("nombrePatron").value=patron.nombrePatron;
    document.getElementById("passwdPatron").value=patron.passwd;
    document.getElementById("tlfPatron").value=patron.tlfPatron;
    estaMod=true;//pongo el modo de modificar activado

    ventanaPatron.style.display ="block";
    ventanaMod.style.display ="none";
}
function modPropi(propi){
    ventanaPropi =document.getElementById("altasPropietario");
    ventanaMod =document.getElementById("modificaciones");

    document.getElementById("nifPropi").value=propi.nif;
    document.getElementById("nombrePropi").value=propi.nombre;
    document.getElementById("apellido1").value=propi.apellido;
    document.getElementById("passwd").value=propi.passwd;
    document.getElementById("tlfPropi").value=propi.telefono;
    document.getElementById("email").value=propi.email;
    document.getElementById("formaPago").value=propi.formaPago;
    document.getElementById("IBAN").value=propi.iban;
    estaMod=true;//pongo el modo de modificar activado

    ventanaPropi.style.display ="block";
    ventanaMod.style.display ="none";
}
function modBarco(barco){

    ventanaMod =document.getElementById("modificaciones");
    ventanaAltas =document.getElementById("altasBarcos");

    document.getElementById("pantalan").value=barco.pantalan;
    document.getElementById("atraque").value=barco.atraque;
    document.getElementById("mano").value=barco.mano;
    document.getElementById("modelo").value=barco.modelo;
    document.getElementById("matricula").value=barco.matricula;
    document.getElementById("marca").value=barco.marca;
    document.getElementById("nifPatronBarco").value=barco.nifPatron;
    document.getElementById("nifPropietarioBarco").value=barco.nifPropietario;

    estaMod=true;//pongo el modo de modificar activado
    document.getElementById("nifPatronBarco").setAttribute.disable("disabled","disabled");
    document.getElementById("nifPropietarioBarco").setAttribute.disable("disabled","disabled");

    ventanaAltas.style.display ="block";
    ventanaMod.style.display ="none";
}

function buscarMatricula(){//busca una matricula y muestra los datos del objeto con esa matricula
    let matriculaa =document.getElementById("matricula").value;
        let esta=true;

        for(i=0;i<barcos.length;i++){
            if(barcos[i].matriculaBarco==matriculaa){           
                esta=false;
                alert("La matricula "+matriculaa+" ya esta dentro");
                i=barcos.length;
            }
        }

        return esta; 
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

function existePatron(barco){//compruebo que el patron exista. Si existe le evito volver a introducir los datos
    let esta=false;
    for(i=0;i<patrones.length;i++){
        if(barco.nifPadron ==patrones[i].nifPadron){
            esta=true;
            i=patrones.length;
        }
    }
    if(esta){
        existePropi(barco);
    }else{
        alert("Ese patron no esta registrado ");
        mostrarPatron(barco.nifPadron);
    }

}

function existePropi(barco){//compruebo que el propietario exista. Si existe le evito volver a introducir los datos
    let esta=false;
    let index;
    for(i=0;i<propietarios.length;i++){
        if(barco.nifPropietario ==propietarios[i].nif){
            esta=true;
            index=i;
            i=propietarios.length;
        }
    }
    if(esta){
        crearPropi(propietarios[index]);

    }else{
        alert("Ese propietario no esta registrado ");
        mostrarPropi();
    }
}
//BARCO
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

    //let dniLetraPropi = sacarDni(parseInt(nifPropi)); 
    //let dniLetraPatro = sacarDni(parseInt(nifPatron)); 

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

    bien=buscarMatricula();//miro si ya esta
    return bien;
}

function deleteBarco(){//Borro un barco//Si el propi no le quedan barcos se va tambien
    matri=document.getElementById("nifBaja").value;//esta seria la matricula del barco a borrar
    let esta=false;
    if(barcos.length<0){
        for(i=0;i<barcos.length;i++){
            if(matri == barcos[i].matriculaBarco){
                let result = window.confirm("Estas seguro?");
                let pro =barcos[i].nifPropietario;
                if(result){
                    alert("Se ha borrado El barco "+barcos[i].matriculaBarco+" correctamente");
                    barcos.splice(i,1);//borro al usuario que a coincidido
                    esta=true;
                    i=barcos.length;
                }
            }
        }
        if(esta){
            esta=false;
            alert("Se ha borrado correctamente");
            for(i=0;i<barcos.length;i++){//busco si ese propietario tiene otro barco
                if(pro==barcos[i].nifPropietario){
                    esta=true;
                }
            }
            if(!esta){//si el propietario no le quedan barcos
                for(i=0;i<propietarios.length;i++){
                    propietarios.splice(i,1);
                    i=propietarios.length;
                }
            }

        }else{
            alert("No se ha encontrado el barco");
        }
    }

}
///PATRON
function validarPatron(){//COMPRUEBO LOS DATOS DEL PATRON(MENOS EL NIF QUE SE COMPRUEBA ANTERIORMENTE)

    nombre=document.getElementById("nombrePatron").value;
    tele=document.getElementById("tlfPatron").value;
    passwdPatron =document.getElementById("passwdPatron").value;
    //let num=parseInt(tele);
    let bien=true;
    if(nombre.length==""){
        alert("Nombre incorrecto");
        a = document.getElementById("nombrePatron");
        a.value="";
        a.focus();
        bien=false;
    }else if(tele.length!=9 || isNaN(tele) ){
       
        alert("Telefono incorrecto");
        a = document.getElementById("tlfPatron");
        a.value="";
        a.focus();
        bien=false;
    }else if(passwdPatron.length==0){
        alert("Contraseña incorrecto");
        a = document.getElementById("passwdPatron");
        a.value="";
        a.focus();
        bien=false;
    }
    return bien;
}
function crearPatron(){//CREO PATRON Y LO INTRODUZCO EN LAS ARRAYS PATRONES Y NO AUTORIZADOS
    let nif=barco.nifPadron;
    //document.getElementById().setAttribute("disabled","disabled");//hacer una etiqueta readonly
     //document.getElementById().removeAttribute("disabled","disabled");//hacer una etiqueta sea editable
    nombre=document.getElementById("nombrePatron").value;
    tele=document.getElementById("tlfPatron").value;
    passwdPatron =document.getElementById("passwdPatron").value;
    let bien=validarPatron();
    if(bien){
        let patron={//Objeto de patrones
            nifPadron:nif,
            nombrePatron:nombre,
            tlfPatron:tele,
            passwd:passwdPatron
        };
        //crear patron
        patrones.push(patron);
        usuario ={
            nombre:patron.nombrePatron,
            passwd:patron.passwd,
        };
        noAutorizados.push(usuario);
        nombre="";
        tele="";
        passwdPatron="";
        nif="";

        existePropi(barco);
        

    }
}

function patronMod(){//Modifico un Patron(POR HACER)

}
//PROPIETARIO
function validarPropi(){//COMPRUEBO LOS DATOS DE PROPIETARIO

    let nombre = document.getElementById("nombrePropi").value;
    let apellido = document.getElementById("apellido1").value;
    let passwd =document.getElementById("passwd").value;
    let telefono =document.getElementById("tlfPropi").value;
    let email =document.getElementById("email").value;
    let iban =document.getElementById("IBAN").value;
    let telefonoo=parseInt(telefono);
    valido=true;
    let a;

    if(nombre.length==0){
        alert("Nombre incorrecto");
        a = document.getElementById("nombrePropi");
        a.value="";
        a.focus();
        valido=false;

    }else if(apellido.length==0 || !isNaN(apellido)){
        alert("Apellidos incorrecto");
        a = document.getElementById("apellido1");
        a.value="";
        a.focus();
        valido=false;
    }else if(passwd.length==0){
        alert("Password incorrecto");
        a = document.getElementById("passwd");
        a.value="";
        a.focus();
        valido=false;
    }else if(telefono.length!=9 || isNaN(telefonoo)){
        alert("Telefono incorrecto: "+telefono);
        a = document.getElementById("tlfPropi");
        a.value="";
        a.focus();
        valido=false;
    }else if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email))){
        alert("Email incorrecto");
        a = document.getElementById("email");
        a.value="";
        a.focus();
        valido=false;

    }else if(!(/[A-Z][0-9]{22}$/.test(iban))){//sinterminar
        alert("IBAN incorrecto");
        a = document.getElementById("IBAN");
        a.value="";
        a.focus();
        valido=false;
        
    }
    return valido;
}
function crearPropiNuevo(){//CREO EL OBJETO DE PROPIETARIO SI NO EXISTIA ANTERIORMENTE
    let niff= document.getElementById("nifPropi").value;
    let nombree = document.getElementById("nombrePropi").value;
    let apellidoo = document.getElementById("apellido1").value;
    let contrase =document.getElementById("passwd").value;
    let telefonoo =document.getElementById("tlfPropi").value;
    let emaill =document.getElementById("email").value;
    let ibann =document.getElementById("IBAN").value;
    let forma =  document.getElementById("formaPago");
    let formaValue =  forma.options[forma.selectedIndex].value; 

    let okey=validarPropi();

    if(okey){
        propietario ={//Objeto de usuarios
            nombre:nombree,
            nif:niff,
            passwd:contrase,
            apellido: apellidoo,
            telefono: telefonoo,
            email:emaill,
            formaPago:formaValue,
            iban:ibann,
        };
        propietarios.push(propietario);
        crearPropi(propietario);
        //llamar a la funcion de crear
    }
}

//tengo lagunas con el funcionamiento de esta funcion
//Introduzco los objetos de barco y propietario y al propietario lo meto en le grupo de no autorizados
function crearPropi(propi){
    barcos.push(barco);
   
    usuario ={
        nombre:propi.nombre,
        passwd:propi.passwd,
    };
    noAutorizados.push(usuario);
    //VACIAR LA CAPA DE ALTAS DE BARCOS
    document.getElementById("pantalan").value="";
    document.getElementById("atraque").value="";
    document.getElementById("matricula").value="";
    document.getElementById("modelo").value="";
    document.getElementById("marca").value="";
    document.getElementById("nifPropietarioBarco").value="";
    document.getElementById("nifPatronBarco").value="";

    //VACIAR LA CAPA DE PROPIETARIOS
    document.getElementById("nifPropi").value="";
    document.getElementById("nombrePropi").value="";
    document.getElementById("apellido1").value="";
    document.getElementById("passwd").value="";
    document.getElementById("tlfPropi").value="";
    document.getElementById("email").value="";
    document.getElementById("IBAN").value="";


    console.log("Array barcos");
    console.log(barcos);
    alert("Se ha completado la accion correctamente");


    mostrarAlta();//le devuelvo a la capa de altas de barcos



}
function propiMod(){//Modifico un Propietario(POR HACER)

}

//OPCIONES PARA USUARIO AUTORIzADO
//EN PROCESO
function registroNoAuto(){
    document.getElementById("btnaltas").style.disable=true;
    document.getElementById("btnBajas").style.disable=true;
    document.getElementById("btnmod").style.disable=true;
    document.getElementById("btnIngresar").style.disable=false;
    document.getElementById("btncon").style.disable=false;
    document.getElementById("btnCopia").style.disable=true;
    document.getElementById("btnPago").style.disable=true;

}

//PARA LAS MODIFICACIONES PEDIR MATRICULA Y SALDARA UN SELECT PARA ELIGIR EL APARTADO QUE MODIFICAR Y LUEGO EN CADA
//UNO HACER LAS MODIFICACIONES
//HACER UN SWITCH OCULTO QUE AL ENTRAR POR MOD LO PONGA A TRUE Y ME CAMBIE EL METODO DEL BOTON FINAL Y LOS CAMPOS A MOD



//esto sirve para las validaciones!!!!!  //NO VA PORQUE LOS BOTONES SON INPUTS
//de momento el email se valida mal 
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

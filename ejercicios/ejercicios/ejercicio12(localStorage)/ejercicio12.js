

let usuarios = [];//array de objetos
let valido =true;
let dniConLetra;

function guardarLocalStorage(usuarioos) {//funcion en la que introduzco un dato en la local storage
    localStorage.clear();
    localStorage.setItem("usuarios",JSON.stringify(usuarioos));
    //console.log(localStorage.getItem("dato")); 
}

function newUsuario() {//funcion que saca la letra del dni del numero
    dnii=document.getElementById("dni").value;
    nombree=document.getElementById("nombre").value;
    apellidoo1=document.getElementById("apellido1").value;
    apellidoo2=document.getElementById("apellido2").value;
    let okey = validarUsuario(dnii,nombree,apellidoo1,apellidoo2);

    
    if(okey){
        okey = validarDni(dnii);
        if(okey){
            alert("Todo a salido correctamente");
            var usuario ={//creo el objeto usuario
            dni:dniConLetra,
            nombre: nombree,
            apellido1: apellidoo1,
            apellido2: apellidoo2
            };
            usuarios.push(usuario);//meto el objeto en la array
            guardarLocalStorage(usuarios);
            let a = document.getElementById("dni");
            a.value="";
            console.log("Nuevo usuario introducido:");
            for(i=0;i<usuarios.length;i++){
                console.log(usuarios[i].dni+"  "+usuarios[i].nombre);
            }
        }else{
            console.log("No a salido correctamente");
        }
    }
}

function validarUsuario(dnii,nombree,apellidoo1,apellidoo2){//compruebo que los datos introducidos tengan sentido
    valido=true;

    if(dnii.length !=8){
        console.log(dnii.length);
        valido = false;
        alert("Introduce un dni correcto");

        let al = document.getElementById("dni");
        al.value="";
        al.focus();

    }else if(!isNaN(nombree) && valido || nombree.length == 0 && valido){
        valido = false;
        alert("Introduce un nombre correctamente");
        let al = document.getElementById("nombre");
        al.value="";
        al.focus();
    }else if(!isNaN(apellidoo1) && valido || apellidoo1.length == 0 && valido){
        valido = false;
        alert("Introduce un apellido1 correctamente");
        let al = document.getElementById("apellidoo1");
        al.value="";
        al.focus();

    }else if(!isNaN(apellidoo2) && valido || apellidoo2.length == 0 && valido){
        valido = false;
        alert("Introduce un apellido2 correctamente");
        let al = document.getElementById("apellido2");
        al.value="";
        al.focus();

    }           
    return valido;
}

function validarDni(dnii){//me aseguro que a introducido el dni correctamente
    let bien=true;
    numeros =parseInt(dnii);
    dniConLetra= sacarDni(dnii);
    for(i=0;i<usuarios.length;i++){//miro si ese dni ya existe en la array
        if(usuarios[i].dni==dniConLetra){
                bien=false;
                alert("Ese dni ya se encuentra registrado");             
        }
    }              
    if(bien){
        if(numeros>100000000 || numeros<0){// numeros.length!=8
                bien=false;
                alert("Los numeros del dni no son correctos");
            }     
    }
    if(!bien){
        let al = document.getElementById("dni");
        al.value="";
        al.focus();
    }  
    return bien;
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

function deleteUsuario(){//borrar un usuario

    dnii=document.getElementById("dni").value;
    nombree=document.getElementById("nombre").value;

    let esta=false;      
    dniConLetra= sacarDni(dnii);
    console.log("valor dnicon letra: "+dniConLetra);

    let a=JSON.parse(localStorage.getItem("usuarios"));
    for(i=0; i<a.length;i++){
        if(a[i].dni==dniConLetra){
            esta=true;
                alert("Dni encontrado");             
        }
    }   
    console.log("Esta:"+esta);

    if(esta){
        console.log("ha encontrado el dni");
        for(i=0;i<usuarios.length;i++){
            if(dniConLetra ==usuarios[i].dni && nombree==usuarios[i].nombre){//si coincide el dni y el nombre
                let result = window.confirm("Estas seguro?");
                if(result){
                    alert("Se ha borrado al usuario "+usuarios[i].dni+" correctamente");
                usuarios.splice(i,1);//borro al usuario que a coincidido
                guardarLocalStorage(usuarios);
                esta=true;
                }
                
            }
        }
        if(!esta){//si el usuario no se encuentra en la array
            alert("El usuario no se encuentra dentro ");
            
        }else{
            let a = document.getElementById("dni");
            a.value="";
            let b = document.getElementById("nombre");
            b.value="";
            let c = document.getElementById("apellido1");
            c.value="";
            let d = document.getElementById("apellido2");
            d.value="";
            for(i=0;i<usuarios.length;i++){
                console.log(usuarios[i].dni+"  "+usuarios[i].nombre);                        
            }
        }
    }
}

function mostrarArray(){//mostrar la array actual en el textArea
    var textarea = document.getElementById("areatxt");
    //textarea.value = JSON.stringify(usuarios);//usuarios.join("\n");  
    textarea.value ="";
    //let a=localStorage.getItem(JSON.parse("usuarios"));
    let a=JSON.parse(localStorage.getItem("usuarios"));
    for(i=0; i<a.length;i++){//escribir en el textarea con la localStorage
        textarea.value =textarea.value+"\n"+a[i].dni+" "+a[i].nombre;
    }
    /*for(i=0;i<usuarios.length;i++){
        textarea.value =textarea.value+"\n"+usuarios[i].dni+" "+usuarios[i].nombre;    
    }*/

    textarea.innerText(textarea.value);
}
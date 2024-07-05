class Students{
    constructor({
        name,
        edad,
        platziID,
        rutas=[],
        instagram= undefined,
        twitter= undefined,
        gmail
    }){
        this.name=name;
        this.edad=edad;
        this.platziID=platziID;
        this.rutas=rutas;
        this.socialMedia={
            instagram,
            gmail,
            twitter
        }


    }
    meterRuta(ruta){
        this.rutas.push(ruta)
    }
}

class RutasDeAprendisaje{
    constructor({
        nombre,
        cursos=[],
        usuarios=[]
    }){
        this.nombre=nombre;
        this.cursos=cursos;
        this.usuarios=usuarios
    }
    introducirCursos(curso){
        this.cursos.push(curso)
    }
    introducirUser(user){
        this.usuarios.push(user)
    }
}



class Curso{
    constructor(
        {
         nombre,
         profesor,
         clases=[]
         
        }
    ){
        this.nombre=nombre;
        this.profesor=profesor;
        this.clases=clases
    }
    introducirClases(clase){
        this.clases.push(clase)
    }
}
class Clases{
    constructor({
        nombre,
        fechaPublicacion,
        recursos={
            archivoDeClase,
            lecturaRecomendada
        },
        hilos={
            usuarios,
            comentarios
        }
    })
    {
        this.nombre=nombre;
        this.fechaPublicacion=fechaPublicacion;
        this.recursos=recursos;
        this.hilos=hilos;

    }
    agregarHilos(usuario,comentario){
        this.hilos.usuarios=usuario
        this.hilos.comentarios=comentario

    }
    agregarRecurso(archivo,lectura){
        this.recursos.archivoDeClase=archivo
        this.recursos.lecturaRecomendada=lectura
    }

}



let ventajasDeLaPOO = new Clases({
    nombre:"Ventajas de la programación orientada a objetos",
    fechaPublicacion: "23-06-2021",
    recursos:{
        archivoDeClase:"main.js",
        lecturaRecomendada:"vs code key bindings"
    },
    hilos:{
        usuarios:"luis",
        comentarios:"que buena clase"
    }
})

// let luis= new Students({
//     name:"luis Barrionuevo",
//     edad:24,
//     platziID:37427,
//     twitter:"luis_b12",
//     gmail:"Luisito.barrionuevo@gmail.com",
//     materiasAprobadas:[programacionUno,orgEmpresarial]
// })
// ventajasDeLaPOO.agregarHilos("pedrito33","no me gusto una mierda el curso")



let jsOrientadoAObjetos= new Curso ({
    nombre: "Js Orientado a Objetos",
    profesor: "pedrito10",
    clases : ventajasDeLaPOO   
}

)
let jS= new RutasDeAprendisaje({
    nombre:"Ruta de aprendisaje de Javascript",
    cursos:jsOrientadoAObjetos
})
let luis_b12 = new Students({ name:"luis Barrionuevo",
     edad:24, 
     platziID:2345,
     rutas:jS, 
     instagram:"luisb_12",
    twitter:"luisgg", })
console.log(jS)
console.log(luis_b12)

jS.introducirUser(luis_b12)
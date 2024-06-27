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
        this.carrera=carrera;
        this.rutas=rutas;
        this.socialMedia={
            instagram,
            gmail,
            twitter
        }


    }
    aprobarMateria(materia){
        this.materiasAprobadas.push(materia)
    }
}

class RutasDeAprendisaje{
    constructor({
        nombre,
        cursos=[],
    }){
        this.nombre=nombre;
        this.cursos=cursos;

    }
    introducirCursos(curso){
        this.cursos.push(curso)
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


console.log(ventajasDeLaPOO)
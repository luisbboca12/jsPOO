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
        this._name=name;
        this._edad=edad;
        this.platziID=platziID;
        this.rutas=rutas;
        this.socialMedia={
            instagram,
            gmail,
            twitter
        }
        


    }
    get name(){
        return this._name
    }
    set name(newName){
        if (newName != name) {
            console.error("no puedes cambiar el nombre")
            
        }else{
            console.warn("Porque intentas reasignar tu nombre? Okey lo hare pero es el mismo y no puedes cambiarlo por aca")
            this._name=newName
        }
        
    }
    get edad(){
        return this._edad
    }
    set edad(newEdad){
        this._edad= newEdad
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
// luis_b12.edad= 29


jS.introducirUser(luis_b12)
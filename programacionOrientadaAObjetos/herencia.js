class Curso {
    constructor({
        nombre,
        profesor,
        clases = [],
        isFree = false
    }) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.clases = clases;
        this.isFree = isFree;
    }

    introducirClases(clase) {
        this.clases.push(clase);
    }
}


class Students{
    constructor({
        name,
        edad,
        platziId,
        cursosAprobados=[],
        gmail= undefined,
        twitter= undefined,
        instagram= undefined,


        
    }){
        this._edad=edad
        this._name= name
        this.platziId=platziId
        this.cursosAprobados=cursosAprobados
        this.socialMedia={
            gmail,
            twitter,
            instagram
        }
        
    }
    
    
}


class FreeStudent extends Students {
    constructor(props){
        super(props)
    }

    aprobarCurso(curso){
        if(curso.isFree){
            this.cursosAprobados.push(curso)
        }else{
            console.warn("No puedes cursar un curso pago")
            
        }
    }
}
class BasicStudent extends Students{
    constructor(props){
        super(props)
    }
    aprobarCurso(curso){
        this.cursosAprobados.push(curso)
        console.log("se a añadido el curso "+"'"+ curso.nombre +"'"+" a la lista de cursos aprobados")
    }
}

 let luis = new BasicStudent({
    name: "Luis Barrionuevo",
    instagram: "luis_b12",
    gmail:"luisito.barrionuevodeboca@gmail.com",
    edad: 24,
    platziId:37427
})
let carlos = new FreeStudent({
    name:"Carlos Jerez",
    instagram: "carlos_jerez",
    gmail:"carlitosjerez@gmail.com",
    edad:56,
    platziId:19292,
    twitter:"carlos_223"
})

let ventajasDeLaPOO = ["Encapsulación", "Herencia", "Polimorfismo", "Abstracción"];
let fundamentosDeReact = ["JSX", "Componentes", "Props", "State", "Lifecycle"];
let basesDeDatosSQL = ["Introducción a SQL", "Consultas Básicas", "Joins", "Funciones", "Procedimientos Almacenados"];
let desarrolloWeb = ["HTML", "CSS", "JavaScript", "Frameworks", "SEO"];
let machineLearning = ["Introducción", "Algoritmos", "Regresión", "Clasificación", "Redes Neuronales"];

let jsOrientadoAObjetos = new Curso({
    nombre: "Js Orientado a Objetos",
    profesor: "pedrito10",
    clases: ventajasDeLaPOO,
    isFree: true
});

let cursoFundamentosDeReact = new Curso({
    nombre: "Fundamentos de React",
    profesor: "maria23",
    clases: fundamentosDeReact,
    isFree: false
});

let cursoBasesDeDatosSQL = new Curso({
    nombre: "Bases de Datos SQL",
    profesor: "juanito99",
    clases: basesDeDatosSQL,
    isFree: false
});

let cursoDesarrolloWeb = new Curso({
    nombre: "Desarrollo Web",
    profesor: "ana_innova",
    clases: desarrolloWeb,
    isFree: true
});

let cursoMachineLearning = new Curso({
    nombre: "Machine Learning",
    profesor: "carlos_ai",
    clases: machineLearning,
    isFree: false
});
console.log(luis)
function Student(name,edad,id,cursosAprobados) {
    this.name= name;
    this.edad= edad;
    this.id=id;
    this.cursosAprobados=cursosAprobados
    this.aprobarCurso = function(nuevocurso){
        this.cursosAprobados.push(nuevocurso)
    }
    
}

let luis = new Student(
    "Luis",
    24,
    37427,
    ["POO","C#"]

)
console.log(luis)
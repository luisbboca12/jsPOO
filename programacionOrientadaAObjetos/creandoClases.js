class Students2 {
    constructor({
        name,
        age,
        cursosaprobados=[],
        twitter,

    }){
        this.name= name
        this.age=age
        this.cursosaprobados=cursosaprobados
        this.twitter=twitter

    }
  aprobarCurso(nuevocurso) {
    this.cursosaprobados.push(nuevocurso)
        
    }
}



let maria= new Students2(
    {
      age: 23,
      name: "luis",
      cursosaprobados: ["matematicas2","organizacion empresarial"]
    }
  
)
console.log(maria)
maria.aprobarCurso("dybala")
console.log(maria)
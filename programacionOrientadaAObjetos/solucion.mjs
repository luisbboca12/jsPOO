export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito !== "string") {
        console.log("Parce no puedes hacer eso");
      } else {
        this._name = nuevoNombrecito[0].toUpperCase() + nuevoNombrecito.slice(1);
      }
    }
  }


  const courseName = "ssssss"
  const nombreMayusculas = new Course({
      name: courseName,
  })
  

nombreMayusculas.name= 23
console.log(nombreMayusculas)

//Todas las funciones deben recibir datos dinamicos
/*
Cacular promedio de estatura
catidad de mujeres y hombres
Asignar cada calificacion a su respectivo estudiante por id
*/

const students = [
  { id: 1, name: "juan", age: 17, height: 1.60, gender: 'M' },
  { id: 4, name: "pedro", age: 15, height: 1.90, gender: 'M' },
  { id: 2, name: "ana", age: 16, height: 1.65, gender: 'F' },
  { id: 3, name: "sofia", age: 17, height: 1.72, gender: 'F' },
  { id: 6, name: "pedro", age: 12, height: 1.70, gender: 'M' },
  { id: 5, name: "rosa", age: 19, height: 1.67, gender: 'F' },
];

const califications = [
  { id: 1, calification: 5 },
  { id: 4, calification: 5 },
  { id: 3, calification: 5 },
  { id: 2, calification: 1 },
  { id: 5, calification: 3 },
  { id: 6, calification: 4 },
]

const media = ( average ) => {
    const totalHeight = average.reduce((acc, student) => acc + student.height, 0);
    const averageHeight = totalHeight / average.length;

    return averageHeight;
}

console.log(media(students));

const filterToGender = (genderList) => {
    const maleGender = genderList.filter((person) => person.gender === 'M').length
    const femaleGender = genderList.filter((person) => person.gender === 'F').length

    return `Female: ${femaleGender} - Male: ${maleGender}`
}

console.log(filterToGender(students))

const updatedStudents = [];

const qualificationList = (totalStudents, qualifications) => {

    totalStudents.forEach((student) => {
    const calification = qualifications.find((cal) => cal.id === student.id);
    const updatedStudent = { ...student, calification: calification.calification };
    updatedStudents.push(updatedStudent);
  });
  return updatedStudents
}

console.log(qualificationList(students, califications));


    

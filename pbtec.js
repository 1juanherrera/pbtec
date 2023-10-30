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
    let mCount = 0;
    let fCount = 0;

    for (const student of genderList) {
    if (student.gender === 'M') {
    mCount++;
    } else if (student.gender === 'F') {
    fCount++;
    }
}

console.log(`Male ${mCount}`);
console.log(`Female: ${fCount}`);

}

filterToGender(students)


const qualificationsList = (qualifications) => {

    const studentCalifications = {};
    for (const calification of qualifications) {
    const student = students.find((s) => s.id === calification.id);
    if (student) {
    if (!studentCalifications[student.id]) {
      studentCalifications[student.id] = [];
    }
    studentCalifications[student.id].push(calification.calification);
  }
}
console.log('Qualifications:', studentCalifications);
}

qualificationsList(califications)



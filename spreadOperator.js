const array1 = [2,4,6];
const array2 = [8,10,12];

//merging arrays
const combined = [...array1, ...array2];
console.log(combined);

//copying andadding new elements
const newArray = [...array1, 15];
console.log(newArray);

//spreading with objects
const student = { name: "Fortune", matricNo: "24/2509"};
const updatedStudent = {...student, course: "BU-COS 209"};
console.log(updatedStudent);

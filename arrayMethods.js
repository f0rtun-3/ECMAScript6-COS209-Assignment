let scores = [10,20,45,50,70];

//the map method
const doubledScores = scores.map(nums => nums * 2 ); // [20,40,90,100,140]

//the filter method
const evenScores = scores.filter(nums => nums % 2 === 0); // [10,20,50,70]

//the push method
scores.push(90, 110);
console.log(scores); // scores becomes [10,20,45,50,70,90,110]

//the splice method
scores.splice(1,1);
console.log(scores) // scores becomes [10,45,50,70,90,110]
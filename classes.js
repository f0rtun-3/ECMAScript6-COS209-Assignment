class Course{
    constructor (course1, course2){
        this.course1 = course1;
        this.course2 = course2;
    }

        showResult(){
            return `I offer both ${this.course1} and ${this.course2} in Babcock University`;
        }
}

const sentence = new Course("BU-COS209", "SEN 201");
console.log(sentence.showResult());  // I offer both BU-COS209 and SEN201 in Babcock Univeristy
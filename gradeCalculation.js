function gradeCalc(){

let grade;
switch(true){
    case(score>=90):
    grade="A";
    break;
    case(score>=70 && score<=89):
    grade="B";
    break;
    case(score>=50 && score<=69):
    grade="C";
    break;
    default:
    grade="D";

}
return grade;
}
let score=50
let result=gradeCalc(score)
console.log(result)
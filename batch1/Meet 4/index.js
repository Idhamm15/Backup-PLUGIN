// switch case
var nilai = prompt("input nilai")
var grade = ""

switch (nilai){
    case nilai < 90:
        console.log(grade = "A")
    break;
    case nilai < 80 :
        grade = "B" 
    break;
    case nilai < 70 :
        grade = "C"
    break;
    case nilai < 60 :
        grade = "D"         
    break;
    default:
        grade = "E"      
}
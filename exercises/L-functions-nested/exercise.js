var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function greet(mentor){
    return ("Hello "+ mentor);

}
function spellName(mentor, greet){
    return(mentor + greet.toUpperCase);
    

}
console.log(greet(mentor1).toUpperCase());
console.log(greet(mentor2).toUpperCase());
console.log(greet(mentor3).toUpperCase());
console.log(greet(mentor4).toUpperCase());
console.log(greet(mentor5).toUpperCase());




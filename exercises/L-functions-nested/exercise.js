var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function greeting(mentor){
    return ("Hello "+ mentor);

}
function spellName(mentor, greet){
    return(mentor + greeting.toUpperCase);
    

}
console.log(greeting(mentor1).toUpperCase());
console.log(greeting(mentor2).toUpperCase());
console.log(greeting(mentor3).toUpperCase());
console.log(greeting(mentor4).toUpperCase());
console.log(greeting(mentor5).toUpperCase());




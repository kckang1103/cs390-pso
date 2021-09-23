let letVar = "let";
var varVar = "var";
const constVar = "const";

console.log(letVar, varVar, constVar);

const actors = ["Daniel Radcliffe", "Emma Watso", "Rupert Grint"]
console.log(actors);

actors.forEach(actor => console.log(actor));
let newActors = actors.map(actor => "hello " + actor);
console.log(newActors);

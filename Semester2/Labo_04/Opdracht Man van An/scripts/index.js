let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoekTerm = "an";

let index = -1;
let tellerIndexOf = 0;

while ((index = tekst.indexOf(zoekTerm, index + 1)) !== -1) {
    tellerIndexOf++;
}

console.log(`Met indexOf: De sequentie "${zoekTerm}" komt ${tellerIndexOf} keer voor.`);

index = tekst.length;
let tellerLastIndexOf = 0;

while ((index = tekst.lastIndexOf(zoekTerm, index - 1)) !== -1) {
    tellerLastIndexOf++;
}

console.log(`Met lastIndexOf: De sequentie "${zoekTerm}" komt ${tellerLastIndexOf} keer voor.`);
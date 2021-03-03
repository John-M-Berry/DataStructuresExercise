// ONE A
let jedi=[];

// ONE B
jedi[jedi.length]="Luke";
console.log(jedi);

// ONE C
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// ONE D
jedi.unshift("Yoda");
console.log(jedi);

// ONE E
console.log(jedi[1]);

// ONE F
console.log(jedi.pop());
console.log(jedi);

// ONE G
console.log(jedi.shift());
console.log(jedi);

// TWO A
const sithLords=[
    "Darth Vader",
    "Darth Sidious",
    "Darth Maul"
];
console.log(sithLords);

// TWO B
const imperialOfficers=[
    "Grand Moff Tarkin",
    "Orson Krennic"
]
console.log(imperialOfficers);

// TWO C
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// TWO D
console.log(starWarsVillians.slice(0, 2));

// THREE A
const droids={
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}
console.log(droids);

// THREE B
console.log(droids["astromech"]);

// THREE C
console.log(droids.protocol);

// THREE D
// droids.splice(2,1,"IG-88","IG-11");
console.log(droids);



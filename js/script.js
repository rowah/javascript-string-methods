//charAt
const firstName = "James";
const initialsIndex = 0;

const nameInitial = firstName.charAt(initialsIndex);
console.log(nameInitial); //J
console.log(firstName.charAt(firstName.length - 1)); //s

//charCodeAt
const nameInitialCode = firstName.charCodeAt(initialsIndex);
console.log(
  `The ASCII code for first letter of my first name is ${nameInitialCode}`
);
console.log(firstName.charCodeAt(firstName.length - 1));
console.log(firstName.charCodeAt(8));

//concat
const secondName = "Rowa";
const fullName = firstName.concat(" ", secondName);
console.log(fullName); //James Rowa
console.log(fullName.concat(["Nairobi", "Kenya"])); //James RowaNairobi,Kenya

//includes
console.log(fullName.includes("jam")); //false (case-sensitivity)
console.log(fullName.includes("Jam")); //true
console.log(fullName.includes("Jam", 1)); //false (position starts at 1)
console.log(fullName.includes("R")); //TRUE

//indexOf
const sentence =
  "My eldest brother, also called Rowa, and I share the name Rowa";
const sharedName = "Rowa";
const namesFirstIndex = sentence.indexOf(sharedName);
console.log(
  `In the sentence, the name ${sharedName.toLocaleUpperCase()} appears first at index ${namesFirstIndex} and also at index ${sentence.indexOf(
    sharedName,
    namesFirstIndex + 1
  )}.`
);
console.log(sentence.indexOf());
console.log(sentence.indexOf("rowa"));
console.log(sentence.indexOf(" ")); //2
//we add one to the index the word first appears so that the second search just assumed the already existing first name and searches going forward from index 39.
console.log(sentence.indexOf(""));

//trim()
const whiteSpacedStr = " I have white spaces ";
console.log(whiteSpacedStr.length);
const trimmedStr = whiteSpacedStr.trim();
console.log(trimmedStr.length);

//toLowerCase()
console.log(fullName.toLowerCase()); //james rowa

//toUpperCase()
console.log(firstName.toUpperCase()); //JAMES

//substr()
console.log(firstName.substr(1, 3)); //ame
console.log(firstName.substr(5, 1)); //returns an empty string
console.log(firstName.substr(-1, 1)); //s

//split()
console.log(fullName.split("")); //['J', 'a', 'm', 'e', 's', ' ', 'R', 'o', 'w', 'a']
console.log(fullName.split("", 5)); //['J', 'a', 'm', 'e', 's']
console.log(fullName.split(" ")); //['James', 'Rowa']
console.log(fullName.split("", 0)); //[]
console.log(
  "I, James Rowa, do swear that, I understand string methods, JavaScript".split(
    ","
  ) //['I', ' James Rowa', ' do swear that', ' I understand string methods', ' JavaScript']
);

//slice()
console.log(fullName.slice(5)); //Rowa
console.log(fullName.slice(0, 5)); //James
console.log(fullName.slice(-5)); //Rowa
console.log(fullName.slice(3, -3)); //es R
console.log(fullName.slice(0)); //James Rowa
console.log(fullName.slice()); //returns empty string

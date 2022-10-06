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

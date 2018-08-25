const bananaDiv = document.getElementById('bananas');
bananasDiv.innerHTML = 'im a banana';

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

// counter = 3
console.log(counter);
console.log('counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = 'trevor';
const lastName = 'mckey';

//greetingElement.innerHTML = 'Hello my name is Trevor';

greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// object shorthand notation

let name = 'trevor';
let age = '10000000';

let person = {name,age};

console.log('person:', person.name);
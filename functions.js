// input = animal ex. fish
// output = animal product ex. fish sticks

function nuggetizer(animal){
    return `${animal} stix`

};

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};
console.log('deer:', nuggetizer2('deer'));

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

const bearSticks = nuggetizer2('bear');

const nomnom = (person, food) => {
    return `${person} devoured ${food};`
};
console.log(nomnom('trevor', bearSticks)); //trevor devoured bear sticks

//function numberAdder that takes in a number and
//return the number plus 3. so input=22, output =25.

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22);
numberAdder(2);
numberAdder(4);


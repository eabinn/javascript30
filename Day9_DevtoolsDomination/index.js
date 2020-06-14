const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello world!!');

// Interpolated
console.log('Hello world!!', '😇😇😇');

// Styled
console.log('%c Hello world!!!', 'font-size: 20px; color: #BADA55');

// warning!
console.warn('Hello world 🤯🤯🤯');

// Error :|
console.error('xxx');
console.clear();
// Info
console.info('hah....??? no way!');

// Testing
const p = document.querySelector('p');
//console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.age} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('inbae');
console.count('inbae');
console.count('inbae');
console.count('inbae');
console.count('inbae');
console.count('inbae');
console.count('inbae');
console.count('inbae');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/inbaeyoonkr')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.table(data);
  });

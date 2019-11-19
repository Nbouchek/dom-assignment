// task 1.1
const task1Answer1 = document.getElementById('task-1');
const task1Answer2 = document.querySelector('#task-1');
const task1Answer3 = document.querySelector('li');

// task 1.2
task1Answer1.style.backgroundColor = 'black';
task1Answer1.style.color = 'white';

// task 2 - method 1
// const docTitle1 = document.querySelector('title');
// docTitle1.textContent = 'Task solved!';

// task 2 - method 2
const docTitle2 = document.head.querySelector('title');
docTitle2.textContent = 'Taks solved!';

// task 3
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';

//where to add
const list=document.getElementById('some-random-name');

//what to be added
const li=document.createElement('li');
li.innerText="Some random name";

//add the child
list.appendChild(li)


const mainConatainer=document.getElementById('main-container');
console.log(mainConatainer);

const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List'
section.appendChild(h1)

const ul=document.createElement('ul');
const li1=document.createElement('li');
const li2=document.createElement('li');
const li3=document.createElement('li');
const li4=document.createElement('li');

li1.innerText='biriyani';
ul.appendChild(li1);

li2.innerText='biriyani';
ul.appendChild(li2);

li3.innerText='biriyani';
ul.appendChild(li3);

li4.innerText='biriyani';
ul.appendChild(li4);

section.appendChild(ul)

mainConatainer.appendChild(section)
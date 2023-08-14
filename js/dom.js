console.log("Hello from TRISHA");
console.log(document.body);

const liCollection=document.getElementsByTagName('li');
// console.log(liCollection);

// for (const li of liCollection){
//     console.log(li.innerText)
// }

const className=document.getElementsByClassName('list-name');
console.log(className)

const idName=document.getElementById('bash')
idName.innerText="They never changed at all!";
console.log(idName)

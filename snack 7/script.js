const array = [1,33,55,64,33,22,10,44];


function getNewPElement (content){
    const newP = document.createElement('p');
    newP.innerText = content;
    return newP;
}

const divPari = document.getElementById('green');
const divDispari = document.getElementById('red');



// function oddOrEven (arrayElement,divEven,divOdd){
//     for (i=0; i<arrayElement.length; i++){
//         if(arrayElement[i]%2===0){
//             document.getElementById(divEven).appendChild(arrayElement[i]);
//         } else {
//             document.getElementById(divOdd).appendChild(arrayElement[i]);
//         }
//     }
// }

// oddOrEven(array,'green','red');
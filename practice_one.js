/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

const mysubHeading = document.querySelector('h2');
mysubHeading.textContent = 'I am Najiyyah';*/

/*let icecream = 'choclate';
if (icecream === 'chocolate') {
    alert('Yay! I love you!');
} else {
    alert('But chocolate is my favourite');
}*/

/*function multiply(num1, num2){
    let result = num1*num2
    return result
}*/

const myImage = document.querySelector('img');
myImage.onclick = () => {
    const source = myImage.getAttribute('src');
    if (source === 'shoe_1.png') {
        myImage.setAttribute('src', 'shoe_2.png')
    }
    else{
        myImage.setAttribute('src', 'shoe_1.png')
    }
};

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
function setUserName(){
    const myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    /**myHeading.textContent = 'Chrome is cool, ${myName}';
}**/
    if (!localStorage.getItem('name')) {
        setUserName();
    }
    else{
        const storedName = localStorage.getItem('name');
        myHeading.textContent = 'Google chrome is cool, ${storedName}';
    }
};
myButton.onclick = () => {
    setUserName();
};



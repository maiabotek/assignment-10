//code copied from https://jsfiddle.net/macloo/z6mq5x2c/
const captionOne = document.querySelector('#captionOne');
const imageOne = document.querySelector('#imageOne');

const text1 = "You might think the squares in the center are different colors. Hover over the image to see.";
const text2 = "Notice how both colors remain the same.";

imageOne.onmouseenter = (e) => {
   e.target.classList.remove('mirror');
   e.target.classList.add('mirrorBack');
   captionOne.textContent = text2;
};
imageOne.onmouseleave = (e) => {
   e.target.classList.add('mirror');
   e.target.classList.remove('mirrorBack');
   captionOne.textContent = text1;
};

//code copied from https://jsfiddle.net/macloo/ek38g2hL/
const clicker = document.querySelector('#captionTwo');
const image = document.querySelector('#imageTwo');

image.style.display = 'none';
const show = document.querySelector('#showimage');

clicker.onclick = () => {
   image.style.display = 'block';
   show.style.display = 'none';
};

image.onclick = () => {
   image.style.display = 'none';
   show.style.display = 'block';
};

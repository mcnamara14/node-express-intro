const button = document.querySelector('button');
const heading = document.querySelector('h1');

const buttonClick = () => {
  if (heading.style.color === '' || heading.style.color === 'blue') {
    heading.style.color = 'purple'
  } else if (heading.style.color === 'purple') {
    heading.style.color = 'blue'
  }
}

button.addEventListener('click', buttonClick);

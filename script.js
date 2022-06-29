let mainWrapper = document.querySelector('#wrapper');
let joke = document.createElement('div');
let button = document.createElement('button');
button.textContent = 'Give me a joke!';
mainWrapper.append(button);

function callJoke(){
fetch('https://api.chucknorris.io/jokes/random')
    .then(res => {
        joke.textContent = 'Loading...';
        return res.json();
    })
    .then((data) => {
        console.log(data.value);
         
        joke.textContent = `${data.value}`;
        mainWrapper.append(joke, button);
    })
};

button.addEventListener('click', () => {
    callJoke();
})

    
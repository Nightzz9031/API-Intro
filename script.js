let mainWrapper = document.querySelector('#wrapper');
let joke = document.createElement('div');
let categoryOptions = document.querySelector('select');
const form = document.querySelector('form');
let button = document.createElement('button');
button.textContent = 'Give me a joke!';
mainWrapper.append(button);

fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => {
        return res.json();
    })
    .then(category => {
        category.map(category => {
            let categoryOption = document.createElement('option');
            categoryOption.textContent = category;
            categoryOption.value = category;
            categoryOptions.append(categoryOption);
        })
    })

button.addEventListener('click', () => {
function callJoke(){
    fetch(`https://api.chucknorris.io/jokes/random?category=${categoryOptions.value}`)
    .then(res => {
        joke.textContent = 'Loading...';
        return res.json();
    })
    .then((data) => {
        joke.textContent = `${data.value}`;
        mainWrapper.append(joke);
    })
};


    callJoke();
})

function searchJoke(){
    let searchForm = document.querySelector('#search-form');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let searchInput = event.target.elements['search-input'].value;

        fetch('https://api.chucknorris.io/jokes/search?query=' + searchInput)
            .then(res => res.json())
            .then(jokes => {
                if(jokes.total > 0){
                let randomIndex = Math.floor(Math.random() * jokes.total);

                console.log(jokes.result[randomIndex].value);
                joke.textContent = jokes.result[randomIndex].value;
                }else{
                    joke.textContent = 'No jokes found :(';
                }
            })
    })
}
searchJoke();

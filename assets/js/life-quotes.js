const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const lifeQuotes = ['With great power comes great responsibility', 'Life without dreams is like a bird with a broken wing - it can\'t fly', 'Success is not final, failure is not fatal - it is the courage to continue what counts.', 
'Sometimes, later becomes never. Do it now.', 'The best way to get something done is to begin.', 'Life can only be understood backwards; but it must be lived forwards.', 'Great things take time.', 'As long as you believe, it is possible.',
'Great things never come from comfort zones.', 'See the good in yourself and in others.', 'Success comes from knowing that you did your best to become the best that you are capable of becoming.', 'When we allow ourselves to fail, we also give ourselves permission to succeed.']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const nav = document.querySelector('.nav')

window.addEventListener('DOMContentLoaded', function(){
    let defaultValue = 'Sometimes, later becomes never. Do it now.';
    document.querySelector('#quotes').textContent = defaultValue

})

btn.addEventListener('click', function(){
    let quotes = '';
    for(let i=0; i<13; i++){
        quotes = lifeQuotes[getRandomQuote()]
    }
    document.querySelector('#quotes').textContent = quotes

    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
    nav.style.backgroundColor = hexColor
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

function getRandomQuote(){
    return Math.floor(Math.random() * lifeQuotes.length)
}

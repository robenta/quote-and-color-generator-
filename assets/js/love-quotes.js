const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const loveQuotes = ['To love and be loved is to feel the sun from both sides.                                     - DAVID VISCOTT', 'The love we give away is the only love we keep.                                      - ELBERT HUBBARD', 'All that you are is all that i\'ll ever need.                                      - ED SHEERAN', 'What we have once enjoyed, we can never lose. all that we love deeply becomes a part of us.                                      - HELEN KELLER', 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.                                      - DR SEUSS', 'Love has nothing to do with what you are expecting to get- only with what you are expecting to give- which is everything.                                      - KATHERINE HEPBURN',
'Unable to perceive the shape of you, I find you all around me. Your presence fills my eyes with your love. It humbles my heart. For you are everywhere.                                      - HAKIM SANAI', 'My heart is and always will be yours.                                      - JANE AUSTEN', 'Have enough courage to trust love one more time and always one more time.                                      - MAYA ANGELOU', 'The supreme happiness of life consists in the conviction that one is loved.                                      - VICTOR HUGO', 'Love is so short, forgetting is so long.                                      - PABLO NERUDA', 'Love is like the wind, you can\'t see it. But you can feel it.                                      - NICHOLAS SPARKS', 'True love bears all, endures all, and triumphs!                                      - DADA VASWANI', 'Life is hard. Love shouldn\'t be hard too.                                      - ROBENTA']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const nav = document.querySelector('.nav')

window.addEventListener('DOMContentLoaded', function(){
    let defaultValue = 'Unable to perceive the shape of you, I find you all around me. Your presence fills my eyes with your love. It humbles my heart. For you are everywhere. - HAKIM SANAI';
    document.querySelector('#loveQuotes').textContent = defaultValue

})
btn.addEventListener('click', function(){
    let loveQ = '';
    for(let i=0; i<15; i++){
        loveQ = loveQuotes[getRandomQuote()]
    }
    document.querySelector('#loveQuotes').textContent = loveQ

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
    return Math.floor(Math.random() * loveQuotes.length)
}

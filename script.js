var btn = document.querySelector('button')
var play = document.querySelector('#playground')

var quotes = [
    'Winner takes it all.',
    'if you think you can do it you are right',
    'if you think you are a bad i am you dad(lol)',
    'when you have a dream you got to grap it never let go',
    'chaos is not a pit its a ladder'
]
var colors = ['red', 'pink', 'blue', 'yellow', 'green', 'cyan','teal']

btn.addEventListener('click', function () {
    var h = document.createElement('h6')

    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    h.innerHTML = randomQuote
    h.style.color = randomColor
    h.style.position = 'absolute'
    h.style.left = Math.random() * 100 + '%'
    h.style.top = Math.random() * 100 + '%'
    h.style.rotate = Math.random() * 360 + 'deg'
    

    play.appendChild(h)
})
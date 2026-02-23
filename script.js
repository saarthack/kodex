var body = document.body 

var audio = new Audio()
audio.src = './faaa.mp3'

body.addEventListener('keydown',function(dets){
    if(dets.code == 'Enter'){
        audio.play()
    }
    
})
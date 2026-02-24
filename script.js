var allCards = document.querySelectorAll('.card')

allCards.forEach(function(elem){

    elem.childNodes[5].addEventListener('click',function(){
        if(elem.childNodes[3].innerHTML == 'Stranger'){
            elem.childNodes[3].innerHTML = 'Friends'
            elem.childNodes[3].style.color = 'green'
            elem.childNodes[5].innerHTML = 'Remove Friend'
        }else{
            elem.childNodes[3].innerHTML = 'Stranger'
            elem.childNodes[3].style.color = 'red'
            elem.childNodes[5].innerHTML = 'Add Friend'
        }
    })
    
})
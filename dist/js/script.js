// 

let menuItem = document.querySelector('.menu-block__item--mobile'),
    wrapperMenu = document.querySelector('.menu-block__wrapper');

menuItem.addEventListener('click', function(){
    if(wrapperMenu.classList.contains('open')){
        wrapperMenu.classList.remove('open');
    }else{
        wrapperMenu.classList.add('open');
    }
})
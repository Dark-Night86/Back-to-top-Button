'use strict' 

var button = document.querySelector('.scroll-to-top');


//* button active/inactive => 

window.addEventListener('scroll' , () => {
    if(window.scrollY > 200) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
});


//* scroll and animations =>

var scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

button.addEventListener('click' , () => { 

    button.classList.add('animation');
    
    setTimeout(() => {
        button.classList.remove('animation');
    }, 550);   

    scrollToTop()
});

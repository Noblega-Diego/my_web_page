
function  porsentajedeScroll() {
    return (100 * window.scrollY)/(document.body.scrollHeight - screen.height);
}
window.addEventListener('scroll', function(evt){
    //let blur = (porsentajedeScroll() +10);
    //let presentacionn = document.querySelector('.blur');
    
    //presentacionn.setAttribute('style', `backdrop-filter: blur(${blur}px);`);
    //let headerOne = document.querySelector('#header');
    //console.log(window.scrollY +" porciento:"+ porsentajedeScroll() +"%");
},false);
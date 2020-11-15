
function  porsentajedeScroll() {
    return (100 * window.scrollY)/(document.body.scrollHeight - screen.height);
}
function activarMenu(){
    let items = document.getElementsByClassName("item");
    for(itm of items){
        if(itm.classList.contains("active")){
            itm.classList.remove("active");
        }else{
            itm.classList.add("active");
        }
    }
}
let buttonnMenu = document.getElementById("buttonMenu");
buttonnMenu.addEventListener("click", function(evt){activarMenu()})
let itemsLinks =document.getElementsByClassName("item-link");

for(itemLink of itemsLinks){
    itemLink.addEventListener("click", function(evt){activarMenu()});
}

//window.addEventListener('scroll', function(evt){


    //let blur = (porsentajedeScroll() +10);
    //let presentacionn = document.querySelector('.blur');
    
    //presentacionn.setAttribute('style', `backdrop-filter: blur(${blur}px);`);
    //let headerOne = document.querySelector('#header');
    //console.log(window.scrollY +" porciento:"+ porsentajedeScroll() +"%");
//},false);
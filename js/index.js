const proyects = document.getElementsByClassName("proyect");

//cargar svg
document.addEventListener('DOMContentLoaded',()=>{
    const svgs = [...document.querySelectorAll('svg[data-src]')];
    svgs.forEach(svg =>{
        fetch(svg.dataset.src)
            .then(data=>data.text())
            .then(xml=>{
                svg.innerHTML = xml;
                const viewBox = svg.querySelector('svg').getAttribute('viewBox');
                svg.setAttribute('viewBox',viewBox)
            })
    })
})

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

const arrayProyects = [...proyects];
arrayProyects.forEach(proyect =>{
    const video = proyect.getElementsByTagName('video')[0];
    if(video != null){
    proyect.addEventListener('mouseover',event=>{
        if(video.paused || video.ended || video.seeking || video.readyState < video.HAVE_FUTURE_DATA){
            video.play().then().catch()
        }
    })
    proyect.addEventListener('mouseout',event=>{
        video.pause()
    })
    }
});
//window.addEventListener('scroll', function(evt){


    //let blur = (porsentajedeScroll() +10);
    //let presentacionn = document.querySelector('.blur');
    
    //presentacionn.setAttribute('style', `backdrop-filter: blur(${blur}px);`);
    //let headerOne = document.querySelector('#header');
    //console.log(window.scrollY +" porciento:"+ porsentajedeScroll() +"%");
//},false);
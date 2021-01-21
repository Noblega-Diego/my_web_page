const proyects = document.getElementsByClassName("proyect");

const cargarSvg = (svg,url) =>{
    fetch(url)
            .then(data=>data.text())
            .then(xml=>{
                svg.innerHTML = xml;
                const viewBox = svg.querySelector('svg').getAttribute('viewBox');
                svg.setAttribute('viewBox',viewBox);
            })
}

const insertProyect = (element,data) => {
    const tecs = ['javascript','html','css','php','laravel','react'];
    const linksAccepted = ['github'];
    const proyect = document.createElement('article');
    proyect.classList.add('proyect');
    //proyect__info
    const info = document.createElement('div');
    const title = document.createElement('h1');
        title.innerText = data.name;
        title.classList.add('proyect__title');
    const listTec = document.createElement('ul');
        listTec.classList.add('proyect__list');
    const listFragment = document.createDocumentFragment();
    data.tecnologies.forEach(tec => {
        let tecname;
        for (const te of tecs) {
            if(tec.toLowerCase() === te.toLowerCase()){
                tecname = tec.toLowerCase();
                break;
            }else{
                tecname = 'default';
            }
        }
        const li = document.createElement('li');
        const divtec = document.createElement('span');
        divtec.innerText= tec;
        divtec.classList.add('inline-decorator',`inline-${tecname}`);
        li.appendChild(divtec);
        listFragment.appendChild(li);
        

    });
    listTec.appendChild(listFragment);
    const deg = document.createElement('div');
        deg.classList.add('proyect__efect');

        
    //insertamos los hijos del proyect__info
    info.classList.add('proyect__info');
    info.appendChild(title);
    info.appendChild(listTec);
    info.appendChild(deg);

    const cont = document.createElement('div');
    cont.classList.add('proyect__content');
    
    const preview = document.createElement('div');
    preview.classList.add('proyect__preview');

    const listLinks = document.createElement('ul');
        listLinks.classList.add('proyect__links');
    const listLinksFragment = document.createDocumentFragment();
    data.links.forEach(link => {
        let linkname = '';
        for (const lin of linksAccepted) {
            if(link.title.toLowerCase() === lin.toLowerCase()){
                linkname = link.title.toLowerCase();
                break;
            }else{
                linkname = 'www';//default
            }
        }
        const li = document.createElement('li');
        const spanTex = document.createElement('span');
        spanTex.classList.add('inline__text');
        spanTex.innerText = link.title;
        const a = document.createElement('a');
        a.classList.add('inline-decorator', 'inline-hover',`inline-${linkname}`);
        a.setAttribute('href',link.url);
        const svg = document.createElement('svg');
        let svgname;
        svgname = linkname +'.svg';
        cargarSvg(svg,`/assets/svg/${svgname}`)
        a.appendChild(spanTex);
        a.appendChild(svg);
        li.appendChild(a);
        listLinksFragment.appendChild(li);
        
    });
    let contentPreview;
    if(data.content.type === 'video'){
        contentPreview = document.createElement('video');
        contentPreview.src = data.content.url; 
    }else{
        contentPreview = document.createElement('img');
    }
    preview.appendChild(contentPreview);
    listLinks.appendChild(listLinksFragment);
    cont.appendChild(preview);
    cont.appendChild(listLinks);
    proyect.appendChild(cont);
    proyect.appendChild(info);
    
    element.appendChild(proyect);
}


//cargar svg
document.addEventListener('DOMContentLoaded',()=>{
    const svgs = [...document.querySelectorAll('svg[data-src]')];
    svgs.forEach(svg =>{
        cargarSvg(svg,svg.dataset.src);
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

const proyect = {
    name:'reloj de estudio (tecnica pomodoro)',
    tecnologies:['CSS','HTML','JavaScript'],
    links:[
        {title:'github',url:'https://github.com/diexes/Clock_Study_pomodoro'},
        {title:'web page',url:'https://diexes.github.io/Clock_Study_pomodoro'},

    ],
    content:{
        type:'video',
        url:'assets/video/video.webm'
    }
}
const list = document.getElementById('proyectos_list');
list.addEventListener('mouseover',e =>{
    const element = e.target;
    if(element.tagName.toLowerCase() === 'video'){
        element.loop = true;
        if(element.paused || element.ended || element.seeking || element.readyState < element.HAVE_FUTURE_DATA){
            element.play().then().catch(err=>{
                console.log(err)
            });
        }
    }
});

list.addEventListener('click',e =>{
    const element = e.target;
    if(element.tagName.toLowerCase() === 'video'){
        element.loop = true;
        if(element.paused || element.ended || element.seeking || element.readyState < element.HAVE_FUTURE_DATA){
            element.play().then().catch(err=>{
                console.log(err)
            });
        }
    }
})
list.addEventListener('mouseout',e=>{
    const element = e.target;
    if(element.tagName.toLowerCase() === 'video'){
        element.pause()
    }
})
insertProyect(list,proyect);
//window.addEventListener('scroll', function(evt){


    //let blur = (porsentajedeScroll() +10);
    //let presentacionn = document.querySelector('.blur');
    
    //presentacionn.setAttribute('style', `backdrop-filter: blur(${blur}px);`);
    //let headerOne = document.querySelector('#header');
    //console.log(window.scrollY +" porciento:"+ porsentajedeScroll() +"%");
//},false);
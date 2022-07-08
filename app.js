let more = document.querySelector('.click');
let about = document.querySelector('#about');
let home = document.querySelector('#home');
let nav = document.querySelector('.nav');
let paddie = document.querySelector('#paddie');
let drop = document.querySelector('#drop');
let title =document.querySelector('.title');
let view = document.querySelector('.view');
let close  = document.querySelector('.close');
let cv = document.querySelector('.cv');

view.addEventListener('click', ()=>{
    cv.style.display = "block";
});

close.addEventListener('click', ()=>{
    cv.style.display = "none";
});
more.addEventListener('click', (env)=>{
    env.preventDefault();
    about.scrollIntoView({behavior: "smooth"});
});

home.addEventListener('click', (env)=>{
    env.preventDefault();
    nav.scrollIntoView({behavior: "smooth"});
});
let dropOut = ()=>{
    if(drop.style.display == "block"){
        setTimeout(() => { 
            drop.style.display = 'none';
        }, 10000);
    }
}

paddie.addEventListener('click', (env)=>{
    env.preventDefault();
    if (drop.style.display == 'none'){
        drop.style.display = 'block';
    } else {
        drop.style.display = 'none';
    }
    dropOut();
})
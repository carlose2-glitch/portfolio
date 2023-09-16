const home = document.querySelector('.click-home');
const projects = document.querySelector('.click-projects');
const contact = document.querySelector('.click-contact');
const iconHamburguer = document.getElementById('icon-hamburguer');
const iconX = document.getElementById('icon-x');
const navHamburguer = document.querySelector('.container_nav-phone');
const clickHomeNav = document.querySelector('.click_home-nav');
const clickProjectsNav = document.querySelector('.click_projects-nav');
const clickContactNav = document.querySelector('.click_contact-nav');





/* eventos de la cabecera*/
home.addEventListener('click', e =>{
    location.href = './#main';
});

projects.addEventListener('click', e =>{

    location.href = './#projects';
    
});

contact.addEventListener('click', e =>{

    location.href = './#contact';

})
iconHamburguer.addEventListener('click', e =>{

        navHamburguer.style.display = 'flex';
        iconHamburguer.style.display = 'none';
        iconX.style.display = 'flex';
})

iconX.addEventListener('click', e =>{

    navHamburguer.style.display = 'none';
    iconHamburguer.style.display = 'flex';
    iconX.style.display = 'none';
})
/* eventos del click del menu hamburguesa*/
clickHomeNav.addEventListener('click', e =>{
    
    deleteIconX('./#main', navHamburguer, iconHamburguer, iconX);
})
clickProjectsNav.addEventListener('click', e =>{
       deleteIconX('./#projects', navHamburguer, iconHamburguer, iconX);
})
clickContactNav.addEventListener('click', e =>{
    deleteIconX('./#contact', navHamburguer, iconHamburguer, iconX);
})


const deleteIconX = (direction, container, iconHamburguer, iconX) => {
    location.href = direction;
    container.style.display = 'none';
    iconHamburguer.style.display = 'flex';
    iconX.style.display = 'none';
}
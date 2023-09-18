const home = document.querySelector('.click-home');
const projects = document.querySelector('.click-projects');
const contact = document.querySelector('.click-contact');
const iconHamburguer = document.getElementById('icon-hamburguer');
const iconX = document.getElementById('icon-x');
const navHamburguer = document.querySelector('.container_nav-phone');
const clickHomeNav = document.querySelector('.click_home-nav');
const clickProjectsNav = document.querySelector('.click_projects-nav');
const clickContactNav = document.querySelector('.click_contact-nav');
const btnGuiaTelf = document.querySelector('.telefonica-btn');
const btnListaTareas = document.querySelector('.tareas-btn');
const btnMemorama = document.querySelector('.momerama-btn');





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
btnGuiaTelf.addEventListener('click', e =>{
    e.preventDefault();
    location.href = 'https://carlose2-glitch.github.io/guia-telefonica/';
})
btnListaTareas.addEventListener('click', e =>{
    e.preventDefault();
    location.href = 'https://carlose2-glitch.github.io/lista-de-tareas/';
})
btnMemorama.addEventListener('click', e=>{
    e.preventDefault();
    location.href = 'https://carlose2-glitch.github.io/memorama-completo/';
} )


const deleteIconX = (direction, container, iconHamburguer, iconX) => {
    location.href = direction;
    container.style.display = 'none';
    iconHamburguer.style.display = 'flex';
    iconX.style.display = 'none';
}

// const btn = document.getElementById('button');

// document.getElementById('form').addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_kj4dc0m';
   

//    emailjs.sendForm(serviceID, templateID, this)
//    .then(() => {
//       btn.value = 'Send Email';
//       alert('mensaje enviado');
//       console.log(emailjs.sendForm);
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });
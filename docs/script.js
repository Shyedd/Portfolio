const thethrees = document.querySelector('.thethrees');
const containers = document.querySelectorAll('.thethrees > div');
const pageContainer = document.querySelector('.container');
const logo = document.querySelector('.logo');
const form = document.getElementById("contactForm");
const messageDiv = document.getElementById("message");
const retryButton = document.getElementById("retryButton");
containers.forEach(container => {container.addEventListener('mouseover', () => {
        thethrees.classList.add('dimmed'); });
    container.addEventListener('mouseout', () => {
        const isHoveringAny = Array.from(containers).some(c => c.matches(':hover'));
        if (!isHoveringAny) {thethrees.classList.remove('dimmed'); }});});
containers.forEach(container => {const text = container.querySelector('.scrolling-text');
    container.addEventListener('mouseover', () => {
        text.style.animation = 'scrollText 2.5s linear forwards'; });
    container.addEventListener('mouseout', () => {
        text.style.animation = 'none'; });});
let currentX = 0;
let currentY = 0;
const container = document.querySelector('.container');
const containerProjets = document.querySelector('.container-projets');
const containerProfil = document.querySelector('.container-profil');
const containerContact = document.querySelector('.container-contact');
function navigateWithTransition(transition, target) {
    let intermediateX = currentX;
    let intermediateY = currentY;
    switch (transition) {case 'transition-left':
            intermediateX = 100;
            break;
        case 'transition-right':
            intermediateX = -100;
            break;
        case 'transition-bottom':
            intermediateY = -100;
            break;}
    container.style.transform = `translate(${intermediateX}%, ${intermediateY}%)`;
    setTimeout(() => {navigateTo(target);}, 1000); }
function navigateTo(target) {
    switch (target) {case 'page-3': 
            currentX = 200;
            currentY = 0;
            break;
        case 'page-5': 
            currentX = -200;
            currentY = 0;
            break;
        case 'page-7': 
            currentX = 0;
            currentY = -200;
            break;
        case 'page-1': 
            currentX = 0;
            currentY = 0;
            break;}
    container.style.transform = `translate(${currentX}%, ${currentY}%)`;}
containerProjets.addEventListener('click', () => {navigateWithTransition('transition-left', 'page-3');});
containerProfil.addEventListener('click', () => {navigateWithTransition('transition-bottom', 'page-7');});
containerContact.addEventListener('click', () => {navigateWithTransition('transition-right', 'page-5');});
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
prevBtn.addEventListener('click', () => {currentIndex = (currentIndex > 0) ? currentIndex - 1 : 4; 
  updateCarousel();});
nextBtn.addEventListener('click', () => {currentIndex = (currentIndex < 4) ? currentIndex + 1 : 0; 
  updateCarousel();});
function updateCarousel() {
  const offset = -currentIndex * 300; 
  carousel.style.transform = `translateX(${offset}px)`;}
const navigationImages = document.querySelectorAll('.navigation-left, .navigation-right, .navigation-top');
navigationImages.forEach(image => {image.addEventListener('click', () => {
        navigateTo('page-1'); });});
document.querySelectorAll('.button-voirplus1').forEach(button => {button.addEventListener('click', function () {
        const container = this.closest('.container-projet1');
        const isExpanded = container.classList.contains('expanded');
        if (!isExpanded) {container.querySelectorAll('.img-projet1, .text-projet').forEach(el => {el.classList.add('fade-out'); 
                setTimeout(() => {el.style.display = 'none'; }, 500); });
            setTimeout(() => {const newContent = document.createElement('div');
                newContent.className = 'expanded-content';
                newContent.innerHTML = `
                    <img src="img/new-img-projet1.png" alt="Jeu de l'oie" class="new-image">
                    <div class="new-text">
                        <h3>Projet Jeu de l'Oie</h3>
                        <p>Plateau du jeu de l'oie</p>
                    </div>`;
                container.appendChild(newContent);
                newContent.classList.add('fade-in'); }, 500); 
            container.classList.add('expanded');
            this.textContent = 'voir moins';} else {const newContent = container.querySelector('.expanded-content');
            if (newContent) {newContent.classList.add('fade-out'); 
                setTimeout(() => {newContent.remove(); }, 500); }
            setTimeout(() => {container.querySelectorAll('.img-projet1, .text-projet').forEach(el => {
                    el.style.display = 'flex'; 
                    el.classList.remove('fade-out'); 
                    el.classList.add('fade-in'); });}, 600);
            container.classList.remove('expanded');
            this.textContent = 'voir plus';}});});
document.querySelectorAll('.button-voirplus2').forEach(button => {button.addEventListener('click', function () {
        const container = this.closest('.container-projet2');
        const isExpanded = container.classList.contains('expanded');
        if (!isExpanded) {container.querySelectorAll('.img-projet1, .text-projet').forEach(el => {
                el.classList.add('fade-out'); 
                setTimeout(() => {el.style.display = 'none'; }, 500); });
            setTimeout(() => {const newContent = document.createElement('div');
                newContent.className = 'expanded-content';
                newContent.innerHTML = `
                    <img src="img/new-img-projet2.png" alt="Site avec des images de film" class="new-image">
                    <div class="new-text">
                        <h3>Projet Matching</h3>
                        <p>Nous avons créé un site web qui avait pour but grâce à une base de données de repertorier (pour notre cas) des films.</p>
                    </div>`;
                container.appendChild(newContent);
                newContent.classList.add('fade-in'); }, 500); 
            container.classList.add('expanded');
            this.textContent = 'voir moins';} else {const newContent = container.querySelector('.expanded-content'); if (newContent) {
                newContent.classList.add('fade-out'); 
                setTimeout(() => {newContent.remove(); }, 500); }
            setTimeout(() => {container.querySelectorAll('.img-projet1, .text-projet').forEach(el => {
                    el.style.display = 'flex'; 
                    el.classList.remove('fade-out'); 
                    el.classList.add('fade-in');});}, 600);
            container.classList.remove('expanded');
            this.textContent = 'voir plus';}});});
document.querySelectorAll('.button-voirplus3').forEach(button => {button.addEventListener('click', function () {
        const container = this.closest('.container-projet3');
        const isExpanded = container.classList.contains('expanded');
        if (!isExpanded) {container.querySelectorAll('.img-projet1, .text-projet').forEach(el => {el.classList.add('fade-out'); 
                setTimeout(() => {el.style.display = 'none'; }, 500); });
            setTimeout(() => {const newContent = document.createElement('div');
                newContent.className = 'expanded-content';
                newContent.innerHTML = `
                    <img src="img/new-img-projet3.png" alt="Image du site web actuel" class="new-image">
                    <div class="new-text">
                        <h3>Projet Portfolio</h3>
                        <p>Description</p>
                    </div>`;
                container.appendChild(newContent);
                newContent.classList.add('fade-in'); }, 500); 
            container.classList.add('expanded');
            this.textContent = 'voir moins';} else {
            const newContent = container.querySelector('.expanded-content');
            if (newContent) {newContent.classList.add('fade-out'); 
                setTimeout(() => {newContent.remove(); }, 500); }
            setTimeout(() => {container.querySelectorAll('.img-projet1, .text-projet').forEach(el => {el.style.display = 'flex'; 
                    el.classList.remove('fade-out'); 
                    el.classList.add('fade-in'); });}, 600);
            container.classList.remove('expanded');
            this.textContent = 'voir plus';}});});
document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);
        console.log("Envoi de données non implémenté");
        form.style.display = "block";
        messageDiv.style.display = "none";
        retryButton.style.display = "none";
        form.reset();});
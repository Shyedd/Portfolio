document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Merci, votre message a bien été envoyé !");
        document.getElementById("contactForm").reset();
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});

window.addEventListener('scroll', () => {
    const gradientBlur2 = document.querySelector('.gradient-blur2');
    const offset = 50;
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - offset)) {
        gradientBlur2.style.transform = 'translateY(150px)';
    } else {
        gradientBlur2.style.transform = 'translateY(0)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.interactive');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.1)';
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
        });
    });

    const observedDivs = document.querySelectorAll('.card');

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                setTimeout(() => {
                    target.removeAttribute('data-aos-delay');
                    observer.unobserve(target);
                }, 2000);
            }
        });
    };

    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.1
    });

    observedDivs.forEach(div => observer.observe(div));
});

function parseDigit(str) {
    const result = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
    return { tdeg: result[0], tox: result[1], toy: result[2] };
}

function MoveBackground(e) {
    const background = document.querySelector('.background');
    background.style.transform = `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
}

document.addEventListener('mousemove', MoveBackground);

function parseDigit(str) {
    const result = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v);
    return { tdeg: result[0], tox: result[1], toy: result[2] };
}

function MoveBackground(e) {
    const background = document.querySelector('.background');
    background.style.transform = `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
}

document.addEventListener('mousemove', MoveBackground);
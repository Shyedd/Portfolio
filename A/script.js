/* document.addEventListener('DOMContentLoaded', () => {
    const observedDivs = document.querySelectorAll('.card');

    Callback function to execute when intersections are observed
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                Wait for 4 seconds
                setTimeout(() => {
                    Remove the data-aos-delay attribute
                    target.removeAttribute('data-aos-delay');
                    Stop observing the current target
                    observer.unobserve(target);
                }, 2000);
            }
        });
    };

    Create an Intersection Observer
    const observer = new IntersectionObserver(callback, {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    Start observing each div with the class .card
    observedDivs.forEach(div => observer.observe(div));
});
*/
// anim bg home

window.addEventListener('load', () => {document.querySelector('svg').style.height = 'auto';document.querySelector('svg').style.width = '100%';var body_tree = {"id":"490:35","name":"Frame24","type":"FRAME","deep_level":0,"locked":false,"children":[{"id":"490:26","name":"Vector6","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector6","svg_node":{}},{"id":"490:27","name":"Vector7","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector7","svg_node":{}},{"id":"490:29","name":"Vector9","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector9","svg_node":{}},{"id":"490:30","name":"Vector10","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector10","svg_node":{}},{"id":"490:25","name":"Vector5","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector5","svg_node":{}},{"id":"490:24","name":"Vector4","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector4","svg_node":{}},{"id":"490:28","name":"Vector8","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector8","svg_node":{}},{"id":"490:31","name":"Vector11","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"490:35","svg_node_id":"Vector11","svg_node":{}}],"visible":true,"svg_node_id":"Frame24","svg_node":{}};document.addEventListener('mousemove', function (e) { MoveBackground(e); });function parseDigit(str) { var result = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v); return { tdeg: result[0], tox: result[1], toy: result[2] }};function MoveBackground(e) {body_tree.children.forEach((elemennt, index) => {var el = document.getElementById(elemennt.svg_node_id);if (elemennt.locked || !el) return;var ind = index + 1;var i = ind;var offsetX = (event.clientX / window.innerWidth * 30 * i * 0.35) - 15 * i * 0.35;var offsetY = (event.clientY / window.innerHeight * 30 * i * 0.35) - 15 * i * 0.35;var transform = el?.getAttribute('transform')?.match(/rotate\(.*\)/);if (false) {const xOrigin = document.querySelector('body').getBoundingClientRect().width / 2;const yOrigin = document.querySelector('body').getBoundingClientRect().height / 2;const yRot = (event.clientX - xOrigin) / xOrigin * -25;const xRot = (event.clientY - yOrigin) / yOrigin * 25;let {tdeg, tox, toy} = transform ? parseDigit(transform[0]) : {tdeg: null, tox: null, toy: null};el.style.transformOrigin = (transform && (tox || toy)) ? `${tox}px, ${toy}px` : 'center';el.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px) ' + (transform ? ` rotate(${tdeg}deg)` : '') + ` rotateX(${xRot}deg) rotateY(${yRot}deg)`;} else {let {tdeg, tox, toy} = transform ? parseDigit(transform[0]) : {tdeg: null, tox: null, toy: null};el.style.transformOrigin = (transform && (tox || toy)) ? `${tox}px, ${toy}px` : 'none';el.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px)' + (transform ? ` rotate(${tdeg}deg)` : '' );}});}})

//bg contact

window.addEventListener('load', () => {document.querySelector('svg').style.height = 'auto';document.querySelector('svg').style.width = '100%';var body_tree = {"id":"690:323","name":"Frame25","type":"FRAME","deep_level":0,"locked":false,"children":[{"id":"690:324","name":"Vector6","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector6","svg_node":{}},{"id":"690:325","name":"Vector7","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector7","svg_node":{}},{"id":"690:326","name":"Vector9","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector9","svg_node":{}},{"id":"690:327","name":"Vector10","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector10","svg_node":{}},{"id":"690:328","name":"Vector5","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector5","svg_node":{}},{"id":"690:329","name":"Vector4","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector4","svg_node":{}},{"id":"690:330","name":"Vector8","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector8","svg_node":{}},{"id":"690:331","name":"Vector11","type":"VECTOR","deep_level":1,"locked":false,"children":[],"visible":true,"p_id":"690:323","svg_node_id":"Vector11","svg_node":{}}],"visible":true,"svg_node_id":"Frame25","svg_node":{}};document.addEventListener('mousemove', function (e) { MoveBackground(e); });function parseDigit(str) { var result = str.match(/(-?\d+(\.\d+)?)/g).map(v => +v); return { tdeg: result[0], tox: result[1], toy: result[2] }};function MoveBackground(e) {body_tree.children.forEach((elemennt, index) => {var el = document.getElementById(elemennt.svg_node_id);if (elemennt.locked || !el) return;var ind = index + 1;var i = ind;var offsetX = (event.clientX / window.innerWidth * 30 * i * 0.35) - 15 * i * 0.35;var offsetY = (event.clientY / window.innerHeight * 30 * i * 0.35) - 15 * i * 0.35;var transform = el?.getAttribute('transform')?.match(/rotate\(.*\)/);if (false) {const xOrigin = document.querySelector('body').getBoundingClientRect().width / 2;const yOrigin = document.querySelector('body').getBoundingClientRect().height / 2;const yRot = (event.clientX - xOrigin) / xOrigin * -25;const xRot = (event.clientY - yOrigin) / yOrigin * 25;let {tdeg, tox, toy} = transform ? parseDigit(transform[0]) : {tdeg: null, tox: null, toy: null};el.style.transformOrigin = (transform && (tox || toy)) ? `${tox}px, ${toy}px` : 'center';el.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px) ' + (transform ? ` rotate(${tdeg}deg)` : '') + ` rotateX(${xRot}deg) rotateY(${yRot}deg)`;} else {let {tdeg, tox, toy} = transform ? parseDigit(transform[0]) : {tdeg: null, tox: null, toy: null};el.style.transformOrigin = (transform && (tox || toy)) ? `${tox}px, ${toy}px` : 'none';el.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px)' + (transform ? ` rotate(${tdeg}deg)` : '' );}});}})

window.addEventListener('scroll', () => {
    const gradientBlur2 = document.querySelector('.gradient-blur2');
    const offset = 50; // Ajustez cette valeur selon vos besoins
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - offset)) {
        gradientBlur2.style.transform = 'translateY(150px)';
    } else {
        gradientBlur2.style.transform = 'translateY(0)';
    }
});
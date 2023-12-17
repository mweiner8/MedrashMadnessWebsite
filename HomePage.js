const nav = document.querySelector('nav');
nav.classList.remove('active');
window.addEventListener('scroll', fixNav);

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 5) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}

const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})

let lightboxTitle = "Medrash Slideshow";

let imgFiles = ["Medrash1.jpeg", "Medrash2.jpeg", "Medrash3.jpeg", 
                "Medrash4.jpeg", "Medrash5.jpeg", "Medrash6.jpeg", 
                "Medrash7.jpeg", "Medrash8.jpeg", "Medrash9.jpeg", 
                "Medrash10.jpeg", "Medrash11.jpeg", "Medrash12.jpeg", 
                "Medrash13.jpeg", "Medrash14.jpeg", "Medrash15.jpeg"]

let imgCount = imgFiles.length;

window.addEventListener("load", createLightbox);

function createLightbox() {
    let lightbox = document.getElementById("lightbox");

    let lbCounter = document.createElement("div");
    let lbPrev = document.createElement("div");
    let lbNext = document.createElement("div");
    let lbPlay = document.createElement("div");
    let lbImages = document.createElement("div");
    
    lightbox.appendChild(lbCounter);
    lbCounter.id = "lbCounter";
    let currentImg = 1;
    lbCounter.textContent = currentImg + " / " + imgCount;

    lightbox.appendChild(lbPrev);
    lbPrev.id = "lbPrev";
    lbPrev.innerHTML = "&#9664;"
    lbPrev.onclick = showPrev;
    
    lightbox.appendChild(lbNext);
    lbNext.id = "lbNext";
    lbNext.innerHTML = "&#9654;"
    lbNext.onclick = showNext;
    
    lightbox.appendChild(lbPlay);
    lbPlay.id = "lbPlay";
    lbPlay.innerHTML = "&#9199;"
    let timeId = window.setInterval(showNext, 1500);
    lbPlay.onclick = function() {
        if (timeId) {
            window.clearInterval(timeId);
            timeId = undefined;
        } else {
            showNext();
            timeId = window.setInterval(showNext, 1500);
        }
    }
    
    lightbox.appendChild(lbImages);
    lbImages.id = "lbImages";
    
    for (let i = 0; i < imgCount; i++){
        let image = document.createElement("img");
        image.src = imgFiles[i];
        if (i == 12){
            image.id = "medrashPic13";
        } else {
            image.id = "medrashPic";
        }
        lbImages.appendChild(image);
    }

    function showNext() {
        lbImages.appendChild(lbImages.firstElementChild);
        (currentImg < imgCount) ? currentImg++ : currentImg = 1;
        lbCounter.textContent = currentImg + " / " + imgCount;
    }

    function showPrev() {
        lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
        (currentImg > 1) ? currentImg-- : currentImg = imgCount;
        lbCounter.textContent = currentImg + " / " + imgCount;
        window.clearInterval(timeId);
        timeId = undefined;
    }

}
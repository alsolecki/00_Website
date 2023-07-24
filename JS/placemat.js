
const pmImage = document.getElementById('placemat');

//Placemat Swap

function pmSwap() {
    pmImage.classList.replace('pmInformal','pmFormal');
}

function pmFood() {
    pmImage.classList.add('pmFood1')
}

function pmSwapBack() {
    pmImage.classList.replace('pmFormal','pmInformal');
}

pmImage.addEventListener('click', (e) => {
    if (e.target.classList == 'pmInformal') {
        pmSwap();} else {pmSwapBack();}
    });

const item = document.getElementsByClassName('circle item')[3];
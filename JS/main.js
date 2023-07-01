

const circle1 = document.getElementById('button-01');
const circle2 = document.getElementById('button-02');
const circle3 = document.getElementById('button-03');
const circle4 = document.getElementById('button-04');
const circle5 = document.getElementById('button-05');


function resume() {
    console.log("I'm the resume!");
}

function sofocoDems() {
    console.log("I'm the SoFoCoDems Flyer!")
}

function exhibitGallery() {
    console.log("I'm the exhibit gallery!")
}

function foodClock() {
    console.log("I'm the Food Clock!")
}

function wizards() {
    console.log("I'm the Wizards page!")
}



//EVENT LISTENERS

circle1.addEventListener('click', () => {
    resume();
})

circle1.addEventListener('mouseenter', () => {
    circle1.classList.add('grow');
})
circle1.addEventListener('mouseleave', () => {
    circle1.classList.remove('grow');
})



circle2.addEventListener('click', () => {
    sofocoDems();
})
circle2.addEventListener('mouseenter', () => {
    circle2.classList.add('grow');
})
circle2.addEventListener('mouseleave', () => {
    circle2.classList.remove('grow');
})


circle3.addEventListener('click', () => {
    exhibitGallery()
});
circle3.addEventListener('mouseenter', () => {
    circle3.classList.add('grow');
})
circle3.addEventListener('mouseleave', () => {
    circle3.classList.remove('grow');
})

circle4.addEventListener('click', () => {
    foodClock()
});

circle5.addEventListener('click', () => {
    wizards()
});



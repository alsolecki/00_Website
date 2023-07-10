

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

function path() {
    console.log("I'm the Pathway page!")
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

/**
 * button two
 */

circle2.addEventListener('click', () => {
    sofocoDems();
})
circle2.addEventListener('mouseenter', () => {
    circle2.classList.add('grow');
})
circle2.addEventListener('mouseleave', () => {
    circle2.classList.remove('grow');
})

/**
 * button three
 */

circle3.addEventListener('click', () => {
    exhibitGallery()
});
circle3.addEventListener('mouseenter', () => {
    circle3.classList.add('grow');
})
circle3.addEventListener('mouseleave', () => {
    circle3.classList.remove('grow');
})

/**
 * button four
 */

circle4.addEventListener('click', () => {
    foodClock()
});

/**
 * button five
 */
circle5.addEventListener('click', () => {
    path()
});
circle5.addEventListener('mouseenter', () => {
    circle5.classList.add('grow');
});
circle5.addEventListener('mouseleave', () => {
    circle5.classList.remove('grow');
});



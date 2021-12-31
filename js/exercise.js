const accordionVerbList = document.querySelector('#accardion-verb-list');
const exerciseVerb = document.querySelector('#verb-holder');
const showBtn = document.querySelector('#showBtn');
const clearBtn = document.querySelector('#clearBtn');
const inputV1 = document.querySelector('#v1-input');
const inputV2 = document.querySelector('#v2-input');
const inputV3 = document.querySelector('#v3-input');
const addonV1 = document.querySelector('#v1-addon');
const addonV2 = document.querySelector('#v2-addon');
const addonV3 = document.querySelector('#v3-addon');

let max = verbList.length - 1;
let keepIndex = 0;
accordionVerbList.innerHTML = verbList.map((verb, index) => {
    return `
    <div class="col-2 mb-3"><a href="#" role="button" onclick="newVerbExercise(${index})">${verb.verb1Name}</a></div>
    `;
}).join("");

function randomInt(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}
// * This functions brings turkish meaning of the a verb
let index = randomInt(0, max);
function newVerbExercise(indexNum) {
    exerciseVerb.innerHTML =
        `
        ${verbList[indexNum].verbTurkish}
 `;
    //keepindex will be used to check if or not entered verb is correct
    keepIndex = indexNum;
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
    makeWrong();
}

//show Button
showBtn.addEventListener('click', function () {
    inputV1.value = verbList[keepIndex].verb1Name;
    inputV2.value = verbList[keepIndex].verb2Name;
    inputV3.value = verbList[keepIndex].verb3Name;
    addonV1.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;
    addonV2.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;
    addonV3.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;

})

// Clear Button
clearBtn.addEventListener('click', function () {
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
    makeWrong();
})

// Checking if inputs entries are correct
inputV1.addEventListener('input', function (event) {
    let listenInput = event.target.value;
    if (verbList[keepIndex].verb1Name == listenInput) {
        addonV1.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;
    }
})
inputV2.addEventListener('input', function (event) {
    let listenInput = event.target.value;
    if (verbList[keepIndex].verb2Name == listenInput) {
        addonV2.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;
    }
})
inputV3.addEventListener('input', function (event) {
    let listenInput = event.target.value;
    if (verbList[keepIndex].verb3Name == listenInput) {
        addonV3.innerHTML = `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`;
    }
})
// Function for to change icons at once
function makeWrong() {
    addonV1.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>`;
    addonV2.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>`;
    addonV3.innerHTML = `<i class="fa fa-times-circle" aria-hidden="true"></i>`;
}
newVerbExercise(index);

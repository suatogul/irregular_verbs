const accordionVerbList = document.querySelector('#accardion-verb-list');
const exerciseVerb = document.querySelector('#verb-holder');
const showBtn = document.querySelector('#showBtn');
const clearBtn = document.querySelector('#clearBtn');
const inputV1 = document.querySelector('#v1-input');
const inputV2 = document.querySelector('#v2-input');
const inputV3 = document.querySelector('#v3-input');

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

let index = randomInt(0, max);
function newVerbExercise(indexNum) {
    exerciseVerb.innerHTML =
        `
        ${verbList[indexNum].verbTurkish}
 `;
    keepIndex = indexNum;
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
}

//show Button
showBtn.addEventListener('click', function () {
    inputV1.value = verbList[keepIndex].verb1Name;
    inputV2.value = verbList[keepIndex].verb2Name;
    inputV3.value = verbList[keepIndex].verb3Name;

})

// Clear Button
clearBtn.addEventListener('click', function () {
    inputV1.value = '';
    inputV2.value = '';
    inputV3.value = '';
})
newVerbExercise(index);

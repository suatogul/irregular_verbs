const accordionVerbList = document.querySelector('#accardion-verb-list');
const exerciseVerb = document.querySelector('#verb-holder');
let max = verbList.length - 1;
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

}

newVerbExercise(index);

let learnVerbs = document.querySelector('#learn-verb');
const button = document.querySelector('#newverb');
function randomInt(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
}
let max = verbList.length - 1;



function newVerb() {
    let index = randomInt(0, max);
    learnVerbs.innerHTML =
        `
        <tr>
        <th class="table-primary">Verb</th>
        <td>${verbList[index].verb1Name}</td>
        <td>${verbList[index].verb2Name}</td>
        <td>${verbList[index].verb3Name}</td>
      </tr>
      <tr>
        <th class="table-primary">Pron</th>
        <td>${verbList[index].verb1Pronunciation}</td>
        <td>${verbList[index].verb2Pronunciation}</td>
        <td>${verbList[index].verb3Pronunciation}</td>
      </tr>
      <tr>
        <th class="table-primary">Turkish</th>
        <td colspan="3" class="text-center">${verbList[index].verbTurkish}</td>
      </tr>
 `;

}

newVerb();
/**
 * ?Analyse
 * * Index page will be created by using verblist
 *     *Each row and column will be added by script
 * *
 */

let irrVerbs = document.querySelector('#verblist');
console.log(verblist);


irrVerbs.innerHTML = verbList
    .map((verb) => {
        return `
        <tr>
        <th>${verb.verb1Name}</th>
        <td>${verb.verb2Name}</td>
        <td>${verb.verb3Name}</td>
        <td>${verb.verb1Pronunciation}</td>
        <td>${verb.verb2Pronunciation}</td>
        <td>${verb.verb3Pronunciation}</td>
        <td>${verb.verbTurkish}</td>
      </tr>
 `;
    })
    .join("");
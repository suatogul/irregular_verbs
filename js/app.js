/**
 * ?Analyse
 * * Index page will be created by using verblist.js
 *     *Each row and column will be added from the verblist.js by script
 * *Learn page will be created
 *     *Table will be created
 *     *Random number function will be written
 *     *By onclick() event the funtion will be triggered 
 *     *The same function will be called, when the page loaded. 
 *        *Otherwise inside the table will be emmpty when the page refreshed.
 * *Exercise page will be created
 *     *Page will be designed
 *     *Accordion verb list will be inserted when the page was loaded
 *     *Each verb on the list will have an onclick() event to change the word on the exercise part
 *     *When "New" button is clicked, a new verb in Turkish will be shown   
 *     *When "Show" button is clicked, three past participate forms of the written verb will be shown in the inputs
 *     *When "Clear" button is clicked, input group will be cleared
 */

const irrVerbs = document.querySelector('#verblist');
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

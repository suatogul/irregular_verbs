const accordionVerbList = document.querySelector('#accardion-verb-list');

accordionVerbList.innerHTML = verbList.map((verb) => {
    return `
    <div class="col-2 mb-3"><a href="#" onclick="">${verb.verb1Name}</a></div>
    `;
}).join("");
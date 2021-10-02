import {categories, categoriesHeaders, notes, notesHeaders} from './data.js';

const createTag = (tag) => {
    return document.createElement(tag);
};

const insertChild = (parent, child) => {
    return parent.appendChild(child);
};

const addText = (elem, text) => {
    return elem.textContent = text;
};

let notesTable = document.querySelector('#notes');
// let categoriesTable = document.querySelector('#categories');

let tHead = createTag('thead');
let tBody = createTag('tbody');

const table = createTag('table');
table.classList.add('table');
insertChild(notesTable, table);
tHead.classList.add('thead-light');
insertChild(table, tHead);
insertChild(table, tBody);

const createHead = () => {
    const tableHeadRow = createTag('tr');
    insertChild(tHead, tableHeadRow);
    notesHeaders.map((key, index) => {
        const colHead = createTag('th');
        tableHeadRow.setAttribute('scope', 'col');
        insertChild(tableHeadRow, colHead);
        key === 'edit' || key === 'to archive' || key === 'delete' ? addText(colHead, ' ') : addText(colHead, key + ' ');
    });
};

createHead();

const createBody = (array) => {
    const actual = array.filter(key => !key.archived);

    for (let row in actual) {
        const tableRow = createTag('tr');
        insertChild(tBody, tableRow);

        notesHeaders.map(key => {
            const tableCol = createTag('td');
            insertChild(tableRow, tableCol);
            key === 'edit' ? tableCol.innerHTML = '<button type="button" class="btn btn-info">Edit</button>' :
                key === 'to archive' ? tableCol.innerHTML = '<button type="button" class="btn btn-warning">To archive</button>' :
                    key === 'delete' ? tableCol.innerHTML = '<button type="button" class="btn btn-danger">X</button>' : tableCol.textContent = actual[row][key];
        });
    }
};

createBody(notes);
// createBody(categories);




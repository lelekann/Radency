import {data, addText, createTag, insertChild} from "./data.js";

const headers = data.notesTable.getNoteHeaders();
const notes = data.notesTable.getNotes();

const notesTable = document.querySelector('#notes');

const table = createTag('table');
table.classList.add('table');
insertChild(notesTable, table);


const tHead = createTag('thead');
tHead.classList.add('thead-light');
const tBody = createTag('tbody');
insertChild(table, tHead);
insertChild(table, tBody);

const createHead = () => {
    let tableHeadRow = createTag('tr');
    insertChild(tHead, tableHeadRow);
    headers.map(key => {
        let colHead = createTag('th');
        tableHeadRow.setAttribute('scope', 'col');
        insertChild(tableHeadRow, colHead);
        key === 'edit' || key === 'to archive' || key === 'delete' ? addText(colHead, ' ') : addText(colHead, key + ' ');
    });
};
createHead();

const createBody = (array) => {
    let actual = array.filter(key => !key.archived);

    for (let row in actual) {
        let tableRow = createTag('tr');
        insertChild(tBody, tableRow);

        headers.map(key => {
            let tableCol = createTag('td');
            insertChild(tableRow, tableCol);
            key === 'edit' ? tableCol.innerHTML = '<button type="button" class="btn btn-outline-info">Edit</button>' :
                key === 'to archive' ? tableCol.innerHTML = '<button type="button" class="btn btn-outline-warning">To archive</button>' :
                    key === 'delete' ? tableCol.innerHTML = '<button type="button" class="btn btn-outline-danger">X</button>' : tableCol.textContent = actual[row][key];
        });
    }
};
createBody(notes);

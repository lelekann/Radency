import {data, addText, createTag, insertChild, clear} from './data.js';
import {updateTable} from "./categoriesTable.js";

const headers = data.notesTable.getNoteHeaders();
const notes = data.notesTable.getNotes();

const notesTable = document.querySelector('#notes');
const table = createTag('table');
table.classList.add('table');
insertChild(notesTable, table);
const addBtn = createTag('button');
addBtn.classList.add('btn', 'btn-primary');
addBtn.textContent = 'Create Note';
insertChild(notesTable, addBtn);


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
        key === 'edit' || key === 'to archive' || key === 'delete' ? addText(colHead, ' ') :
            addText(colHead, key + ' ');
    });
};
createHead();

const updateAll = () => {
    clear(tBody);
    createBody(data.notesTable.getNotes());
    updateTable();
};

const toggleArchive = (id) => {
    data.notesTable.toggleArchiveNote(id);
    updateAll()
};

const deleteNote = (id) => {
    data.notesTable.deleteNote(id);
    updateAll();
};

const createBody = (array) => {
    let actual = array.filter(note => !note.archived);

    for (let row in actual) {
        let tableRow = createTag('tr');
        insertChild(tBody, tableRow);

        headers.map(key => {
            let tableCol = createTag('td');
            insertChild(tableRow, tableCol);
            switch (key) {
                case 'edit':
                    let editBtn = createTag('i');
                    editBtn.classList.add('far', 'fa-edit');
                    insertChild(tableCol, editBtn);
                    break;
                case 'delete':
                    let deleteBtn = createTag('i');
                    deleteBtn.classList.add('fas', 'fa-trash-alt');
                    insertChild(tableCol, deleteBtn);
                    deleteBtn.addEventListener('click', () => deleteNote(actual[row].id));
                    break;
                case 'to archive':
                    let archiveBtn = createTag('i');
                    archiveBtn.classList.add('fas', 'fa-file-archive');
                    archiveBtn.addEventListener('click', () => toggleArchive(actual[row].id));
                    insertChild(tableCol, archiveBtn);
                    break;
                default:
                    addText(tableCol, actual[row][key])
            }
        });
    }
};
createBody(notes);

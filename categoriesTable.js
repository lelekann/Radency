import {data, addText, createTag, insertChild} from "./data.js";

const headers = data.categoriesTable.getCategoriesHeaders();
const categories = data.categoriesTable.getCategories();

let categoriesTable = document.querySelector('#categories');

const table = createTag('table');
table.classList.add('table');
insertChild(categoriesTable, table);

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
        addText(colHead, key + ' ');
    });
};
createHead();

const createBody = (array) => {

    for (let row in array) {
        let tableRow = createTag('tr');
        insertChild(tBody, tableRow);

        headers.map(key => {
            let tableCol = createTag('td');
            insertChild(tableRow, tableCol);
            tableCol.textContent = array[row][key];
        });
    }
};
createBody(categories);

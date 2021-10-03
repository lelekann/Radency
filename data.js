export const data = {
    categoriesTable: {
        _categories: [
            {
                id: 'c_1',
                name: 'Task'
            },
            {
                id: 'c_2',
                name: 'Random Thought'
            },
            {
                id: 'c_3',
                name: 'Idea'
            }
        ],
        _categoriesHeaders: [
            'note_category',
            'active',
            'archived'
        ],
        _summaryTable: [],
        getCategoriesHeaders() {
            return this._categoriesHeaders
        },
        setSummaryTable() {
            this._categories.map(category => {
                let cat = {
                    note_category: category.name,
                    active: 0,
                    archived: 0
                };

                data.notesTable.getNotes().map(note => {
                    if (note.category === category.name) {
                        note.archived ? cat.archived += 1 : cat.active += 1;
                    }
                });

                this._summaryTable.push(cat);
            });
        },
        getCategories() {
            this.setSummaryTable();
            return this._summaryTable
        }
    },
    notesTable: {
        _notes: [
            {
                id: 1,
                name: 'Manicure',
                created: new Date().toDateString(),
                category: 'Task',
                content: 'Sign up for a manicure',
                dates: ['15/10/2021'],
                archived: false
            },
            {
                id: 2,
                name: 'Haircut',
                created: new Date().toDateString(),
                category: 'Task',
                content: 'Sign up for a haircut',
                dates: ['20/10/2021'],
                archived: false
            },
            {
                id: 3,
                name: 'Car',
                created: new Date().toDateString(),
                category: 'Random Thought',
                content: 'Wash car',
                dates: [],
                archived: false
            },
            {
                id: 4,
                name: 'Richard',
                created: new Date().toDateString(),
                category: 'Idea',
                content: 'Call to Richard',
                dates: ['03/10/2021'],
                archived: false
            },
            {
                id: 5,
                name: 'New Task',
                created: new Date().toDateString(),
                category: 'Random Thought',
                content: 'Doing something',
                dates: ['4/10/2021', '5/10/2021'],
                archived: false
            },
            {
                id: 6,
                name: 'Moneskin!!!',
                created: new Date().toDateString(),
                category: 'Idea',
                content: 'Buy the tickets on the concert',
                dates: [],
                archived: true
            },
            {
                id: 7,
                name: 'Task1',
                created: new Date().toDateString(),
                category: 'Task',
                content: 'Create a note app',
                dates: [],
                archived: false
            }
        ],
        _notesHeaders: [
            'name',
            'created',
            'category',
            'content',
            'dates',
            'edit',
            'to archive',
            'delete'
        ],
        getNotes() {
            return this._notes
        },
        getNoteHeaders() {
            return this._notesHeaders
        },
        deleteNote(id) {
            this._notes = this._notes.filter(note => note.id !== id)
        },
        addNote(newNote) {
            this._notes = [...this._notes, newNote]
        },
        toggleArchiveNote(id) {
            this._notes = this._notes.map(note => note.id === id ? {...note, archived: !note.archived} : note);
        }
    }
};

export const createTag = (tag) => {
    return document.createElement(tag);
};

export const insertChild = (parent, child) => {
    return parent.appendChild(child);
};

export const addText = (elem, text) => {
    return elem.textContent = text;
};

export const clear = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};

export const categories = [
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
];

export const categoriesHeaders = ['Note Category', 'Active', 'Archived'];

export const notes = [
    {
        id: 1,
        name: 'Manicure',
        created: new Date().toDateString(),
        category: 'Task',
        content: 'Sign up for a manicure',
        dates: [],
        archived: false
    },
    {
        id: 2,
        name: 'Haircut',
        created: new Date().toDateString(),
        category: 'Task',
        content: 'Sign up for a haircut',
        dates: [],
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
        dates: [],
        archived: false
    },
    {
        id: 5,
        name: 'New Task',
        created: new Date().toDateString(),
        category: 'Random Thought',
        content: 'Doing something',
        dates: [],
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
];

export const notesHeaders = ['name', 'created', 'category', 'content', 'dates', 'edit','to archive','delete'];

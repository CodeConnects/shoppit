console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', '"'+title+'", ', '"'+body+'"');
}

var getAll = () => {
    console.log('Retreiving all notes');
}

var getNote = (title) => {
    console.log('Retreiving note', '"'+title+'"');
}

var deleteNote = (title) => {
    console.log('Removing note', '"'+title+'"');
}

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
};
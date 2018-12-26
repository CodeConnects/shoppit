console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter( (note) => note.title === title );

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes) );
        console.log('Added note', '"'+title+'", ', '"'+body+'"');
    } else {
        console.log('A note with the title of '+title+' already exists. Please add your note again using a different title.');
    }
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
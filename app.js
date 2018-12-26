console.log('Starting app.js');

// node modules
const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

// this app modules
const notes = require('./notes.js');


// console logging of arguments
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);


// process terminal commands
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Added note "${note.title}": "${note.body}"`);
    } else {
        console.log(`A note with the title of "${argv.title}" already exists. Please add your note again using a different title.`);
    }
    //console.log(note);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'delete') {
    var noteRemoved = notes.deleteNote(argv.title);
    if(noteRemoved) {
        console.log(`The note with title "${argv.title}" was successfully deleted.`);
    } else {
        console.log(`Nothing was deleted, a note with the title of "${argv.title}" was not found.`)
    }
} else {
    console.log('Command not found');
}
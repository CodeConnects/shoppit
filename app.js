// node modules
const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

// this app modules
const notes = require('./notes.js');


// set up command variables using yargs
const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Content of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a single note', {
        title: titleOptions
    })
    .command('delete', 'Delete a single note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];


// process terminal commands
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Added note "${note.title}": "${note.body}"`);
    } else {
        console.log(`A note with the title of "${argv.title}" already exists. Please add your note again using a different title.`);
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`\nListing ${allNotes.length} note(s):\n`);
    allNotes.forEach( (note, i) => {
        console.log(`Note #${i+1}:`);
        console.log(`Note title: "${note.title}"`);
        console.log(`Note body: "${note.body}"`);
        console.log('-----\n');
    });
    console.log('End of the list!\n');

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log(`Note title: "${note.title}"`);
        console.log(`Note body: "${note.body}"`);
    } else {
        console.log(`No note with the title of "${argv.title}" was found.`);
    }
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
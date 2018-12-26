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
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'delete') {
    notes.deleteNote(argv.title);
} else {
    console.log('Command not found');
}
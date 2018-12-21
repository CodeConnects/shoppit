console.log('Starting app.js');

// node modules
const fs = require('fs');
const notes = require('./notes.js');

// my modules
const _ = require('lodash');

var command = process.argv[2];
console.log('Command: ', command);

//console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Retreiving note');
} else if (command === 'remove') {
    console.log('Deleting note');
} else {
    console.log('Command not found');
}
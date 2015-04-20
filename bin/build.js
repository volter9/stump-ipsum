#!/usr/bin/env node
/**
 * Dictionary build script
 * 
 * @package stump-ipsum
 */
var fs = require('fs');

var text = fs.readFileSync(__dirname + '/../text.txt').toString(),
    content = text.split('-----');

var dictionary = {
    first:     content[0].trim().split('\n'),
    sentences: content[1].trim().split('\n'),
    last:      content[2].trim().split('\n')
};

fs.writeFileSync(
    __dirname + '/../src/dictionary.json', 
    JSON.stringify(dictionary, null, 4)
);